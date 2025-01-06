'use client';

import React, {
  useCallback, useEffect, useRef, useState
} from 'react';
import { useOnClickOutside } from '../../../hooks';
import { Icon } from '../icons/basicIcon/Icon';

import './ownerDetailsPopup.scss';

interface OwnerDetailsPopupProps {
  owner: {
    name: string;
    email?: string;
    phone?: string;
  }
}

export const OwnerDetailsPopup: React.FC<OwnerDetailsPopupProps> = (
  {
    owner
  }
) => {
  const [isDetailsShowing, setDetailsShowing] = useState(false);

  const detailsElement = useRef<HTMLDivElement>(null);
  const detailsTriggerElement = useRef<HTMLButtonElement>(null);

  useOnClickOutside(detailsElement, () => setDetailsShowing(false));

  // Handle special key presses
  const handleSpecialKeyPresses = useCallback(
    (event: KeyboardEvent) => {
      // Escape key
      if (event.key === 'Escape' || event.keyCode === 27) {
        detailsTriggerElement.current?.click();
        setDetailsShowing(false);
      }
    },
    [setDetailsShowing]
  );

  useEffect(() => {
    if (detailsElement.current) {
      detailsElement.current.addEventListener('keydown', handleSpecialKeyPresses as EventListener);
    }
  }, [handleSpecialKeyPresses]);

  return (
    <div ref={ detailsElement } className={ `ownerDetailsPopup ${ isDetailsShowing ? 'detailsShowing' : '' }` }>
      <button
        aria-label="Toggle tooltip open state"
        ref={ detailsTriggerElement }
        type="button"
        onClick={ () => setDetailsShowing(!isDetailsShowing) }
        className="button secondary compact icon_only"
      >
        <Icon icon="bubble2" />
      </button>
      <span className="ownerDetails">
        <span className="ownerName">{ owner.name }</span>
        { owner.email && (
          <span className="ownerEmail">
            <a href={ `mailto://${ owner.email }` }>{ owner.email }</a>
          </span>
        ) }
        { owner.phone && (
          <span className="ownerPhone">
            <a href={ `tel://${ owner.phone }` }>{ owner.phone }</a>
          </span>
        ) }
      </span>
    </div>
  );
};
