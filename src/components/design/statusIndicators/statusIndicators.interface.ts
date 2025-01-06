import { GenericFunction } from '../../../interfaces';

export interface StatusInterface {
  id: string;
  description?: string;
  status: string;
  dueAt?: Date | string;
  onClick?: GenericFunction;
  indicator: 'defCon3' | 'alert' | 'warn' | 'success' | 'info' | string;
}

export interface StatusIndicatorsInterface {
  statuses: StatusInterface[],
  size: 's' | 'm' | 'l';
}
