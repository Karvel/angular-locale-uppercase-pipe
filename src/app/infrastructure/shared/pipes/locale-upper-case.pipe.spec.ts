import { Constants } from 'app/infrastructure/utils/constants';

import { LocaleUpperCasePipe } from './locale-upper-case.pipe';

describe('[Unit] LocaleUpperCasePipe', () => {
  const pipe = new LocaleUpperCasePipe();

  it('should be created', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return an empty string when given an empty string', () => {
    const testValue = '';
    const expectedValue = '';
    expect(pipe.transform(testValue)).toEqual(expectedValue);
  });

  it('should return should return uppercase when not passed a language value', () => {
    const testValue = 'test';
    const expectedValue = 'TEST';

    expect(pipe.transform(testValue)).toEqual(expectedValue);
  });

  it('should uppercase when there is a new value', () => {
    const testValue = 'test';
    const testValue2 = 'test2';
    const expectedValue = 'TEST';
    const expectedValue2 = 'TEST2';
    expect(pipe.transform(testValue)).toEqual(expectedValue);
    expect(pipe.transform(testValue2)).toEqual(expectedValue2);
  });

  it('should map null to null', () => {
    expect(pipe.transform(null)).toEqual(null);
  });

  it('should map undefined to null', () => {
    expect(pipe.transform(undefined)).toEqual(null);
  });

  it('should return empty string when passed a non string value', () => {
    expect(pipe.transform(1 as any)).toEqual('');
  });

  it('should should use the passed in parameter locale', () => {
    const locale = 'tr-TR';
    const testValue1 = 'ı';
    const expectedValue1 = 'I';
    const testValue2 = 'i';
    const expectedValue2 = 'İ';

    expect(pipe.transform(testValue1, locale)).toEqual(expectedValue1);
    expect(pipe.transform(testValue2, locale)).toEqual(expectedValue2);
  });

  it('should should prefer the passed in parameter locale to the default language', () => {
    const locale = 'tr-TR';
    const testValue1 = 'ı';
    const expectedValue1 = 'I';
    const testValue2 = 'i';
    const expectedValue2 = 'İ';
    Constants.defaultLanguage = 'en-US';

    expect(pipe.transform(testValue1, locale)).toEqual(expectedValue1);
    expect(pipe.transform(testValue2, locale)).toEqual(expectedValue2);
  });

  it('should log a warning when given an invalid locale', () => {
    const testValue = 'test';
    const locale = '123';
    const spy = spyOn(console, 'warn');
    pipe.transform(testValue, locale);

    expect(spy).toHaveBeenCalled();
  });
});
