import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  showPopup(data: any): string {
    let info = '';
    info += `<div>Cemetery Name: ${ data.cemetery_name }</div>`;
    info += `<div>Status: ${ data.status }</div>`;

    // show data person if Persons is not empty
    for(let person of data.persons){
      info += `<br><div>Name: ${ person.first_name + ' ' + person.last_name }</div>`;
      info += `<div>Age: ${ person.age }</div>`;
      info += `<div>Date of Birth: ${ person.date_of_birth ? (moment(person.date_of_birth)).format('DD MMMM YYYY') : '-' }</div>`;
      info += `<div>Date of Death: ${ person.date_of_death ? (moment(person.date_of_death)).format('DD MMMM YYYY') : '-' }</div>`;
    }

    return info
  }
}
