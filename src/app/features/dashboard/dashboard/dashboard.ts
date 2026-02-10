import { Component, inject } from '@angular/core';
import { KpiCard } from '../../../ui/kpi-card/kpi-card';
import { WorkOrdersService } from '../../work-orders/work-orders.service';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  imports: [KpiCard, AsyncPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private workOrderService = inject(WorkOrdersService);
  workOrders$ = this.workOrderService.workOrders$;

  inProgressCount$ = this.workOrders$.pipe(
    map((list) => list.filter((workOrder) => workOrder.status === 'in_progress').length),
  );

  openCount$ = this.workOrders$.pipe(
    map((list) => list.filter((workOrder) => workOrder.status === 'open').length),
  );

  completedCount$ = this.workOrders$.pipe(
    map((list) => list.filter((workOrder) => workOrder.status === 'done').length),
  );
}
