import { CurrencyPipe, DatePipe } from '@angular/common';
import type { OnDestroy } from '@angular/core';
import { Component, inject, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import type { Subscription } from 'rxjs';

import type { Lead, LeadStage } from '../../../../core/models/lead';
import { LeadService } from '../../../../core/services/lead-service';
import { SwipeLeft } from '../../../../shared/directives/swipe-left';
import { SwipeRight } from '../../../../shared/directives/swipe-right';
import { LeadTitle } from '../lead-title/lead-title';

@Component({
  selector: 'app-lead-card',
  imports: [CardModule, DatePipe, RouterLink, CurrencyPipe, SwipeRight, SwipeLeft, LeadTitle],
  templateUrl: './lead-card.html',
  styleUrl: './lead-card.scss',
})
export class LeadCard implements OnDestroy {
  lead = input.required<Lead>();
  leadUpdated = output<void>();
  private leadService = inject(LeadService);
  private updateStageSubscription?: Subscription;
  private deleteLeadSubscription?: Subscription;

  updateStage(newStage?: LeadStage): void {
    if (!newStage) {
      switch (this.lead().getStage()) {
        case 'new':
          newStage = 'contacted';
          break;
        case 'contacted':
          newStage = 'proposal';
          break;
        case 'proposal':
          newStage = 'closed';
          break;
        case 'closed':
          newStage = 'closed';
          break;
      }
    }
    this.updateStageSubscription = this.leadService
      .updateLeadStage(this.lead().getId(), newStage)
      .subscribe(() => {
        this.leadUpdated.emit();
      });
  }

  deleteLead(): void {
    this.leadService.deleteLead(this.lead().getId()).subscribe(() => {
      this.leadUpdated.emit();
    });
  }

  ngOnDestroy(): void {
    this.updateStageSubscription?.unsubscribe();
    this.deleteLeadSubscription?.unsubscribe();
  }
}
