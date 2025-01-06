'use client';

import React, {
  useState, useRef, ReactNode, ReactElement
} from 'react';
import { Icon } from '../../icons/basicIcon/Icon';
import { SimpleButton } from '../../../form/buttons/SimpleButton';

import './pageBanners.scss';

export interface PageBannerProps {
  id: string;
  children: ReactNode | ReactElement;
  animation?: 'slide' | 'grow' | 'none';
  autoHide?: boolean;
  autoHideDelay?: 1 | 3 | 5 | 10;
  displayMode?: 'fixed' | 'inline'
  footer?: string | ReactNode | ReactElement;
  header?: string | ReactNode | ReactElement;
  icon?: string;
  position?: 'top' | 'center';
  type?: 'alert' | 'info' | 'warn' | 'error' | 'success';
}

export const PageBanner: React.FC<PageBannerProps> = (
  {
    animation = 'none',
    autoHide = false,
    autoHideDelay = 10,
    children,
    displayMode = 'fixed',
    footer = '',
    header = '',
    icon = 'info',
    id = 'pageBanner',
    position = 'top',
    type = 'info'
  }
) => {
  const StorageKey = `pageBanner_${ id }`;
  const StorageValue = localStorage.getItem(StorageKey);
  const UserPreferences = StorageValue && JSON.parse(StorageValue);

  const { shouldDisplay } = UserPreferences || { shouldDisplay: true };

  const [isVisible, setVisibility] = useState<boolean>(shouldDisplay);

  const autoHideCssClass = autoHide ? `autoHide_${ autoHideDelay }` : 'noAutoHide';

  const cssClass = `
    pageBanner 
    ${ type } 
    ${ position } 
    ${ displayMode } 
    ${ autoHideCssClass }_${ animation }
    ${ header ? 'withHeader' : '' }
  `;

  const handleBannerClose = () => {
    setVisibility(false);
    localStorage.setItem(StorageKey, JSON.stringify({ shouldDisplay: false }));
  };

  if (isVisible) {
    return (
      <aside className={ cssClass }>
        <SimpleButton
          cssClass="closeBannerButton"
          label="Close page banner"
          id={ `${ id }_CloseBannerButton` }
          onClickHandler={ handleBannerClose }
          hideLabel
          leftIcon={{ icon: 'close' }}
        />

        <div className="pageBannerMainIcon">
          <Icon icon={ icon } />
        </div>

        <div className="pageBannerContent">
          { header && <div className="pageBannerHeader">{ header }</div> }
          { children }
          { footer && <div className="pageBannerFooter">{ footer }</div> }
        </div>
      </aside>
    );
  }

  return null;
};
