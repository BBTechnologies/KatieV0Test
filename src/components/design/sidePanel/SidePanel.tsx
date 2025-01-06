'use client';

import React, {
  ReactNode, useCallback, useEffect, useRef, useState
} from 'react';
import { GenericFunction } from '../../../interfaces';
import { Icon, IconProps } from '../icons/basicIcon/Icon';

import './sidePanel.scss';

export interface SidePanelInterface {
  id: string;
  panelLabel?: string;
  size?: 's' | 'm' | 'l';
  position?: 'left' | 'right' | 'top' | 'bottom';
  animation?: 'none' | 'slide';
  icons?: {
    open: string;
    closed: string;
  }
  onClose?: GenericFunction;
  onOpen?: GenericFunction;
  isOpen?: boolean;
  isFloating?: boolean;
  customCssClass?: string;
  customControlButtonCssClass?: string;
  children: ReactNode;
}

export const SidePanel: React.FC<SidePanelInterface> = (
  {
    id,
    panelLabel = 'side panel',
    size = 'm',
    position = 'right',
    animation = 'slide',
    icons,
    onClose = () => {},
    onOpen = () => {},
    isOpen = false,
    isFloating = true,
    customCssClass,
    customControlButtonCssClass = '',
    children
  }
) => {
  const [isOpenState, setIsOpenState] = useState(isOpen);
  const panelElement = useRef<HTMLDivElement>(null);

  const TOGGLE_TEXT = `Open and close ${ panelLabel }`;
  const panelCloseButton = useRef(null);

  const TogglePanelOpenState = useCallback(() => {
    const newStateIsOpen = !isOpenState;
    setIsOpenState(newStateIsOpen);
    if (newStateIsOpen) {
      onOpen();
    } else {
      onClose();
    }
  }, [isOpenState, onClose, onOpen]);

  const getIconCssClass = () => {
    if (icons) {
      return isOpenState ? icons.closed : icons.open;
    }

    if (isOpenState) {
      return 'close';
    }

    switch (position) {
    case 'left':
      return 'chevronRightSelect';
    case 'top':
      return 'chevronDownSelect';
    case 'bottom':
      return 'chevronUpSelect';
    default:
      return 'chevronLeftSelect';
    }
  };

  const PanelCloseButton: React.FC = () => (
    <button ref={ panelCloseButton } className={`sidePanelClose ${ customControlButtonCssClass }`} title={ TOGGLE_TEXT } type="button" onClick={ () => TogglePanelOpenState() }>
      <Icon icon={ getIconCssClass() } />
      <span className="sr-only">Open and close panel</span>
    </button>
  );

  const panelCssClass = `sidePanel 
    ${ isOpenState ? 'isOpen' : '' }
    ${ isFloating ? 'isFloating' : '' }
    sidePanelSize_${ size }
    sidePanelPosition_${ position }
    sidePanelAnimation_${ animation }
    ${ customCssClass || '' }`;

  useEffect(() => {
    if (!isFloating && panelElement.current) {
      if (animation === 'slide') {
        if (isOpenState) {
          document.body.classList.add('withSidePanels');
          document.body.classList.add(`sidePanel_${ size }_${ position }`);
        } else {
          document.body.classList.remove(`sidePanel_${ size }_${ position }`);
        }
      } else {
        document.body.classList.add(`sidePanelFixed_${ size }_${ position }`);
      }
    }

    return () => {
      document.body.classList.remove('withSidePanels');
      document.body.classList.remove(`sidePanelFixed_${ size }_${ position }`);
    };
  }, [animation, isFloating, isOpenState, position, size]);

  return (
    <div ref={ panelElement } title={ panelLabel } id={ id } className={ panelCssClass }>
      { animation === 'slide' && <PanelCloseButton /> }
      <div className="sidePanelContent">
        { children }
      </div>
    </div>
  );
};
