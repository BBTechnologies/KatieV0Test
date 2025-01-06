import { ReactNode } from 'react';
import { JSONObject } from '../../../interfaces/generic.interface';

export interface KeyValueFilter { [key: string]: string | number | boolean }

export interface BubbleFilter extends Array<never> {
  search: string | number | KeyValueFilter;
  caseSensitive?: boolean;
}

export interface BubbleItem extends JSONObject {
  name: string;
  id: string;
  url?: string;
  label: string;
  description: string;
  status: string;
  path: number[];
  childItems: BubbleItem[];
}

export interface BubbleNavigatorProps {
  bubblesData: BubbleItem[];
  filters?: BubbleFilter[];
  bubbleTemplate?: ReactNode;
}
