import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class DateParserService {

  constructor() { }

  formatDate(date, options = { locale: 'en', format: 'LLL' }) {
    const { locale, format } = options;
    const mDate = moment(date);
    mDate.locale(locale);
    let spanishDate = mDate.format(format);
    spanishDate = spanishDate.charAt(0).toUpperCase() + spanishDate.substring(1, spanishDate.length);
    return spanishDate;
  }

}
