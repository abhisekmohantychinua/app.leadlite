import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Lead } from '../../../../core/models/lead';
import { LeadCard } from './lead-card';

describe('LeadCard', () => {
  let component: LeadCard;
  let fixture: ComponentFixture<LeadCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadCard],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(LeadCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('lead', createLead());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

const createLead = (): Lead =>
  new Lead({
    id: 'lead-1',
    title: 'Prospect',
    stage: 'new',
    value: 1000,
    createdAt: new Date('2024-01-01T00:00:00Z'),
    lastModifiedAt: new Date('2024-01-02T00:00:00Z'),
  });
