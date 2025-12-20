import { Component, signal } from '@angular/core';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { KeyListener } from './key-listener';

@Component({
  imports: [KeyListener],
  template: `
    <input type="text" class="editable-field" />
    <button
      type="button"
      [appKeyListener]="shortcutKey"
      [appKeyListenerAction]="onShortcut"
      [appKeyListenerDisabled]="shortcutDisabled()">
      Trigger
    </button>
  `,
})
class HostComponent {
  shortcutKey = 'KeyK';
  shortcutDisabled = signal(false);
  invoked = signal(false);

  onShortcut = (): void => {
    this.invoked.set(true);
  };
}

@Component({
  imports: [KeyListener],
  template: `
    <button type="button" [appKeyListener]="shortcut" [appKeyListenerAction]="noop"></button>
  `,
})
class ValidationHostComponent {
  shortcut = 'KeyX';
  readonly noop = (): void => undefined;
}

describe('KeyListenerDirective', () => {
  let fixture: ComponentFixture<HostComponent>;
  let host: HostComponent;
  let buttonEl: HTMLButtonElement;
  let inputEl: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent, ValidationHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    buttonEl = fixture.nativeElement.querySelector('button');
    inputEl = fixture.nativeElement.querySelector('input');
    buttonEl.focus();
  });

  const dispatchKey = (code: string): void => {
    const event = new KeyboardEvent('keydown', { code, bubbles: true });
    document.dispatchEvent(event);
  };

  it('should emit when the configured key is pressed', () => {
    host.invoked.set(false);
    dispatchKey('KeyK');
    expect(host.invoked()).toBe(true);
  });

  it('should ignore non-matching keys', () => {
    host.invoked.set(false);
    dispatchKey('KeyP');
    expect(host.invoked()).toBe(false);
  });

  it('should respect the disabled flag', () => {
    host.invoked.set(false);
    host.shortcutDisabled.set(true);
    fixture.detectChanges();
    dispatchKey('KeyK');
    expect(host.invoked()).toBe(false);
  });

  it('should convert single-letter shortcuts to keyboard codes', () => {
    host.invoked.set(false);
    host.shortcutKey = 'h';
    fixture.detectChanges();
    dispatchKey('KeyH');
    expect(host.invoked()).toBe(true);
  });

  it('should convert digits to digit codes', () => {
    host.invoked.set(false);
    host.shortcutKey = '5';
    fixture.detectChanges();
    dispatchKey('Digit5');
    expect(host.invoked()).toBe(true);
  });

  it('should ignore shortcuts while an editable input is focused', () => {
    host.invoked.set(false);
    inputEl.focus();
    dispatchKey('KeyK');
    expect(host.invoked()).toBe(false);
    buttonEl.focus();
  });

  it('should throw for unsupported shortcut formats', () => {
    const validationFixture = TestBed.createComponent(ValidationHostComponent);
    const validationHost = validationFixture.componentInstance;
    validationHost.shortcut = 'Shift+K';
    expect(() => validationFixture.detectChanges()).toThrow(/Unsupported shortcut "Shift\+K"/);
  });
});
