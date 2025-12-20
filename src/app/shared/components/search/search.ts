import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButton, SelectButtonModule } from 'primeng/selectbutton';

import {
  type SearchCriteria,
  SORT_OPTIONS,
  type SortOption,
} from '../../../core/dto/search-criteria';

@Component({
  selector: 'app-search',
  imports: [
    IconFieldModule,
    InputIconModule,
    SelectButtonModule,
    SelectButton,
    FormsModule,
    InputTextModule,
  ],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {
  protected readonly searchQuery: string = '';
  protected readonly searchSort: SortOption = 'relevance';
  protected readonly sortOptions = SORT_OPTIONS.map((option) => ({
    label: option as string,
    value: option as string,
  }));

  protected readonly searchCriteriaChanged = output<SearchCriteria>();

  emitSearchCriteria(): void {
    this.searchCriteriaChanged.emit({
      query: this.searchQuery,
      sort: this.searchSort,
    });
  }
}
