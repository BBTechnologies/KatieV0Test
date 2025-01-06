import {capitalize, pluralize, pluralizeIfNeeded, splitCamelCase} from './stringHelpers';

describe('capitalize - makes the first letter of a string a capital and all subsequent characters lowercase', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Converts uppercases within the string to lowercase', () => {
    expect(capitalize('thisIsATestString')).toEqual('Thisisateststring');
  });

  it('Leaves the first character as uppercase', () => {
    expect(capitalize('ThisIsATestString')).toEqual('Thisisateststring');
  });

  it('Handles empty strings', () => {
    expect(capitalize('')).toEqual('');
  });
});

describe('splitCamelCase', () => {
  it('Splits a string at the capitals, inserts a space, and returns as all lowercase', () => {
    const test = 'thisIsInCamelCase';
    expect(splitCamelCase(test)).toEqual('this is in camel case');
  });

  it('Handles numbers', () => {
    const test = 'thisIs123InAString';
    expect(splitCamelCase(test)).toEqual('this is 123 in a string');
  });
});

describe('pluralize', () => {
  it('Handles words ending in y', () => {
    expect(pluralize('party')).toEqual('parties');
  });

  it('Handles words ending in x, s, z, ch, or sh', () => {
    expect(pluralize('bus')).toEqual('buses');
    expect(pluralize('box')).toEqual('boxes');
    expect(pluralize('stitch')).toEqual('stitches');
    expect(pluralize('trash')).toEqual('trashes');
    expect(pluralize('fizz')).toEqual('fizzes');
  });

  it('Tacks on an s for anything else', () => {
    expect(pluralize('apple')).toEqual('apples');
    expect(pluralize('car')).toEqual('cars');
  });
});

describe('pluralizeIfNeeded: Pluralises words based on a count parameter.', () => {
  it('Does not pluralize if the count is less than or equal to 1', () => {
    expect(pluralizeIfNeeded('bus', 0)).toEqual('bus');
    expect(pluralizeIfNeeded('bus', 1)).toEqual('bus');
  });

  it('Pluralizes if the count is greater than 1', () => {
    expect(pluralizeIfNeeded('bus', 2)).toEqual('buses');
  });
});
