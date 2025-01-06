/**
 * @jest-environment jsdom
 */

import {
  formatAsCurrencyForLocale,
  formatFileSize,
  formatNumberForLocale,
} from './formatters';
import { IntlCountryCurrencyMap } from './Internationalization/Currencies';

describe('FormatAsCurrencyForLocale: Formats numbers as currency based on the user\'s locale.', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  const testNumber1 = 1234567.89;
  const testNumber2 = 123456789;
  const testNumber3 = 0.005;
  const testNumber4 = 1;
  const testNumber5 = 0;

  it('Supports en-AU formats', () => {
    const mockNumberFormatter = jest.spyOn(Intl, 'NumberFormat');
    const auCurrency = IntlCountryCurrencyMap.AU;
    mockNumberFormatter.mockReturnValue(new Intl.NumberFormat('en-AU', { style: 'currency', currency: auCurrency }));

    const testResult1 = formatAsCurrencyForLocale(testNumber1);
    const testResult2 = formatAsCurrencyForLocale(testNumber2);
    const testResult3 = formatAsCurrencyForLocale(testNumber3);
    const testResult4 = formatAsCurrencyForLocale(testNumber4);
    const testResult5 = formatAsCurrencyForLocale(testNumber5);

    expect(testResult1).toEqual('$1,234,567.89');
    expect(testResult2).toEqual('$123,456,789.00');
    expect(testResult3).toEqual('$0.01');
    expect(testResult4).toEqual('$1.00');
    expect(testResult5).toEqual('$0.00');
  });

  it('Supports euro formats (de-DE)', () => {
    const mockNumberFormatter = jest.spyOn(Intl, 'NumberFormat');
    const deCurrency = IntlCountryCurrencyMap.DE;
    mockNumberFormatter.mockReturnValue(new Intl.NumberFormat('de-DE', { style: 'currency', currency: deCurrency }));

    const testResult1 = formatAsCurrencyForLocale(testNumber1);
    const testResult2 = formatAsCurrencyForLocale(testNumber2);
    const testResult3 = formatAsCurrencyForLocale(testNumber3);
    const testResult4 = formatAsCurrencyForLocale(testNumber4);
    const testResult5 = formatAsCurrencyForLocale(testNumber5);

    expect(testResult1).toEqual('1.234.567,89 €');
    expect(testResult2).toEqual('123.456.789,00 €');
    expect(testResult3).toEqual('0,01 €');
    expect(testResult4).toEqual('1,00 €');
    expect(testResult5).toEqual('0,00 €');
  });

  it('Defaults to a dollar symbol and 2 decimals if the IntlCurrencyFormatter fails', () => {
    const mockNumberFormatter = jest.spyOn(Intl, 'NumberFormat');
    mockNumberFormatter.mockReturnValue(jest.fn() as unknown as Intl.NumberFormat);

    const testResult1 = formatAsCurrencyForLocale(testNumber1);
    const testResult2 = formatAsCurrencyForLocale(testNumber2);
    const testResult3 = formatAsCurrencyForLocale(testNumber3);
    const testResult4 = formatAsCurrencyForLocale(testNumber4);
    const testResult5 = formatAsCurrencyForLocale(testNumber5);

    expect(testResult1).toEqual('$1234567.89');
    expect(testResult2).toEqual('$123456789.00');
    expect(testResult3).toEqual('$0.01');
    expect(testResult4).toEqual('$1.00');
    expect(testResult5).toEqual('$0.00');
  });
});

describe('FormatNumberForLocale: Formats numbers based on the user\'s locale.', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  const testNumber1 = 1234567.89;
  const testNumber2 = 123456789;
  const testNumber3 = 0.005;
  const testNumber4 = 1;
  const testNumber5 = 0;

  it('Supports en-AU formats', () => {
    const mockNumberFormatter = jest.spyOn(Intl, 'NumberFormat');
    mockNumberFormatter.mockReturnValue(new Intl.NumberFormat('en-AU'));

    const testResult1 = formatNumberForLocale(testNumber1);
    const testResult2 = formatNumberForLocale(testNumber2);
    const testResult3 = formatNumberForLocale(testNumber3);
    const testResult4 = formatNumberForLocale(testNumber4);
    const testResult5 = formatNumberForLocale(testNumber5);

    expect(testResult1).toEqual('1,234,567.89');
    expect(testResult2).toEqual('123,456,789');
    expect(testResult3).toEqual('0.005');
    expect(testResult4).toEqual('1');
    expect(testResult5).toEqual('0');
  });

  it('Supports euro formats (de-DE)', () => {
    const mockNumberFormatter = jest.spyOn(Intl, 'NumberFormat');
    mockNumberFormatter.mockReturnValue(new Intl.NumberFormat('de-DE'));

    const testResult1 = formatNumberForLocale(testNumber1);
    const testResult2 = formatNumberForLocale(testNumber2);
    const testResult3 = formatNumberForLocale(testNumber3);
    const testResult4 = formatNumberForLocale(testNumber4);
    const testResult5 = formatNumberForLocale(testNumber5);

    expect(testResult1).toEqual('1.234.567,89');
    expect(testResult2).toEqual('123.456.789');
    expect(testResult3).toEqual('0,005');
    expect(testResult4).toEqual('1');
    expect(testResult5).toEqual('0');
  });
});

describe('File size formatter', () => {
  it('Format file sizes into user-friendly strings', () => {
    const testResult1 = formatFileSize(10);
    const testResult2 = formatFileSize(1200);
    const testResult3 = formatFileSize(1048576);
    const testResult4 = formatFileSize(1048576000);

    expect(testResult1).toEqual('10 bytes');
    expect(testResult2).toEqual('1.2 KB');
    expect(testResult3).toEqual('1.0 MB');
    expect(testResult4).toEqual('1.0 GB');
  });
});
