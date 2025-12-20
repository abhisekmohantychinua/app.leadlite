import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadKanban } from './lead-kanban';

describe('LeadKanban', () => {
  let component: LeadKanban;
  let fixture: ComponentFixture<LeadKanban>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadKanban]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadKanban);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
