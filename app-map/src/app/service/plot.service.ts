import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlotService {

  constructor( private http: HttpClient ) { }

  getPlots(){
    return this.http.get('/assets/data/dev_chronicle_rip.json');
  }
}
