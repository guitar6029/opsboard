import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { WorkOrder } from './work.-order.model';

@Injectable({ providedIn: 'root' })
export class WorkOrdersService {
  readonly workOrders$: Observable<WorkOrder[]>;
  constructor(private http: HttpClient) {
    // cached observables
    // first equest wins, susequnt subscribers reuse
    this.workOrders$ = this.http
      .get<WorkOrder[]>('/assets/work-orders.json')
      .pipe(shareReplay({ bufferSize: 1, refCount: true }));
  }
}
