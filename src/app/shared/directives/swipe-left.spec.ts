import { Component } from '@angular/core';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { SwipeLeft } from './swipe-left';

describe('SwipeLeft', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('div') as HTMLElement;
    fixture.detectChanges();
  });

  it('should emit swipedLeft when the pointer moves left far enough', () => {
    dispatchPointerEvent(element, 'pointerdown', 200, 100);
    dispatchPointerEvent(element, 'pointerup', 120, 108);

    expect(host.swipeCount).toBe(1);
  });

  it('should not emit when disableSwipe is true', () => {
    host.disableSwipe = true;
    fixture.detectChanges();

    dispatchPointerEvent(element, 'pointerdown', 200, 100);
    dispatchPointerEvent(element, 'pointerup', 100, 100);

    expect(host.swipeCount).toBe(0);
  });

  it('should ignore primarily vertical movements', () => {
    dispatchPointerEvent(element, 'pointerdown', 200, 100);
    dispatchPointerEvent(element, 'pointerup', 190, 200);

    expect(host.swipeCount).toBe(0);
  });
});

@Component({
  standalone: true,
  imports: [SwipeLeft],
  template: `
    <div
      appSwipeLeft
      [disableSwipe]="disableSwipe"
      (swipedLeft)="handleSwipe()"
      style="width: 200px; height: 200px;"></div>
  `,
})
class TestHostComponent {
  disableSwipe = false;
  swipeCount = 0;

  handleSwipe(): void {
    this.swipeCount += 1;
  }
}

const dispatchPointerEvent = (
  element: HTMLElement,
  type: string,
  clientX: number,
  clientY: number,
): void => {
  const supportsPointerEvent = typeof PointerEvent === 'function';
  const event = supportsPointerEvent
    ? new PointerEvent(type, {
        bubbles: true,
        cancelable: true,
        clientX,
        clientY,
      })
    : (new MouseEvent(type, {
        bubbles: true,
        cancelable: true,
        clientX,
        clientY,
      }) as unknown as PointerEvent);

  element.dispatchEvent(event);
};
