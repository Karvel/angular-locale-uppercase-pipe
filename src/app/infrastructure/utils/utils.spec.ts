import { Constants } from './constants';
import { Utils } from './utils';

describe('[Unit] Utils', () => {
  describe('getCopyrightYear()', () => {
    it('should return the current year as a string when the initial year is the current year', () => {
      Constants.startCopyrightYear = new Date().getFullYear();
      const expectedValue = new Date().getFullYear().toString();

      expect(Utils.getCopyrightYear()).toEqual(expectedValue);
    });

    it('should return a year range string when the initial year is less than the current year', () => {
      Constants.startCopyrightYear = new Date().getFullYear() - 1;
      const expectedValue = `${
        Constants.startCopyrightYear
      } - ${new Date().getFullYear().toString()}`;

      expect(Utils.getCopyrightYear()).toEqual(expectedValue);
    });

    it('should return the current year as a string when the initial year is greater than the current year', () => {
      Constants.startCopyrightYear = new Date().getFullYear() + 1;
      const expectedValue = new Date().getFullYear().toString();

      expect(Utils.getCopyrightYear()).toEqual(expectedValue);
    });
  });
});
