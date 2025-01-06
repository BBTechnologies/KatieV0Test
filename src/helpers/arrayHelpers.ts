import { getRandomNumberBelow } from './numberHelpers';

interface SearchElement {
  [key: string]: never;
}

interface BinaryFindResult {
  found: boolean;
  index: number;
}

export const binaryFindInArray = (
  arrayToSearch: SearchElement[],
  searchElement: SearchElement,
  sortProperty: string,
  allowDuplicates: boolean = false
): BinaryFindResult => {
  let minIndex = 0;
  let maxIndex = arrayToSearch.length - 1;
  let currentIndex: number = 0;
  let currentElement: SearchElement = searchElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = arrayToSearch[currentIndex];

    if (currentElement[sortProperty] < searchElement[sortProperty]) {
      minIndex = currentIndex + 1;
    } else if (currentElement[sortProperty] > searchElement[sortProperty]) {
      maxIndex = currentIndex - 1;
    } else if (allowDuplicates && currentElement[sortProperty] === searchElement[sortProperty]) {
      return {
        found: true,
        index: currentIndex
      };
    } else {
      return {
        found: true,
        index: currentIndex
      };
    }
  }

  return {
    found: false,
    index: currentElement[sortProperty] < searchElement[sortProperty] ? currentIndex + 1 : currentIndex
  };
};

export const addAndSortArray = (
  sourceArray: SearchElement[],
  newElement: SearchElement,
  sortProperty: string,
  allowDuplicates: boolean = false
): void => {
  const searchResult = binaryFindInArray(sourceArray, newElement, sortProperty, allowDuplicates);
  if (!searchResult.found || allowDuplicates) {
    sourceArray.splice(searchResult.index, 0, newElement);
  }
};

export const moveItemInArrayMutate = <T>(array: T[], fromIndex: number, toIndex: number): T[] => {
  const element = array[fromIndex];
  array.splice(fromIndex, 1);
  array.splice(toIndex, 0, element);
  return array;
};

export const moveItemInArrayCopy = <T>(originalArray: T[], fromIndex: number, toIndex: number): T[] => {
  const array = [...originalArray];
  const element = array[fromIndex];
  array.splice(fromIndex, 1);
  array.splice(toIndex, 0, element);
  return array;
};

/**
 * Takes an array of items of any shape and returns a random item.
 *
 * @param arrayOfUnknownItems - The array of items
 * @returns a random item from the array
 */
export const getRandomItemFromArray = <T>(arrayOfUnknownItems: T[]): T => arrayOfUnknownItems[getRandomNumberBelow(arrayOfUnknownItems.length)];

/**
 * Takes an array of items of any shape and returns the index of the item to find.
 *
 * @param arrayOfUnknownItems - The array of items
 * @param itemToFind - The item to find
 * @returns the index of the item to find within the array
 */
export const getItemIndexWithinArray = <T>(arrayOfUnknownItems: T[], itemToFind: T): number => arrayOfUnknownItems.indexOf(itemToFind);

/**
 * Takes an array of numbers, finds the min and max, and returns a rounded median.
 *
 * @param arrayOfNumbers - The array of numbers
 * @returns the rounded median
 */
export const getRoundedMedian = (arrayOfNumbers: number[]): number => {
  const min = Math.min(...arrayOfNumbers);
  const max = Math.max(...arrayOfNumbers);
  return Math.round((min + max) / 2);
};

/**
 * Takes an array of booleans, finds which boolean occurs the most, and returns it.
 *
 * @param arrayOfBooleans - The array of booleans
 * @returns the most occurring boolean
 */
export const getMostOccurringBoolean = (arrayOfBooleans: boolean[]): boolean => {
  const trueCount = arrayOfBooleans.filter((bool) => bool === true).length;
  return trueCount > arrayOfBooleans.length / 2;
};
