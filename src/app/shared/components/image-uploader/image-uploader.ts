import { CommonModule } from '@angular/common';
import type { ElementRef } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  output,
  signal,
  ViewChild,
} from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { MessageModule } from 'primeng/message';

export type ImageUploaderAspectRatio = '1:1' | '16:9' | '4:5';
export type ImageUploaderState = 'empty' | 'success' | 'error';
export interface ImageUploadChange {
  state: ImageUploaderState;
  file: File | null;
  message: string | null;
}

@Component({
  selector: 'app-image-uploader',
  standalone: true,
  imports: [CommonModule, DialogModule, ButtonModule, MessageModule],
  templateUrl: './image-uploader.html',
  styleUrl: './image-uploader.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'image-uploader',
  },
})
export class ImageUploader {
  private readonly destroyRef = inject(DestroyRef);

  // Inputs allow parent forms to customize constraints without duplicating logic.
  maxUploadSize = input<number>(300000);
  aspectRatio = input<ImageUploaderAspectRatio>('1:1');
  triggerLabel = input('Upload image');

  // Emits state changes so forms can stay in sync with validation.
  imageChange = output<ImageUploadChange>();

  // Signals drive the template without manual change detection.
  dialogVisible = signal(false);
  dragActive = signal(false);
  state = signal<ImageUploaderState>('empty');
  validationMessage = signal<string | null>(null);
  previewUrl = signal<string | null>(null);
  selectedFile = signal<File | null>(null);
  @ViewChild('fileInput') fileInput?: ElementRef<HTMLInputElement>;
  @ViewChild('browseButton') browseButton?: ElementRef<HTMLButtonElement>;

  private previewObjectUrl: string | null = null;
  protected readonly icons = PrimeIcons;

  // Button visuals reflect current upload state for instant feedback.
  buttonSeverity = computed(() => {
    const status = this.state();
    if (status === 'success') return 'primary';
    if (status === 'error') return 'danger';
    return 'secondary';
  });

  buttonIcon = computed(() => {
    const status = this.state();
    if (status === 'success') return PrimeIcons.CHECK;
    if (status === 'error') return PrimeIcons.TIMES_CIRCLE;
    return PrimeIcons.UPLOAD;
  });

  // Aspect-ratio helpers keep dialog copy and layout in sync with inputs.
  aspectRatioCss = computed(() => this.mapAspectRatioToCss(this.aspectRatio()));
  aspectRatioLabel = computed(() => this.formatAspectRatioLabel(this.aspectRatio()));
  maxUploadSizeLabel = computed(() => this.formatFileSize(this.normalizedMaxUploadSize()));

  constructor() {
    this.destroyRef.onDestroy(() => this.revokePreviewUrl());
    queueMicrotask(() => this.emitState());
  }

  openDialog(): void {
    this.dialogVisible.set(true);
    this.validationMessage.set(null);
    this.dragActive.set(false);
    this.focusBrowseButton();
  }

  handleVisibleChange(visible: boolean): void {
    this.dialogVisible.set(visible);
    if (!visible) {
      this.dragActive.set(false);
      return;
    }
    this.focusBrowseButton();
  }

  handleDragOver(event: DragEvent): void {
    event.preventDefault();
    this.dragActive.set(true);
  }

  handleDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.dragActive.set(false);
  }

  handleDrop(event: DragEvent): void {
    event.preventDefault();
    this.dragActive.set(false);
    const file = event.dataTransfer?.files?.[0] ?? null;
    this.handleIncomingFile(file);
  }

  handleFileInputChange(event: Event): void {
    const inputTarget = event.target as HTMLInputElement | null;
    const file = inputTarget?.files?.[0] ?? null;
    this.handleIncomingFile(file);
    if (inputTarget) inputTarget.value = '';
    this.dragActive.set(false);
  }

  browseFiles(input: HTMLInputElement): void {
    input.click();
  }

  clearSelection(): void {
    this.selectedFile.set(null);
    this.revokePreviewUrl();
    this.previewUrl.set(null);
    this.state.set('empty');
    this.validationMessage.set(null);
    if (this.fileInput?.nativeElement) {
      this.fileInput.nativeElement.value = '';
    }
    this.emitState();
  }

  closeDialog(): void {
    this.handleVisibleChange(false);
  }

  private handleIncomingFile(file: File | null): void {
    this.dragActive.set(false);
    if (!file) {
      this.setError('No image selected.');
      return;
    }

    if (!file.type.startsWith('image/')) {
      this.setError('Only image files are supported.');
      return;
    }

    if (file.size > this.normalizedMaxUploadSize()) {
      this.setError(`Image must be smaller than ${this.maxUploadSizeLabel()}.`);
      return;
    }

    this.selectedFile.set(file);
    this.validationMessage.set(null);
    this.state.set('success');
    this.updatePreviewUrl(file);
    this.emitState();
  }

  private setError(message: string): void {
    this.selectedFile.set(null);
    this.revokePreviewUrl();
    this.previewUrl.set(null);
    this.validationMessage.set(message);
    this.state.set('error');
    this.emitState();
  }

  // Normalizes state and notifies parent listeners.
  private emitState(): void {
    this.imageChange.emit({
      state: this.state(),
      file: this.selectedFile(),
      message: this.validationMessage(),
    });
  }

  private updatePreviewUrl(file: File): void {
    this.revokePreviewUrl();
    try {
      this.previewObjectUrl = URL.createObjectURL(file);
      this.previewUrl.set(this.previewObjectUrl);
    } catch (error) {
      console.warn('Failed to generate preview URL', error);
      this.previewUrl.set(null);
    }
  }

  private revokePreviewUrl(): void {
    if (this.previewObjectUrl) {
      URL.revokeObjectURL(this.previewObjectUrl);
      this.previewObjectUrl = null;
    }
  }

  private focusBrowseButton(): void {
    setTimeout(() => this.browseButton?.nativeElement.focus());
  }

  private normalizedMaxUploadSize(): number {
    const size = this.maxUploadSize();
    if (!size || size <= 0) return 300000;
    return size;
  }

  private mapAspectRatioToCss(ratio: ImageUploaderAspectRatio | string | null | undefined): string {
    switch (ratio) {
      case '16:9':
        return '16 / 9';
      case '4:5':
        return '4 / 5';
      default:
        return '1 / 1';
    }
  }

  private formatAspectRatioLabel(
    ratio: ImageUploaderAspectRatio | string | null | undefined,
  ): string {
    if (ratio === '16:9') return '16:9 widescreen';
    if (ratio === '4:5') return '4:5 portrait';
    return '1:1 square';
  }

  private formatFileSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    const kb = bytes / 1024;
    if (kb < 1024) return `${kb.toFixed(0)} KB`;
    const mb = kb / 1024;
    return `${mb.toFixed(1)} MB`;
  }
}
