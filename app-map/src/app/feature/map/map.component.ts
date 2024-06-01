import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { PlotService } from 'src/app/service/plot.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map!: L.Map;
  private plots: any;
  
  constructor( private plotService: PlotService ) { }

  ngAfterViewInit(): void {
    this.initMap();
    this.plotService.getPlots().subscribe(plots => {
      this.plots = plots;
      this.initPlotsLayer();
    })
   }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ -8.635945622432802, 115.19192682579163 ],
      zoom: 19
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 21,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  private initPlotsLayer() {
    const plotLayer = L.geoJSON(this.plots, {
      style: (feature) => ({
        weight: 2,
        opacity: 0.5,
        color: '#064af3',
        fillOpacity: 0.5,
        fillColor: '#5886fa'
      }),
      onEachFeature: (feature, layer) => (
        layer.on({
          mouseover: (e) => (this.highlightFeature(e)),
          mouseout: (e) => (this.resetFeature(e)),
        })
      )
    });

    this.map.addLayer(plotLayer);
  }

  private highlightFeature(e: { target: any; }) {
    const layer = e.target;
  
    layer.setStyle({
      weight: 5,
      opacity: 1.0,
      color: '#008f68',
      fillOpacity: 1.0,
      fillColor: '#6DB65B'
    });
  }
  
  private resetFeature(e: { target: any; }) {
    const layer = e.target;
  
    layer.setStyle({
      weight: 2,
      opacity: 0.5,
      color: '#064af3',
      fillOpacity: 0.5,
      fillColor: '#5886fa'
    });
  }
}