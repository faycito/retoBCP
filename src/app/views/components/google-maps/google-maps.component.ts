import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'bcp-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements OnInit {

 
  apiLoaded: Observable<boolean>;

  @Input() center: google.maps.LatLngLiteral = {lat: 24, lng: 22};
  @Output() changeAgancyAddress = new EventEmitter;
  @Input() disabled: boolean = false;

  markerPosition: google.maps.LatLngLiteral;

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyDoESR7QpDDi0FN5cQKTmDN2eXd1NvyCN4', 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
  }

  changePosition(event: google.maps.MouseEvent) {
    // console.log(event.latLng.toJSON())
    if(!this.disabled){
      const newPosition = event.latLng.toJSON()
      this.changeAgancyAddress.emit(newPosition)
      this.markerPosition = newPosition
    }
  }

  ngOnInit(): void {
    console.log(this.center)
    this.markerPosition = this.center;
  }

}
