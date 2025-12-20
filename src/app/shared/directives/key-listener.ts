import { DOCUMENT } from '@angular/common';
import type { OnDestroy, OnInit } from '@angular/core';
import { computed, Directive, effect, inject, input } from '@angular/core';

@Directive({
  selector: '[appKeyListener]',
  host: {
    tabindex: '0',
  },
})
export class KeyListener implements OnDestroy, OnInit {
  private static readonly validCodePattern = /^Key[A-Z]$/;
  private static readonly validDigitPattern = /^Digit[0-9]$/;
  private static readonly namedCodes = new Set([
    'Enter',
    'Escape',
    'Space',
    'Backspace',
    'Tab',
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
  ]);

  private static readonly editableInputTypes = new Set([
    'text',
    'email',
    'password',
    'search',
    'tel',
    'url',
    'number',
  ]);

  readonly key = input.required<string>({ alias: 'appKeyListener' });
  readonly action = input.required<() => void>({ alias: 'appKeyListenerAction' });
  readonly disabled = input(false, { alias: 'appKeyListenerDisabled' });
  private readonly doc =
    inject(DOCUMENT, { optional: true }) ?? (typeof document !== 'undefined' ? document : null);
  private readonly shortcutCode = computed(() => this.normalizeShortcut(this.key()));
  private readonly validateShortcutEffect = effect(() => {
    this.shortcutCode();
  });

  private readonly globalHandler = (event: KeyboardEvent): void => {
    if (this.disabled()) return;
    if (this.isEditableContextActive()) return;
    const shortcut = this.shortcutCode();
    if (event.code !== shortcut) return;
    event.preventDefault();
    this.action()();
  };

  ngOnInit(): void {
    this.doc?.addEventListener('keydown', this.globalHandler);
  }

  ngOnDestroy(): void {
    this.doc?.removeEventListener('keydown', this.globalHandler);
  }

  private normalizeShortcut(shortcut: string): string {
    const value = shortcut?.trim();
    if (!value) {
      throw new Error('appKeyListener requires a non-empty shortcut value.');
    }

    if (KeyListener.validCodePattern.test(value) || KeyListener.validDigitPattern.test(value)) {
      return value;
    }

    if (KeyListener.namedCodes.has(value)) {
      return value;
    }

    const upper = value.toUpperCase();
    if (/^[A-Z]$/.test(upper)) {
      return `Key${upper}`;
    }

    if (/^[0-9]$/.test(value)) {
      return `Digit${value}`;
    }

    throw new Error(
      `Unsupported shortcut "${shortcut}". Provide a valid KeyboardEvent.code (e.g., "KeyH", "Digit5", "Enter").`,
    );
  }

  private isEditableContextActive(): boolean {
    const active = (this.doc?.activeElement ?? null) as HTMLElement | null;
    if (!active) return false;

    const editableAncestor = active.closest('[contenteditable]');
    if (editableAncestor && editableAncestor.getAttribute('contenteditable') !== 'false') {
      return true;
    }

    if (active instanceof HTMLTextAreaElement || active instanceof HTMLSelectElement) {
      return true;
    }

    if (active instanceof HTMLInputElement) {
      const type = active.type?.toLowerCase() ?? 'text';
      return KeyListener.editableInputTypes.has(type);
    }

    return active.getAttribute('role') === 'textbox';
  }
}
