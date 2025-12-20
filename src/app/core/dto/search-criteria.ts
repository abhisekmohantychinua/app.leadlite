export interface SearchCriteria {
  query: string;
  sort: SortOption;
}
export type SortOption = 'asc' | 'desc' | 'relevance';
export const SORT_OPTIONS: SortOption[] = ['asc', 'desc', 'relevance'];
