import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

import type { ImageUploadChange } from './image-uploader';
import { ImageUploader } from './image-uploader';

const createMockFile = (name: string, size: number, type = 'image/png'): File => {
  const data = new Uint8Array(size);
  return new File([data], name, { type });
};

describe('ImageUploader', () => {
  let component: ImageUploader;
  let fixture: ComponentFixture<ImageUploader>;
  let emitted: ImageUploadChange[];

  beforeEach(async () => {
    const urlRef = globalThis.URL as typeof URL & {
      createObjectURL?: (blob: Blob) => string;
      revokeObjectURL?: (url: string) => void;
    };
    if (!urlRef.createObjectURL) {
      urlRef.createObjectURL = (): string => 'blob:mock';
    }
    if (!urlRef.revokeObjectURL) {
      urlRef.revokeObjectURL = (): void => undefined;
    }
    jest.spyOn(urlRef, 'createObjectURL').mockReturnValue('blob:mock');
    jest.spyOn(urlRef, 'revokeObjectURL').mockImplementation(() => undefined);

    await TestBed.configureTestingModule({
      imports: [ImageUploader],
      providers: [provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageUploader);
    component = fixture.componentInstance;
    emitted = [];
    component.imageChange.subscribe((event) => emitted.push(event));
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.state()).toBe('empty');
    expect(emitted.at(0)?.state).toBe('empty');
  });

  it('should emit success event for valid image', () => {
    const file = createMockFile('avatar.png', 1024);
    triggerFile(component, file);

    expect(component.state()).toBe('success');
    expect(component.selectedFile()).toBe(file);
    const lastEmission = emitted.at(-1);
    expect(lastEmission?.state).toBe('success');
    expect(lastEmission?.file).toBe(file);
    expect(lastEmission?.message).toBeNull();
  });

  it('should reject files that exceed max size', () => {
    const largeFile = createMockFile('large.png', 400_000);

    triggerFile(component, largeFile);

    expect(component.state()).toBe('error');
    expect(component.validationMessage()).toContain('smaller');
    const lastEmission = emitted.at(-1);
    expect(lastEmission?.state).toBe('error');
    expect(lastEmission?.file).toBeNull();
  });

  it('should clear selection and reset state', () => {
    const file = createMockFile('photo.png', 512);
    triggerFile(component, file);

    component.clearSelection();

    expect(component.state()).toBe('empty');
    expect(component.previewUrl()).toBeNull();
    const lastEmission = emitted.at(-1);
    expect(lastEmission?.state).toBe('empty');
    expect(lastEmission?.file).toBeNull();
  });

  it('should reset drag state when dialog closes', () => {
    component.dragActive.set(true);
    component.handleVisibleChange(false);

    expect(component.dialogVisible()).toBe(false);
    expect(component.dragActive()).toBe(false);
  });
});

const triggerFile = (uploader: ImageUploader, file: File | null): void => {
  (uploader as unknown as { handleIncomingFile(selected: File | null): void }).handleIncomingFile(
    file,
  );
};
