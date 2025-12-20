import { Directive, booleanAttribute, input, output } from '@angular/core';

@Directive({
  selector: '[appSwipeLeft]',
  standalone: true,
  host: {
    '(pointerdown)': 'handlePointerDown($event)',
    '(pointerup)': 'handlePointerUp($event)',
    '(pointercancel)': 'resetGesture()',
    '(pointerleave)': 'resetGesture()',
  },
})
export class SwipeLeft {
  private startX: number | null = null;
  private startY: number | null = null;
  private readonly minHorizontalDistance = 60;
  private readonly maxVerticalDeviation = 35;

  disableSwipe = input(false, { transform: booleanAttribute });
  swipedLeft = output<void>();

  handlePointerDown(event: PointerEvent): void {
    if (this.disableSwipe()) {
      this.resetGesture();
      return;
    }
    this.startX = event.clientX;
    this.startY = event.clientY;
  }

  handlePointerUp(event: PointerEvent): void {
    if (this.disableSwipe() || this.startX === null || this.startY === null) {
      this.resetGesture();
      return;
    }

    const deltaX = event.clientX - this.startX;
    const deltaY = Math.abs(event.clientY - this.startY);

    if (deltaY <= this.maxVerticalDeviation && deltaX <= -this.minHorizontalDistance) {
      this.swipedLeft.emit();
    }

    this.resetGesture();
  }

  resetGesture(): void {
    this.startX = null;
    this.startY = null;
  }
}
