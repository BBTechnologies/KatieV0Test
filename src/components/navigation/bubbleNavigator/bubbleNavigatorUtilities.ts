// Utility function - enhance each child with a path property to help with the drill-down navigation
import { BubbleItem } from './bubbleNavigator.interface';
import { JSONValue } from '../../../interfaces/generic.interface';

export const enhanceBubbleData = (bubblesData: BubbleItem[]) => {
  const addPathToChild = (childItem: BubbleItem, path: number[]) => {
    childItem.path = path;
    childItem.childItems.forEach((nestedChild, nestedChildIndex) => {
      addPathToChild(nestedChild, [...path, nestedChildIndex]);
    });
    return childItem;
  };

  return bubblesData.map((bubble: BubbleItem, bubbleIndex: number) => addPathToChild(bubble, [bubbleIndex]));
};

export type PropArrayItemType = {
  path: number[],
  id: string,
  label: string,
  [key: string]: JSONValue
};

export const getAllChildPropValues = (
  {
    prop,
    parentItem
  } : {
    prop: string,
    parentItem: BubbleItem
  }
): PropArrayItemType[] => {
  const propArray: PropArrayItemType[] = [];

  const getChildProps = (childItem: BubbleItem) => {
    const {
      path, id, label, description
    } = childItem;

    propArray.push({
      path, id, label, description, [prop]: childItem[prop]
    });
    childItem.childItems.forEach((nestedChild) => {
      getChildProps(nestedChild);
    });
  };
  getChildProps(parentItem);
  return propArray;
};

type itemsFromPath = {
  bubblesData: BubbleItem[],
  path: number[]
};

export const getItemFromPath = (
  {
    bubblesData,
    path
  }
  : itemsFromPath
) => {
  // If there isn't a path array return the whole tree
  if (path.length === 0) {
    return bubblesData;
  }

  let item: BubbleItem = bubblesData[path[0]] as BubbleItem;
  for (let p = 1; p < path.length; p += 1) {
    item = item.childItems[path[p]];
  }
  return item;
};

export const getParentItemFromPath = (
  {
    bubblesData,
    path
  }
  : itemsFromPath
) => {
  const parentPath = path.slice(0, -1);

  return getItemFromPath({ bubblesData, path: parentPath });
};

export const getChildItemsByTypeAndValueFromItem = (
  {
    prop,
    value,
    parentItem
  } : {
    prop: string,
    value: string | number | boolean | (string | number | boolean)[],
    parentItem: BubbleItem
  }
): PropArrayItemType[] | Error => {
  const propArray: PropArrayItemType[] = [];

  const searchChildProps = (childItem: BubbleItem) => {
    const {
      path, id, label, description
    } = childItem;

    const childItemPropValue = childItem[prop];
    if (typeof childItemPropValue !== 'string'
      && typeof childItemPropValue !== 'number'
      && typeof childItemPropValue !== 'boolean') {
      return new Error('getFirstChildOfTypeAndValueFromItem: only supports searching for primitive types (string, number, boolean)');
    }

    const hasMatch = Array.isArray(value)
      ? (value as (string | number | boolean)[]).includes(childItemPropValue)
      : childItemPropValue === value;

    if (hasMatch) {
      propArray.push({
        path, id, label, description, [prop]: childItem[prop]
      });
    }

    childItem.childItems.forEach((nestedChild) => {
      searchChildProps(nestedChild);
    });

    return true;
  };

  searchChildProps(parentItem);
  return propArray;
};

export const getFirstChildOfTypeAndValueFromItem = (
  {
    prop,
    value,
    parentItem
  } : {
    prop: string,
    value: string | number | boolean | (string | number | boolean)[],
    parentItem: BubbleItem
  }
): PropArrayItemType[] | Error => {
  const propArray: PropArrayItemType[] = [];

  const searchChildProps = (childItem: BubbleItem) => {
    const {
      path, id, label, description
    } = childItem;

    const childItemPropValue = childItem[prop];
    if (typeof childItemPropValue !== 'string'
      && typeof childItemPropValue !== 'number'
      && typeof childItemPropValue !== 'boolean') {
      return new Error('getFirstChildOfTypeAndValueFromItem: only supports searching for primitive types (string, number, boolean)');
    }

    const hasMatch = Array.isArray(value)
      ? (value as (string | number | boolean)[]).includes(childItemPropValue)
      : childItemPropValue === value;

    if (hasMatch) {
      propArray.push({
        path, id, label, description, [prop]: childItem[prop]
      });
    }

    return childItem.childItems.forEach((nestedChild) => searchChildProps(nestedChild));
  };

  searchChildProps(parentItem);
  return propArray;
};
