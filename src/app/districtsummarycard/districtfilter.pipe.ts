import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'districtfilter'
})
export class DistrictfilterPipe implements PipeTransform {

  transform(value: any, searchtext: any): any {
    if (!value) {
      return [];
    }
    if (!searchtext) {
      return value;
    }
    searchtext = searchtext.toLowerCase();
    return value.filter(item => JSON.stringify(item.district).toLowerCase().includes(searchtext));
  }

}
