import { DatePipe } from '@angular/common';
import type { OnDestroy, OnInit } from '@angular/core';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { map, switchMap } from 'rxjs';

import { LeadService } from '../../../../core/services/lead-service';
import { LeadStageComponent } from '../lead-stage/lead-stage';
import { LeadTitle } from '../lead-title/lead-title';
import { LeadValue } from '../lead-value/lead-value';
import { Divider } from 'primeng/divider';

@Component({
  selector: 'app-lead-detail',
  imports: [DrawerModule, DatePipe, LeadTitle, LeadStageComponent, LeadValue, Divider],
  templateUrl: './lead-detail.html',
  styleUrl: './lead-detail.scss',
})
export default class LeadDetail implements OnInit, OnDestroy {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private leadService = inject(LeadService);

  protected readonly lead = toSignal(
    this.activatedRoute.params.pipe(
      map((params) => params['id'] as string),
      switchMap((leadId: string) => this.leadService.getLeadById(leadId)),
    ),
  );
  protected drawerVisible = false;
  ngOnInit(): void {
    this.drawerVisible = true;
  }
  navigateBackOnClose(): void {
    this.router.navigate(['leads']);
  }
  ngOnDestroy(): void {
    this.drawerVisible = false;
  }
}
