/* eslint-disable @typescript-eslint/no-explicit-any */

import { JSONObject, JSONValue } from '../interfaces/generic.interface';
import { splitCamelCase } from './stringHelpers';

export const objectsAreTheSame = (obj1: object, obj2: object): boolean => {
  const JsonStringifySorted = (obj: object): string => {
    const keys: { [key: string]: null } = {};
    JSON.stringify(obj, (key, value) => {
      keys[key] = null;
      return value;
    });
    return JSON.stringify(obj, Object.keys(keys).sort());
  };
  return JsonStringifySorted(obj1) === JsonStringifySorted(obj2);
};

export const isAnObject = (value: unknown): boolean => typeof value !== 'undefined' && !Array.isArray(value) && typeof value === 'object';

export const createCompareValueOverride = (key: string, compareValue: any): string => `${ key }:${ JSON.stringify(compareValue) }`;

interface DeepMergeObjectsArgs {
  baseObject: Record<string, any>;
  overrideObject: Record<string, any>;
}

export const deepMergeObjects = ({ baseObject, overrideObject }: DeepMergeObjectsArgs): object => {
  const mergeDeep = (...objects: object[]): object => objects.reduce((prev: any, obj: any) => {
    Object.keys(obj).forEach((key) => {
      const pVal = prev[key];
      const oVal = obj[key];

      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        prev[key] = pVal.concat(...oVal);
      } else if (isAnObject(pVal) && isAnObject(oVal)) {
        prev[key] = mergeDeep(pVal, oVal);
      } else {
        prev[key] = oVal;
      }
    });
    return prev;
  }, {});
  return mergeDeep(baseObject, overrideObject);
};

export const overrideMergeObjects = ({ baseObject, overrideObject }: DeepMergeObjectsArgs): object => {
  const mergeOverride = (...objects: object[]): object => objects.reduce((prev: any, obj: any) => {
    Object.keys(obj).forEach((key) => {
      const pVal = prev[key];
      const oVal = obj[key];

      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        prev[key] = oVal;
      } else if (isAnObject(pVal) && isAnObject(oVal)) {
        prev[key] = mergeOverride(pVal, oVal);
      } else if (pVal && !oVal) {
        prev[key] = pVal;
      } else {
        prev[key] = oVal;
      }
    });
    return prev;
  }, {});

  return mergeOverride(baseObject, overrideObject);
};

interface MakeInheritanceObjectArgs {
  base: { [key: string] : any };
  valueOnly?: boolean;
  baseObjectName: string;
  compare: object;
  propPath?: string[];
  excludePropSpread?: string[];
}

export const makeInheritanceObject = (
  {
    base,
    valueOnly = false,
    baseObjectName,
    compare,
    propPath = [],
    excludePropSpread = []
  }: MakeInheritanceObjectArgs
): string => {
  const createSpreader = (): string => {
    if (propPath.length > 0) {
      return `...${ baseObjectName }.${ propPath.join('.') }`;
    }
    return `...${ baseObjectName }`;
  };

  const requiresSpreader = (): boolean => {
    if (valueOnly) return false;
    if (propPath.length > 0 && excludePropSpread.length > 0) {
      return excludePropSpread.indexOf(propPath[propPath.length - 1]) === -1;
    }
    return true;
  };

  const inheritanceObjectPieces: string[] = [];
  if (requiresSpreader()) {
    inheritanceObjectPieces.push(createSpreader());
  }

  Object.entries(compare).forEach(([key, compareValue]) => {
    if (!(key in base)) {
      inheritanceObjectPieces.push(createCompareValueOverride(key, compareValue));
    } else if (typeof base[key] !== 'undefined' && !objectsAreTheSame(base[key], compareValue)) {
      if (isAnObject(compareValue)) {
        inheritanceObjectPieces.push(
          `${ key }:${
            makeInheritanceObject({
              base: base[key],
              baseObjectName,
              compare: compareValue,
              propPath: [...propPath, key],
              excludePropSpread
            })
          }`
        );
      } else {
        inheritanceObjectPieces.push(createCompareValueOverride(key, compareValue));
      }
    }
  });

  return `{${ inheritanceObjectPieces.join(', ') }}`;
};

interface UpdateNestedPropertyArgs {
  jsonObject: Record<string, any>;
  propertyPath: string;
  newValue: any;
}

export const updateNestedProperty = ({ jsonObject, propertyPath, newValue }: UpdateNestedPropertyArgs): object => {
  const pathPieces = propertyPath.split('.');
  const numPieces = pathPieces.length;

  if (numPieces === 1) {
    jsonObject[propertyPath] = newValue;
    return jsonObject;
  }

  let currentBranch = jsonObject;

  pathPieces.forEach((piece, index) => {
    if (index === numPieces - 1) {
      currentBranch[piece] = newValue;
    } else if (currentBranch[piece]) {
      currentBranch = currentBranch[piece];
    }
  });

  return jsonObject;
};

export const filterObject = (jsonObject: JSONObject, filter: {
  search: string | number | { [key: string]: string | number | boolean };
  caseSensitive?: boolean;
}): JSONObject | false => {
  const result: JSONObject = {};

  // TODO: Handle key/value filter
  const branchAsString = JSON.stringify(jsonObject);
  const {
    search,
    caseSensitive
  } = filter;

  const branchTestString = caseSensitive ? branchAsString : branchAsString.toLowerCase();
  const searchTerm = caseSensitive || typeof search !== 'string' ? search : search.toLowerCase();

  const isKeyAndValueMatch = (test: JSONValue | string) => {
    const key = Object.keys(search)[0];
    const value = Object.values(search)[0];

    const keyCheck = caseSensitive ? key : key.toString().toLowerCase();

    const valueCheck = caseSensitive ? value : value.toString().toLowerCase();

    const testAsString = typeof test === 'string' ? test : JSON.stringify(test);

    return testAsString.includes(keyCheck) && testAsString.includes(valueCheck);
  };

  // Do some fast checks and fail immediately if no match
  if (typeof search === 'object') { // Key value search
    if (!isKeyAndValueMatch(branchTestString)) {
      return false;
    }
  } else if (!branchTestString.includes(searchTerm.toString())) {
    return false;
  }

  // Loop over the branch recursively finding the matches and forming up the object.
  Object.entries(jsonObject).forEach(([key, value]) => {
    // Check if the key or value contains the search term

    const keyCheck = caseSensitive ? key : key.toLowerCase();
    const valueCheck = caseSensitive ? value : value?.toString().toLowerCase();

    if (typeof value === 'object' && value !== null) {
      // Recursively search if the value is an object or array
      const subResult = filterObject(value as JSONObject, filter);
      if (subResult && Object.keys(subResult).length > 0) {
        result[key] = subResult;
      }
    } else if (typeof search === 'object') {
      if (isKeyAndValueMatch({ key, value })) {
        result[key] = value;
      }
    } else if (keyCheck.includes(searchTerm.toString()) || valueCheck?.toString().includes(searchTerm.toString())) {
      result[key] = value;
    }
  });

  return Object.keys(result).length > 0 ? result : false;
};

export const getArrayOfObjectKeys = (jsonObject: JSONObject) => {
  let objectKeys: string[] = [];

  // Loop over the branch recursively finding the matches and forming up the object.
  Object.entries(jsonObject).forEach(([key, value]) => {
    objectKeys.push(key);
    if (typeof value === 'object' && value !== null) {
      const subResult = getArrayOfObjectKeys(value as JSONObject);
      objectKeys = [...objectKeys, ...subResult];
    }
  });

  return [...new Set(objectKeys)];
};

export const getArrayOfReadableObjectKeys = (jsonObject: JSONObject) => {
  const objectKeysArray = getArrayOfObjectKeys(jsonObject);
  return objectKeysArray.map((objectKey) => splitCamelCase(objectKey));
};

export const getBranchFromPath = (obj: any, path: string[]): any => path.reduce((currentBranch, key) => currentBranch?.[key], obj);

export default {
  objectsAreTheSame,
  isAnObject,
  createCompareValueOverride,
  deepMergeObjects,
  overrideMergeObjects,
  makeInheritanceObject,
  updateNestedProperty,
  filterObject,
  getArrayOfObjectKeys,
  getArrayOfReadableObjectKeys,
  getBranchFromPath
};
