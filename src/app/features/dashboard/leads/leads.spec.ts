import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

import { LeadService } from '../../../core/services/lead-service';
import Leads from './leads';

jest.mock('nanoid', () => ({ nanoid: (): string => 'mock-id' }));

describe('Leads', () => {
  let component: Leads;
  let fixture: ComponentFixture<Leads>;
  let leadServiceMock: { getLeads: jest.Mock; createLead: jest.Mock };

  beforeEach(async () => {
    leadServiceMock = {
      getLeads: jest.fn().mockReturnValue(of([])),
      createLead: jest.fn(),
    };
    await TestBed.configureTestingModule({
      imports: [Leads, NoopAnimationsModule],
      providers: [{ provide: LeadService, useValue: leadServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(Leads);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
