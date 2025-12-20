import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import {
  type SearchCriteria,
  SORT_OPTIONS,
  type SortOption,
} from '../../../core/dto/search-criteria';
import { Search } from './search';

describe('Search', () => {
  let component: Search;
  let fixture: ComponentFixture<Search>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Search],
    }).compileComponents();

    fixture = TestBed.createComponent(Search);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose sort options derived from constants', () => {
    const sortOptions = component['sortOptions'];
    expect(sortOptions).toEqual(
      SORT_OPTIONS.map((option) => ({
        label: option,
        value: option,
      })),
    );
  });

  it('should emit criteria when the search query changes', async () => {
    const emitter = component['searchCriteriaChanged'] as unknown as {
      emit: (criteria: SearchCriteria) => void;
    };
    const emitSpy = jest.spyOn(emitter, 'emit');

    const inputEl = fixture.nativeElement.querySelector(
      'input[name="searchQuery"]',
    ) as HTMLInputElement;

    inputEl.value = 'Lead generation';
    inputEl.dispatchEvent(new Event('input', { bubbles: true }));

    fixture.detectChanges();
    await fixture.whenStable();

    expect(emitSpy).toHaveBeenCalledWith({ query: 'Lead generation', sort: 'relevance' });
  });

  it('should emit criteria when the sort selection changes', () => {
    const emitter = component['searchCriteriaChanged'] as unknown as {
      emit: (criteria: SearchCriteria) => void;
    };
    const emitSpy = jest.spyOn(emitter, 'emit');

    const selectButton = fixture.debugElement.query(By.css('p-select-button'));
    selectButton.triggerEventHandler('ngModelChange', 'desc');

    expect(emitSpy).toHaveBeenCalledWith({ query: '', sort: 'desc' });
  });

  it('should emit the combined criteria when invoked directly', () => {
    const emitter = component['searchCriteriaChanged'] as unknown as {
      emit: (criteria: SearchCriteria) => void;
    };
    const emitSpy = jest.spyOn(emitter, 'emit');

    const mutableComponent = component as unknown as {
      searchQuery: string;
      searchSort: SortOption;
    };
    mutableComponent.searchQuery = 'Top accounts';
    mutableComponent.searchSort = 'asc';

    component.emitSearchCriteria();

    expect(emitSpy).toHaveBeenLastCalledWith({ query: 'Top accounts', sort: 'asc' });
  });
});
