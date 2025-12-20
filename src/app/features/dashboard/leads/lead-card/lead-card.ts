import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';

import type { Lead } from '../../../../core/models/lead';

@Component({
  selector: 'app-lead-card',
  imports: [CardModule, DatePipe, RouterLink, CurrencyPipe],
  templateUrl: './lead-card.html',
  styleUrl: './lead-card.scss',
})
export class LeadCard {
  lead = input.required<Lead>();
}
