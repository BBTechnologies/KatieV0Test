import { BubbleItem } from '../components/navigation/bubbleNavigator/bubbleNavigator.interface';
import { enhanceBubbleData } from '../components/navigation/bubbleNavigator/bubbleNavigatorUtilities';

const statuses = ['defCon3', 'alert', 'warn', 'success', 'info', 'na'];

export const makeFakeData = (
  {
    numLevels = 3,
    minStatusLevel = 5,
    maxChildren = 5,
    minChildren = 0,
    forceDefaultStatus = false,
    defaultStatus = 'na',
    level = 0,
    itemCount = 0,
    idPrefix = ''
  }: {
    numLevels: number;
    maxChildren?: number;
    minChildren?: number;
    minStatusLevel?: number;
    forceDefaultStatus?: boolean;
    defaultStatus?: string;
    level?: number;
    itemCount?: number;
    idPrefix?: string;
  }
): BubbleItem => {
  const getFakeStatus = (level: number, itemCount: number) => {
    if (forceDefaultStatus) {
      return defaultStatus;
    }
    if (level < minStatusLevel || itemCount !== 2) {
      return defaultStatus;
    }
    return statuses[Math.floor(Math.random() * statuses.length)];
  };

  const generateItem = (): BubbleItem => {
    const numChildren = minChildren + Math.floor(Math.random() * (maxChildren - minChildren)); // Generate up to 5 child items
    const childItems = level < numLevels
      ? Array.from({ length: numChildren }, (arrayContent: never, index: number) => makeFakeData(
        {
          numLevels,
          maxChildren,
          minChildren,
          forceDefaultStatus,
          defaultStatus,
          minStatusLevel,
          level: level + 1,
          itemCount: index + 1,
          idPrefix
        }
      )) : [];

    return {
      name: `Item level ${ level } count ${ itemCount }`,
      id: `${ idPrefix }_${ level }_${ itemCount }`,
      label: `Item level ${ level } count ${ itemCount }`,
      description: `Item description ${ itemCount }`,
      path: [],
      status: getFakeStatus(level, itemCount),
      childItems
    };
  };

  return generateItem();
};

export const MockBubbleData = enhanceBubbleData(
  [
    makeFakeData({
      numLevels: 14, minChildren: 1, maxChildren: 5, idPrefix: 'set1', minStatusLevel: 14
    }),
    makeFakeData({
      numLevels: 14, minChildren: 1, maxChildren: 4, idPrefix: 'set2', minStatusLevel: 14
    }),
    makeFakeData({
      numLevels: 14, minChildren: 1, maxChildren: 3, idPrefix: 'set3', minStatusLevel: 14
    }),
    makeFakeData({
      numLevels: 14, minChildren: 1, maxChildren: 2, idPrefix: 'set4', minStatusLevel: 14
    })
  ]
);

export default {
  makeFakeData,
  MockBubbleData
};
