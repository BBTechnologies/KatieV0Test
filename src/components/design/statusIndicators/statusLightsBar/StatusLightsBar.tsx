import React from 'react';
import { StatusIndicatorsInterface, StatusInterface } from '../statusIndicators.interface';

import './statusLightsBar.scss';
import { StatusLight } from '../statusLight/StatusLight';

export const StatusLightsBar: React.FC<StatusIndicatorsInterface> = (
  {
    statuses = [],
    size = 'm'
  }
) => {
  if (!statuses.length) {
    return null;
  }

  return (
    <ul className="noBullet statusLightsBar">
      {
        statuses.map((statusDefinition: StatusInterface) => (
          <li key={ statusDefinition.id }>
            <StatusLight { ...statusDefinition } size={ size } />
          </li>
        ))
      }
    </ul>
  );
};
