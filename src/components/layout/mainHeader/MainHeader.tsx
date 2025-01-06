'use client';

import React, {
  ReactElement, ReactNode, useEffect, useRef, useState
} from 'react';
import { VentureLogo, VentureLogoProps } from '../../design/logos/VentureLogo';
import { GenericFunction } from '../../../interfaces';
import { IconProps } from '../../design/icons/basicIcon/Icon';
import { FormField } from '../../form/formFields/formFieldWrapper/FormField';

import './mainHeader.scss';

export interface MainHeaderProps {
  children?: ReactNode | ReactElement;
  logos: VentureLogoProps[];
  pageTitleText?: string;
  customCssClass?: string;
  headerShouldPin?: boolean;
  search?: {
    label: string;
    id: string;
    onSearch: GenericFunction;
  };
  rightContent?: ReactNode | ReactElement;
}

export const MainHeader: React.FC<MainHeaderProps> = (
  {
    children,
    logos,
    pageTitleText,
    customCssClass,
    headerShouldPin = true,
    search,
    rightContent = null
  }
) => {
  const mainHeader = useRef<HTMLDivElement>(null);
  const [isPinned, setIsPinned] = useState(false);

  useEffect(() => {
    if (headerShouldPin && mainHeader.current) {
      const pinAmount = mainHeader.current.offsetHeight;

      window.addEventListener('scroll', (event: Event) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const scrollAmount = event?.currentTarget?.scrollY;
        if (scrollAmount > pinAmount) {
          setIsPinned(true);
          document.body.classList.add('pinnedHeader');
        } else {
          setIsPinned(false);
          document.body.classList.remove('pinnedHeader');
        }
      });
    }
  });

  return (
    <div
      ref={ mainHeader }
      className={
        `mainHeader 
        ${ customCssClass || '' } 
        ${ isPinned ? 'isPinned' : '' }`
      }
    >
      <header>
        <section className="ventureLogos">
          { logos
            && (
              <>
                {
                  logos.map((logo) => (
                    <VentureLogo key={ `mainHeaderLogo_${ logo.ventureKey }` } { ...logo } />
                  ))
                }
              </>
            ) }
        </section>

        <section className="mainHeaderContent">
          {
            pageTitleText
            && <h1>{ pageTitleText }</h1>
          }

          { children }

          {
            search
            && (
              <FormField
                {
                  ...{
                    label: {
                      text: 'Demo label 2',
                      hide: true
                    },
                    field: {
                      type: 'search',
                      id: 'demo2',
                      name: 'demo2'
                    }
                  }
                }
              />
            )
          }
        </section>

        { rightContent
            && (
              <section className="mainHeaderRightContent">
                { rightContent }
              </section>
            ) }
      </header>
    </div>
  );
};
