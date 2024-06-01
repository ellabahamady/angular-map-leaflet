import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlotService {

  constructor( private http: HttpClient ) { }

  getPlots(){
    // get data list of Plot
    // source : https://dev.chronicle.rip/api/v1/ms/plots-in-viewport?bounds=115.19192682579163,-8.635945622432802,115.19218364730479,-8.635783199701216

    return this.http.get('/assets/data/dev_chronicle_rip.json');
  }
}
