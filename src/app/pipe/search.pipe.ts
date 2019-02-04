import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log("value : "+value);
    if (!value) {
      return [];
    }
    if (!args) {
      return value;
    }
    return value.filter(contact => contact.values.firstName.toLowerCase().includes(args.toLowerCase()));
  }

}
