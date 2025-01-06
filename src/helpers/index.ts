export {
  getMinAge,
  getMaxAge,
  getMinAndMaxAges,
  validateBirthdate,
  isDateEntryComplete,
  getAgeInWeeks,
  getAgeInYears
} from './ageHelpers';

export {
  binaryFindInArray,
  addAndSortArray,
  moveItemInArrayMutate,
  moveItemInArrayCopy,
  getRandomItemFromArray,
  getItemIndexWithinArray,
  getRoundedMedian,
  getMostOccurringBoolean
} from './arrayHelpers';

export {
  transformPlacesData,
  extractNamePieces
} from './dataHelpers';

export {
  dateToShortIsoString,
  isValidDate,
  dateToShortReadableDate,
  dateToShortReadableMonth,
  timeStampToShortReadableDate,
  getLastDateOfMonth
} from './dateHelpers';

export {
  getNumberAbbreviation,
  formatAsCurrencyWithAbbreviation,
  formatAsCurrencyForLocale as FormatAsCurrency,
  formatAsCurrencyForLocale,
  formatNumberForLocale,
  formatNumberWithAbbreviation,
  formatRoundedNumberWithAbbreviation,
  formatAsSimpleCurrencyForChartAxis,
  formatAsInternationalCurrencyForChartAxis,
  formatNumberForChartAxis
} from './formatters';

export {
  getRandomNumberBelow,
  getRandomBetweenInclusive,
  getRandomBetweenExclusive,
  hashCode,
  roundToDecimal,
  formatNumberToMinDigits,
  formatDigitalTime
} from './numberHelpers';

export {
  richTextParser,
  capitalize,
  capitalizeFirstLetter,
  lowerCaseFirstLetter,
  useAnInsteadOfA,
  splitCamelCase,
  pluralize,
  pluralizeIfNeeded
} from './stringHelpers';

export {
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
} from './objectHelpers';
