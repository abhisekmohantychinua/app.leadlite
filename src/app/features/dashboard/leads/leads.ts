import { Component, computed, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

import type { SearchCriteria } from '../../../core/dto/search-criteria';
import { LeadService } from '../../../core/services/lead-service';
import { NewLead } from '../../../shared/components/new-lead/new-lead';
import { Search } from '../../../shared/components/search/search';
import { LeadCard } from './lead-card/lead-card';
import { LeadKanban } from './lead-kanban/lead-kanban';

@Component({
  selector: 'app-leads',
  imports: [Search, NewLead, LeadCard, LeadKanban],
  templateUrl: './leads.html',
  styleUrl: './leads.scss',
})
export default class Leads {
  protected readonly searchCriteria = signal<SearchCriteria>({
    query: '',
    sort: 'relevance',
  });
  private readonly refresh = signal<symbol>(Symbol());

  private readonly leadService = inject(LeadService);
  private readonly leads = toSignal(
    toObservable(this.refresh).pipe(
      switchMap(() => this.leadService.getLeads(this.searchCriteria())),
    ),
    { initialValue: [] },
  );
  protected readonly newLeads = computed(() =>
    this.leads().filter((lead) => lead.getStage() === 'new'),
  );
  protected readonly contactedLeads = computed(() =>
    this.leads().filter((lead) => lead.getStage() === 'contacted'),
  );
  protected readonly proposalLeads = computed(() =>
    this.leads().filter((lead) => lead.getStage() === 'proposal'),
  );
  protected readonly closedLeads = computed(() =>
    this.leads().filter((lead) => lead.getStage() === 'closed'),
  );

  handleSearchCriteriaChanged(criteria: SearchCriteria): void {
    this.searchCriteria.set(criteria);
    this.refresh.set(Symbol());
  }
  handleCreatedNewLead(): void {
    this.refresh.set(Symbol());
  }
  handleUpdatedLead(): void {
    this.refresh.set(Symbol());
  }
}
