import { CountrySummary } from './country.model';
import { Pipe, PipeTransform } from '@angular/core';
import { retry } from 'rxjs/operators';


@Pipe({
  name: 'countryfilter'
})
export class CountryfilterPipe implements PipeTransform {

  transform(items: CountrySummary[],searchText:string): any []{
    console.log(items);
    
    if(!items)
    {
      return [];
    }
    if(!searchText)
    {
      return items;
    }
  
    searchText = searchText.toLowerCase();
    return items.filter(item => JSON.stringify(item.country).toLowerCase().includes(searchText))
    // return items;
    // return items.filter(item => JSON.stringify(item).toLowerCase().includes(searchText));
    // return items.filter(it => it.toLowerCase().includes(searchText));
  }
    // return null;
 

}
