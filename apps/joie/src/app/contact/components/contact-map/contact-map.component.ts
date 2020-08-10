import { Component, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';


@Component({
  selector: 'app-contact-map',
  templateUrl: './contact-map.component.html',
  styleUrls: ['./contact-map.component.scss'],
})
export class ContactMapComponent {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow;

  zoom = 17;
  center: google.maps.LatLngLiteral = {
    lat: 43.6449299,
    lng: -79.3943352,
  };
  options: google.maps.MapOptions = {
    // zoomControl: false,
    // scrollwheel: false,
    // disableDoubleClickZoom: true,
    // mapTypeId: 'hybrid',
    // maxZoom: 15,
    // minZoom: 8,
  };
  markers = [
    {
      position: this.center,
      label: {
        color: 'red',
        text: 'Marker label ',
      },
      title: 'Marker title ',
      info: 'Marker info ',
      // options: {
      //   animation: google.maps.Animation.BOUNCE,
      // },
    },
  ];
  infoContent = '';

  // ngOnInit() {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     this.center = {
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude,
  //     };
  //   });
  // }

  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++;
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--;
  }

  // click(event: google.maps.MouseEvent) {
  //   console.log(event);
  // }

  // logCenter() {
  //   console.log(JSON.stringify(this.map.getCenter()));
  // }

  // addMarker() {
  //   this.markers.push({
  //     position: {
  //       lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
  //       lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
  //     },
  //     label: {
  //       color: 'red',
  //       text: 'Marker label ' + (this.markers.length + 1),
  //     },
  //     title: 'Marker title ' + (this.markers.length + 1),
  //     info: 'Marker info ' + (this.markers.length + 1),
  //     options: {
  //       animation: google.maps.Animation.BOUNCE,
  //     },
  //   });
  // }

  openInfo(marker: MapMarker, content) {
    this.infoContent = content;
    this.info.open(marker);
  }
}
