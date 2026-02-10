import { Component, inject } from '@angular/core';
import { WorkOrdersService } from '../work-orders.service';
import { AsyncPipe } from '@angular/common';
import { signal, computed } from '@angular/core';
@Component({
  selector: 'app-work-orders-list',
  imports: [AsyncPipe],
  templateUrl: './work-orders-list.html',
  styleUrl: './work-orders-list.scss',
})
export class WorkOrdersList {
  private workOrdersService = inject(WorkOrdersService);
  workOrders$ = this.workOrdersService.workOrders$;

  title: string = 'Work Order List';
}
