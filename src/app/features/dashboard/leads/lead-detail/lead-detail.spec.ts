import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';

import { LeadService } from '../../../../core/services/lead-service';
import LeadDetail from './lead-detail';

jest.mock('nanoid', () => ({ nanoid: (): string => 'mock-id' }));

describe('LeadDetail', () => {
  let component: LeadDetail;
  let fixture: ComponentFixture<LeadDetail>;
  let leadService: { getLeadById: jest.Mock };
  let router: { navigate: jest.Mock };
  const params$ = new BehaviorSubject<{ id: string }>({ id: 'lead-123' });

  beforeEach(async () => {
    leadService = {
      getLeadById: jest.fn().mockReturnValue(
        of({
          getId: () => 'lead-123',
          getTitle: () => 'Sample Lead',
          getStage: () => 'new',
          getValue: () => 125000,
          getCreatedAt: () => new Date('2024-01-01T00:00:00Z'),
          getLastModifiedAt: () => new Date('2024-01-02T00:00:00Z'),
        }),
      ),
    };
    router = {
      navigate: jest.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [LeadDetail],
      providers: [
        { provide: LeadService, useValue: leadService },
        { provide: Router, useValue: router },
        { provide: ActivatedRoute, useValue: { params: params$.asObservable() } },
        provideNoopAnimations(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LeadDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
