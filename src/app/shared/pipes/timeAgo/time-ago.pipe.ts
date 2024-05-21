// src/app/shared/pipes/timeAgo/time-ago.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: Date | string): string {
    if (!value) {
      return '';
    }

    const date = typeof value === 'string' ? new Date(value) : value;
    return formatDistanceToNow(date, { addSuffix: true, locale: fr });
  }

}
