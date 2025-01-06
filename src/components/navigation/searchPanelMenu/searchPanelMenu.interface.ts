import { GenericFunction } from '../../../interfaces';
import { ButtonProps } from '../../form/buttons/button.interface';

export interface SearchPanelResultProps {
  label: string;
  id: string;
  onClick: GenericFunction;
}

export interface SearchPanelMenuProps {
  id: string;
  search: {
    label: string;
    id: string;
    searchResults?: SearchPanelResultProps[];
  };
  heading?: string;
  topActionButtons?: ButtonProps[];
  mainActionButtons: ButtonProps[];
  bottomActionButtons?: ButtonProps[];
  activeActionButtonId: string;
}

export interface SearchPanelMenuTriggerProps {
  panel: SearchPanelMenuProps;
  panelNumber: number;
  onClick: GenericFunction;
}

export interface SearchPanelSearchProps {
  onSearchClear?: GenericFunction;
  onSearch?: GenericFunction;
}

export interface SearchPanelMenusProps extends SearchPanelSearchProps {
  panels: SearchPanelMenuProps[],
  activePanel: number;
}

export interface SearchPanelMenuContentProps extends SearchPanelSearchProps {
  panel: SearchPanelMenuProps;
  isActive: boolean;
}
