import { Component } from '@angular/core';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { SwipeRight } from './swipe-right';

describe('SwipeRight', () => {
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

  it('should emit swipedRight when the pointer moves right far enough', () => {
    dispatchPointerEvent(element, 'pointerdown', 100, 120);
    dispatchPointerEvent(element, 'pointerup', 190, 130);

    expect(host.swipeCount).toBe(1);
  });

  it('should not emit when disableSwipe is true', () => {
    host.disableSwipe = true;
    fixture.detectChanges();

    dispatchPointerEvent(element, 'pointerdown', 100, 120);
    dispatchPointerEvent(element, 'pointerup', 200, 120);

    expect(host.swipeCount).toBe(0);
  });

  it('should ignore primarily vertical movements', () => {
    dispatchPointerEvent(element, 'pointerdown', 100, 120);
    dispatchPointerEvent(element, 'pointerup', 110, 200);

    expect(host.swipeCount).toBe(0);
  });
});

@Component({
  standalone: true,
  imports: [SwipeRight],
  template: `
    <div
      appSwipeRight
      [disableSwipe]="disableSwipe"
      (swipedRight)="handleSwipe()"
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
