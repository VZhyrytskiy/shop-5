import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../../shared/models/item';

@Pipe({ name: 'orderBy' })
export class OrderByPipe implements PipeTransform {

  transform(value: any[], field: string, flag: boolean): any {
    const predicate = flag === false ? -1 : 1;
		console.log('We are in pipe: ', value['value'], field);
    switch (field) {
      case 'count':
        return value.sort((a: {elem: Item, count: number}, b: {elem: Item, count: number}) => (a[field] < b[field]) ? 1 * predicate : -1 * predicate);
      case 'price':
        return value.sort((a, b) => (a.elem[field] < b.elem[field]) ? 1 * predicate : -1 * predicate);
      case 'name':
        return value.sort((a, b) => (a.elem[field].toUpperCase() < b.elem[field].toUpperCase()) ? 1 * predicate : -1 * predicate);
      default:
        return value;
    }
  }
}
