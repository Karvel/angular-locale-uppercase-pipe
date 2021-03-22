import { Pipe, PipeTransform } from '@angular/core';

import { Constants } from 'src/app/infrastructure/utils/constants';

@Pipe({ name: 'localeuppercase' })
export class LocaleUpperCasePipe implements PipeTransform {
  transform(
    value: string | null | undefined,
    language?: string
  ): string | null {
    if (value == null) {
      return null;
    }
    if (typeof value !== 'string') {
      return '';
    }
    const locale = language || Constants.defaultLanguage;

    try {
      return value.toLocaleUpperCase(locale);
    } catch (error) {
      console.warn(error);
      return value.toLocaleUpperCase();
    }
  }
}
