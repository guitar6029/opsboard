import { Routes } from '@angular/router';

import { Shell } from './core/layout/shell/shell';
import { Dashboard } from './features/dashboard/dashboard/dashboard';
import { WorkOrdersList } from './features/work-orders/work-orders-list/work-orders-list';
import { WorkOrderDetail } from './features/work-orders/work-order-detail/work-order-detail';
import { Login } from './features/auth/login/login';

export const routes: Routes = [
  { path: 'login', component: Login },
  {
    path: '',
    component: Shell,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: Dashboard },
      { path: 'work-orders', component: WorkOrdersList },
      { path: 'work-orders/:id', component: WorkOrderDetail },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];
