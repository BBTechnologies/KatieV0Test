import {
  enhanceBubbleData,
  getChildItemsByTypeAndValueFromItem, PropArrayItemType
} from './bubbleNavigatorUtilities';
import { makeFakeData } from '../../../mocks/bubbleNavigatorData.mock';

describe('getChildItemsByTypeAndValueFromItem', () => {
  it(`Recursively traverses through a bubbleData tree and
  retrieves all child items with the prop and 
  value passed as the parameter`, () => {
    const testBubbleData = enhanceBubbleData([
      makeFakeData(
        {
          numLevels: 3,
          minStatusLevel: 0,
          maxChildren: 1,
          minChildren: 1,
          forceDefaultStatus: true,
          defaultStatus: 'alert',
          idPrefix: 'testSet1'
        }
      ),
      makeFakeData(
        {
          numLevels: 3,
          minStatusLevel: 0,
          maxChildren: 1,
          minChildren: 1,
          forceDefaultStatus: true,
          defaultStatus: 'info',
          idPrefix: 'testSet1'
        }
      )
    ]);

    // The number of child items = 8. 2 parents each with 3 levels 1 child per level
    const testResults1 = getChildItemsByTypeAndValueFromItem(
      {
        prop: 'status',
        value: 'alert',
        parentItem: testBubbleData[0]
      }
    ) as PropArrayItemType[];
    const testResults2 = getChildItemsByTypeAndValueFromItem(
      {
        prop: 'status',
        value: 'alert',
        parentItem: testBubbleData[1]
      }
    ) as PropArrayItemType[];

    expect(testResults1.length).toEqual(4);
    expect(testResults2.length).toEqual(0);

    expect(testResults1[3].path).toEqual([0, 0, 0, 0]);
  });
});
