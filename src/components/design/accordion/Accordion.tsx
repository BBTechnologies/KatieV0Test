'use client';

/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

import React, { useRef, useState } from 'react';
import { Icon } from '../icons/basicIcon/Icon';

import './accordion.scss';

export interface AccordionProps {
  id: string;
  isOpen?: boolean;
  isAnimated?: boolean;
  isFixed?: boolean;
  onChange?: (args: boolean) => void;
  openIcon?: string;
  closeIcon?: string;
  heading: string | React.ReactElement;
  footer?: string | React.ReactElement;
  customCssClass?: string;
  restrictHeight?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'auto';
  headerButtonCustomLabel?: string | React.ReactElement;
  headerButtonCssClass?: string;
  children?: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = (
  {
    id,
    heading,
    children,
    footer,
    openIcon = null,
    closeIcon = null,
    isOpen = true,
    isAnimated = true,
    isFixed = false,
    onChange,
    customCssClass,
    restrictHeight,
    headerButtonCustomLabel,
    headerButtonCssClass
  }
) => {
  const [panelIsOpen, setPanelIsOpen] = useState(isOpen || isFixed);
  const accordionControl = useRef(null);

  const panelId = id || `accordion_${ Date.now() }`;
  const contentId = `${ panelId }_content`;
  const controlId = `${ panelId }_control`;

  const customSectionHeader = typeof heading !== 'string' && !headerButtonCustomLabel;

  const TogglePanelOpenState = () => {
    const newState = !panelIsOpen;
    setPanelIsOpen(newState);
    if (onChange) {
      onChange(newState);
    }
  };

  const heightCssClass = restrictHeight ? `accordion_${ restrictHeight }` : '';

  const wrapperCssClass = `
    accordion 
    ${ customCssClass || '' } 
    ${ heightCssClass } 
    ${ panelIsOpen || isFixed ? 'open' : 'closed' } 
    ${ isFixed ? 'fixed' : '' }
    ${ isAnimated ? 'animated' : '' }
  `;

  const headerCssClass = `accordionHeader ${ customSectionHeader || isFixed ? 'accordionHeader_custom' : '' }`;

  const controlCssClass = `accordionControl ${ customCssClass ? `${ customCssClass }_accordionControl` : '' } ${ headerButtonCssClass || '' }`;

  const contentCssClass = `accordionContent ${ customCssClass ? `${ customCssClass }_accordionContent` : '' }`;

  return (
    <section className={ wrapperCssClass }>
      <header className={ headerCssClass }>
        {
          customSectionHeader
            ? <div tabIndex={ 0 } className="accordionCustomHeading">{ heading }</div>
            : (
              <h3>
                { isFixed
                  ? heading
                  : (
                    <button
                      ref={ accordionControl }
                      aria-controls={ contentId }
                      aria-expanded={ panelIsOpen }
                      id={ controlId }
                      onClick={ TogglePanelOpenState }
                      type="button"
                      className={ controlCssClass }
                    >
                      <span className="sr-only">Open and close accordion</span>
                      {
                        headerButtonCustomLabel || <span className="labelText">{ heading }</span>
                      }
                      {
                        panelIsOpen
                          ? <Icon icon={ openIcon || 'circle-up' } />
                          : <Icon icon={ closeIcon || 'circle-down' } />
                      }
                    </button>
                  ) }
              </h3>
            )
        }
      </header>

      <section tabIndex={ 0 } className={ contentCssClass } id={ contentId } aria-labelledby={ controlId }>
        <span className="sr-only">Start of accordion content</span>
        { children }

        { footer
          && (
            <footer>
              { footer }
            </footer>
          ) }
      </section>
    </section>
  );
};

export default Accordion;
