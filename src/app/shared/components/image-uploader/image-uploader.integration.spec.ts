import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

import { ImageUploader } from './image-uploader';

const createMockFile = (name: string, size: number, type = 'image/png'): File => {
  const data = new Uint8Array(size);
  return new File([data], name, { type });
};

describe('ImageUploader Integration', () => {
  let fixture: ComponentFixture<ImageUploader>;
  let component: ImageUploader;

  beforeEach(async () => {
    const urlRef = globalThis.URL as typeof URL & {
      createObjectURL?: (blob: Blob) => string;
      revokeObjectURL?: (url: string) => void;
    };
    if (!urlRef.createObjectURL) {
      urlRef.createObjectURL = (): string => 'blob:integration';
    }
    if (!urlRef.revokeObjectURL) {
      urlRef.revokeObjectURL = (): void => undefined;
    }
    jest.spyOn(urlRef, 'createObjectURL').mockReturnValue('blob:integration');
    jest.spyOn(urlRef, 'revokeObjectURL').mockImplementation(() => undefined);

    await TestBed.configureTestingModule({
      imports: [ImageUploader],
      providers: [provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageUploader);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  afterEach(() => {
    fixture.destroy();
    jest.restoreAllMocks();
  });

  it('should open the dialog and move focus to the browse button', async () => {
    await openDialog();

    const browseButton = fixture.nativeElement.querySelector(
      '.image-uploader__dropzone button',
    ) as HTMLButtonElement;

    await waitForCondition(() => document.activeElement === browseButton);
    expect(browseButton).toBeTruthy();
  });

  it('should accept a valid file through the input and render a preview', async () => {
    await openDialog();
    const input = getFileInput();
    const file = createMockFile('avatar.png', 1024);
    applyFileToInput(input, file);

    input.dispatchEvent(new Event('change'));
    await waitForCondition(() => component.state() === 'success');

    const previewImg = fixture.nativeElement.querySelector('.image-uploader__preview img');
    expect(previewImg).toBeTruthy();
    expect(component.selectedFile()).toBe(file);
  });

  it('should surface a size error and allow clearing the selection', async () => {
    await openDialog();
    const input = getFileInput();
    const largeFile = createMockFile('large.png', 400_000);
    applyFileToInput(input, largeFile);

    input.dispatchEvent(new Event('change'));
    await waitForCondition(() => component.state() === 'error');

    const errorMessage = fixture.nativeElement.querySelector('p-message');
    expect(errorMessage?.textContent).toContain('Image must be smaller');

    // Provide a valid file so the clear button appears.
    const validFile = createMockFile('avatar.png', 1024);
    applyFileToInput(input, validFile);
    input.dispatchEvent(new Event('change'));
    await waitForCondition(() => component.state() === 'success');

    const clearButton = Array.from(
      fixture.nativeElement.querySelectorAll(
        '.image-uploader__actions button',
      ) as NodeListOf<HTMLButtonElement>,
    ).find((button) => button.textContent?.trim() === 'Clear') as HTMLButtonElement;
    clearButton.click();
    await waitForCondition(() => component.state() === 'empty');
    expect(component.previewUrl()).toBeNull();
  });

  it('should toggle drag styles when dragging over the dropzone', async () => {
    await openDialog();
    const dropzone = fixture.nativeElement.querySelector('.image-uploader__dropzone');

    dropzone.dispatchEvent(new Event('dragover', { bubbles: true, cancelable: true }));
    await waitForCondition(() => component.dragActive());
    expect(dropzone.classList.contains('image-uploader__dropzone--active')).toBe(true);

    dropzone.dispatchEvent(new Event('dragleave', { bubbles: true, cancelable: true }));
    await waitForCondition(() => !component.dragActive());
    expect(dropzone.classList.contains('image-uploader__dropzone--active')).toBe(false);
  });

  const getTriggerButton = (): HTMLButtonElement =>
    fixture.nativeElement.querySelector('.image-uploader__trigger');

  const openDialog = async (): Promise<void> => {
    getTriggerButton().click();
    fixture.detectChanges();
    await waitForCondition(() => component.dialogVisible());
  };

  const getFileInput = (): HTMLInputElement =>
    fixture.nativeElement.querySelector('input[type="file"]');

  const applyFileToInput = (input: HTMLInputElement, file: File): void => {
    const files = createFileList(file);
    Object.defineProperty(input, 'files', {
      configurable: true,
      get: () => files,
    });
  };

  const createFileList = (file: File): FileList => {
    if (typeof DataTransfer !== 'undefined') {
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      return dataTransfer.files;
    }
    return {
      0: file,
      length: 1,
      item: () => file,
    } as unknown as FileList;
  };

  const waitForCondition = async (predicate: () => boolean, timeout = 2000): Promise<void> => {
    const deadline = Date.now() + timeout;
    await new Promise<void>((resolve, reject) => {
      const poll = (): void => {
        fixture.detectChanges();
        if (predicate()) {
          resolve();
          return;
        }
        if (Date.now() > deadline) {
          reject(new Error('Condition not met within timeout'));
          return;
        }
        setTimeout(poll, 10);
      };
      poll();
    });
  };
});
