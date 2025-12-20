import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

import { LeadKanban } from './lead-kanban';

jest.mock('nanoid', () => ({ nanoid: (): string => 'mock-id' }));

describe('LeadKanban', () => {
  let component: LeadKanban;
  let fixture: ComponentFixture<LeadKanban>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadKanban],
      providers: [provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(LeadKanban);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('kanbanType', 'new');
    fixture.componentRef.setInput('leads', []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
