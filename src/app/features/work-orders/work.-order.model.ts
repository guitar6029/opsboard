export type WorkOrderStatus = 'open' | 'in_progress' | 'done';
export type WorkOrderPriority = 'low' | 'medium' | 'high';

export interface WorkOrder {
  id: number;
  title: string;
  status: WorkOrderStatus;
  priority: WorkOrderPriority;
}
