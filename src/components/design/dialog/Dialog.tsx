'use client';

/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

import React, {
  ReactNode, useCallback, useEffect, useRef, useState
} from 'react';
import { GenericFunction } from '../../../interfaces';
import { Icon } from '../icons/basicIcon/Icon';
import { useDialogOverlay } from '../../../hooks/DialogOverlay';

import './dialog.scss';
import { useFocusTrap } from '../../../hooks/FocusTrap';

interface DialogInterface {
  id: string;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  position?: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
  animation?: 'none' | 'grow' | 'reveal';
  scrollBehaviour?: 'contentOnly' | 'contentAndFooter' | 'all';
  onClose: GenericFunction;
  open?: boolean;
  overlay?: {
    parentNode?: HTMLElement;
    customCssClass?: string;
  };
  header: string | ReactNode;
  footer?: string | ReactNode;
  children: ReactNode;
  screenReaderInstruction?: string;
  customCssClasses?: {
    dialog?: string;
    content?: string;
    header?: string;
    footer?: string;
  }
}

export const Dialog: React.FC<DialogInterface> = (
  {
    id,
    size = 'm',
    position = 'center',
    animation = 'none',
    scrollBehaviour = 'contentAndFooter',
    onClose = () => {},
    open = false,
    overlay,
    header,
    footer,
    children,
    screenReaderInstruction = `The following content is in a dialog. 
      You can press the Tab key to navigate through the elements, and press Escape to close the dialog.`,
    customCssClasses
  }
) => {
  const [isOpen, setIsOpen] = useState(open);
  const dialogElement = useRef<HTMLDivElement>(null);
  const dialogHeaderElement = useRef<HTMLDivElement>(null);

  const TOGGLE_TEXT = 'Open and close dialog';
  const dialogCloseButton = useRef(null);

  const { createOverlay, removeOverlay } = useDialogOverlay(overlay || {});
  useFocusTrap(dialogElement, () => setIsOpen(false));

  const dialogCssClass = `dialog 
    ${ isOpen ? 'isOpen' : '' }
    dialogSize_${ size }
    dialogPosition_${ position }
    dialogAnimation_${ animation }
    dialogScrollBehaviour_${ scrollBehaviour }
    ${ customCssClasses?.dialog || '' }`;

  const HandleClose = useCallback(() => {
    setIsOpen(false);
    removeOverlay();
    onClose();
  }, [onClose, removeOverlay]);

  const HandleOpen = useCallback(() => {
    const dialogOverlay = createOverlay();
    dialogOverlay.showOverlay();
  }, [createOverlay]);

  useEffect(() => {
    if (isOpen) {
      if (dialogHeaderElement.current) {
        dialogHeaderElement.current.focus();
      }
      HandleOpen();
    } else {
      HandleClose();
    }
  }, [customCssClasses, createOverlay, isOpen, HandleOpen, HandleClose, dialogHeaderElement]);

  const DialogCloseButton: React.FC = () => (
    <button ref={ dialogCloseButton } className="dialogClose" title={ TOGGLE_TEXT } type="button" onClick={ () => HandleClose() }>
      <Icon icon="cross" />
      <span className="sr-only">Close dialog</span>
    </button>
  );

  return (
    <div
      className={ dialogCssClass }
      role="dialog"
      aria-labelledby={ `dialogHeader_${ id }` }
      tabIndex={ 0 }
      aria-describedby={ `dialogSRInstruction_${ id }` }
      aria-modal="true"
      ref={ dialogElement }
    >
      <DialogCloseButton />

      <div className="dialogFullScroller">
        <div
          ref={ dialogHeaderElement }
          id={ `dialogHeader_${ id }` }
          className={ `dialogHeader ${ customCssClasses?.header || '' }` }
          tabIndex={ 0 }
        >
          <span id={ `dialogSRInstruction_${ id }` } className="sr-only">
            { screenReaderInstruction }
          </span>
          { typeof header === 'string' ? <span className="dialogHeaderText">{ header }</span> : header }
        </div>

        <div className="dialogContentAndFooterScroller">
          <section className={ `dialogContent ${ customCssClasses?.content || '' }` } tabIndex={ 0 }>
            { children }
          </section>

          <div className={ `dialogFooter ${ customCssClasses?.footer || '' }` } tabIndex={ 0 }>
            { typeof footer === 'string' ? <span className="dialogFooterText">{ footer }</span> : footer }
          </div>
        </div>
      </div>
    </div>
  );
};
