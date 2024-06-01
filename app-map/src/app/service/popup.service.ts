import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  showPopup(data: any): string {
    return `` +
      `<div>Name: ${ data.persons[0].first_name + ' ' + data.persons[0].last_name }</div>` +
      `<div>Age: ${ data.persons[0].age }</div>` +
      `<div>Date of Birth: ${ data.persons[0].date_of_birth }</div>` +
      `<div>Date of Death: ${ data.persons[0].date_of_death }</div>`
  }
}
