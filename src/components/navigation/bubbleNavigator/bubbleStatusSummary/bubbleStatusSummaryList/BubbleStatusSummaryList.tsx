import React, { useRef, useState } from 'react';
import { PropArrayItemType } from '../../bubbleNavigatorUtilities';
import { BubbleItem } from '../../bubbleNavigator.interface';
import { StatusLight } from '../../../../design/statusIndicators/statusLight/StatusLight';
import { GenericFunction } from '../../../../../interfaces';
import { pluralize, pluralizeIfNeeded } from '../../../../../helpers/stringHelpers';
import { dateToShortReadableDateTime } from '../../../../../helpers/dateHelpers';
import { Icon } from '../../../../design/icons/basicIcon/Icon';
import { useOnClickOutside } from '../../../../../hooks';

interface BubbleStatusSummaryListInterface {
  statuses: PropArrayItemType[];
  statusType: string;
  parentItem: BubbleItem;
  onStatusClick?: GenericFunction;
}

export const BubbleStatusSummaryList: React.FC<BubbleStatusSummaryListInterface> = (
  {
    statuses,
    statusType,
    parentItem,
    onStatusClick
  }
) => {
  const statusCount = statuses.length;
  const [isOpen, setIsOpen] = useState(false);
  const bubbleStatusSummaryListElement = useRef(null);

  useOnClickOutside(bubbleStatusSummaryListElement, () => setIsOpen(false));

  const { label, description, id } = parentItem;

  if (statusCount === 0) {
    return null;
  }

  const toggleFullDetails = () => {
    setIsOpen(!isOpen);
  };

  const handleStatusClick = (childStatus: PropArrayItemType) => {
    if (onStatusClick) {
      onStatusClick(childStatus);
    }
  };

  return (
    <div ref={ bubbleStatusSummaryListElement } className="bubbleStatusSummaryList">
      <div className="bubbleStatusSummaryListLabel">
        <StatusLight
          {
            ...{
              id: `bubbleStatusSummaryList_${ statusType }_${ id }`,
              label: statusType,
              description: `${ statusCount } ${ pluralizeIfNeeded(statusType, statusCount) }`,
              size: 's',
              includeDueDate: false,
              status: statusType,
              indicator: statusType,
              onClick: toggleFullDetails
            }
          }
        />
        <span className="statusCount">
          { statusCount }
        </span>
      </div>

      {
        isOpen
        && (
          <div className="bubbleStatusSummaryListPanel" id={ `bubbleStatusSummaryListPanel_${ statusType }` }>
            <h3>
              <Icon icon="target" />
              { pluralize(statusType) } : { label }
            </h3>
            <div className="statusListScroller">
              <ul className="noBullet statusList">
                {
                  statuses.map((childStatus) => {
                    const {
                      label, status, id, path, dueAt
                    } = childStatus;

                    const statusMap = status as string;
                    const statusId = `statusSummary_${ status }_${ id }_${ path.join('_') }`;
                    const formattedDueDateTime = dueAt ? dateToShortReadableDateTime(dueAt as (string | Date)) : 'TBD';

                    return (
                      <li key={ statusId }>
                        <StatusLight
                          {
                            ...{
                              id: statusId,
                              label,
                              includeDueDate: false,
                              status: statusMap,
                              indicator: statusMap,
                              onClick: () => handleStatusClick(childStatus)
                            }
                          }
                        />
                        <span className="statusDetails">
                          <span className="labelText">{ label }</span>
                          <span className="description">{ description }</span>
                          <span className="dueDate">Due date: { formattedDueDateTime }</span>
                        </span>
                      </li>
                    );
                  })
                }
              </ul>
            </div>
          </div>
        )
      }
    </div>
  );
};
