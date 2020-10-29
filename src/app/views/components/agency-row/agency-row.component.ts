import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AgencyI } from 'src/app/models/Agency.model';

@Component({
  selector: 'bcp-agency-row',
  templateUrl: './agency-row.component.html',
  styleUrls: ['./agency-row.component.scss']
})
export class AgencyRowComponent implements OnInit {

  @Input() agency: AgencyI;
  @Output() goToDetail = new EventEmitter;
  @Output() onFavorite = new EventEmitter;
  @Output() showMapDetail = new EventEmitter;

  constructor(
  ) { 
    
  }

  ngOnInit(): void {
  }

  detailPressed(): void{
    this.goToDetail.emit(this.agency);
  }

  toggleFavorite(value: boolean){
    this.onFavorite.emit(value)
  }

  showMap(): void {
    const position: google.maps.LatLngLiteral = {
      lng: this.agency.lon,
      lat: this.agency.lat
    }
    this.showMapDetail.emit(position)
  }
}
