import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statefilter'
})
export class StatefilterPipe implements PipeTransform {

  transform(value: any[], searchtext: string): any {
    if (!value) {
      return [];
    }
    if (!searchtext){
      return value;
    }
    searchtext = searchtext.toLowerCase();
    return value.filter(item => JSON.stringify(item.state).toLowerCase().includes(searchtext));
  }
 

}
