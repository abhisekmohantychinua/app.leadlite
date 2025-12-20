import { Component, computed, input, output } from '@angular/core';
import { MessageModule } from 'primeng/message';

import type { Lead, LeadStage } from '../../../../core/models/lead';
import { LeadCard } from '../lead-card/lead-card';

interface KanbanTitle {
  title: string;
  description: string;
  severity: 'success' | 'info' | 'error' | 'secondary';
  icon: string;
}

@Component({
  selector: 'app-lead-kanban',
  imports: [LeadCard, MessageModule],
  templateUrl: './lead-kanban.html',
  styleUrl: './lead-kanban.scss',
})
export class LeadKanban {
  kanbanType = input.required<LeadStage>();
  leadUpdated = output<void>();
  protected readonly kanbanTitle = computed<KanbanTitle>(() => {
    switch (this.kanbanType()) {
      case 'new':
        return {
          title: 'New Leads',
          description: 'Leads that have just been added.',
          severity: 'success',
          icon: 'pi pi-inbox',
        };
      case 'contacted':
        return {
          title: 'Contacted Leads',
          description: 'Leads that have been contacted.',
          severity: 'info',
          icon: 'pi pi-comments',
        };
      case 'proposal':
        return {
          title: 'Proposal Leads',
          description: 'Leads that have received a proposal.',
          severity: 'error',
          icon: 'pi pi-file-edit',
        };
      case 'closed':
        return {
          title: 'Closed Leads',
          description: 'Leads that have been closed.',
          severity: 'secondary',
          icon: 'pi pi-check-circle',
        };
    }
  });
  leads = input.required<Lead[]>();

  handleLeadUpdated(): void {
    this.leadUpdated.emit();
  }
}
