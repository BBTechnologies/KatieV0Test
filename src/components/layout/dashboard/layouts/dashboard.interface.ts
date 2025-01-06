import { ReactElement, ReactNode } from 'react';
import { MainHeaderProps } from '../../mainHeader/MainHeader';

export interface GlobalDashboardProps {
  leftPanel: {
    content?: ReactNode | ReactElement;
    isOpen?: boolean;
  },
  rightPanel?: {
    content?: ReactNode | ReactElement;
    isOpen?: boolean;
  },
  toolBar?: {
    show: boolean;
    content?: ReactNode | ReactElement;
  };
  mainHeader: MainHeaderProps;
  mainFooter?: ReactNode | ReactElement;
  children: ReactNode | ReactElement;
}
