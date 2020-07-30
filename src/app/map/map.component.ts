import { Component, Input, OnChanges, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import MousePosition from 'ol/control/MousePosition';
import { createStringXY } from 'ol/coordinate';
import { defaults as defaultControls } from 'ol/control';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Killer } from '../killer';
import { Debtor } from '../debtor';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnChanges {

  map: Map;
  mousePosition: MousePosition;

  public view = new View ({
    center: fromLonLat([19.5, 51.5]),
    zoom: 6
  });

  @Input() killer: Killer[];
  @Input() debtor: Debtor[];
  @Input() selectedKiller: Killer;
  @Input() selectedDebtor: Debtor;

  ngOnInit() {
    this.getMousePosition();
    this.getMap();
    if (this.map && this.debtor && this.killer) {
      this.addPoints();
    }
    /*let that = this;
    setTimeout(function () {
      that.map.updateSize();
    }, 100);*/
  }

  ngOnChanges() {
    if (this.map) {
      this.map.updateSize();
    }
    if (this.map && this.debtor && this.killer) {
    this.addPoints();
    }
    if (this.selectedKiller) {
      this.getKillerZoom(this.selectedKiller);
    }
    if (this.selectedDebtor) {
      this.getDebtorZoom(this.selectedDebtor);
    }
  }

  getKillerZoom(killer: Killer) {
    this.view.animate({
      center: fromLonLat(this.getKillersCoordinates(killer)),
      duration: 2000,
      zoom: 10
    });
    console.log(this.getKillersCoordinates(killer));
  }

  getDebtorZoom(debtor: Debtor) {
    this.view.animate({
      center: fromLonLat(this.getDebtorsCoordinates(debtor)),
      duration: 2000,
      zoom: 10,

    });
    console.log(this.getDebtorsCoordinates(debtor));
  }

  getCenter() {
    this.view.animate({
      center: fromLonLat([19.5, 51.5]),
      duration: 2000,
      zoom: 6
    });
  }

  getMap() {
    this.map = new Map({
      controls: defaultControls().extend([this.mousePosition]),
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: this.view
    });
  }

  getMousePosition() {
    this.mousePosition = new MousePosition({
      coordinateFormat: createStringXY(6),
      projection: 'EPSG:4326',
      undefinedHTML: '&nbsp;'
    });
  }

  private addPoints() {
    const killersLocation = this.killer.map(killer => this.getKillersCoordinates(killer));
    const killersVectorSource = this.getVectorSource(killersLocation, 'assets/red.png');
    const killersLayer = new VectorLayer({
      source: killersVectorSource
    });
    const debtorsLocation = this.debtor.map(debtor => this.getDebtorsCoordinates(debtor));
    const debtorsVectorSource = this.getVectorSource(debtorsLocation, 'assets/blue.png');
    const debtorsLayer = new VectorLayer({
      source: debtorsVectorSource
    });
    this.map.addLayer(killersLayer);
    this.map.addLayer(debtorsLayer);
  }

  private getKillersCoordinates(killer: Killer): number[] {
    return killer.location.split('/').map(location => +location);
  }

  private getDebtorsCoordinates(debtor: Debtor): number[] {
    return debtor.location.split('/').map(location => +location);
  }

  private getVectorSource(locations: number[][], path: string) {
    const markers: Feature[] = locations.map(location => new Feature({
      geometry: new Point(fromLonLat(location))
    }));
    markers.forEach(marker => marker.setStyle(new Style({
      image: new Icon(
        {
          crossOrigin: 'anonymous',
          src: path
        }
      )
    })));
    return new VectorSource(
      {
        features: markers
      }
    );
  }
}
