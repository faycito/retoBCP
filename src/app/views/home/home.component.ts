import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgencyI } from 'src/app/models/Agency.model';
import { CryptService } from 'src/app/services/crypt.service';
import { StorageService } from 'src/app/services/storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MapdialogComponent } from '../components/mapdialog/mapdialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  agencies: AgencyI[] =[];
  originalAgencies: AgencyI[] = [];
  search: boolean = false;

  constructor(
    private _router: Router,
    private _crypt: CryptService,
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog

  ) { 
   this.getAgenciesData()
  }

  ngOnInit(): void {
  }

  getAgenciesData(){
    const agencies = StorageService.getSessionStorageItem('agencias');
    console.log("agencies: ", agencies)
    if(agencies.success &&  Array.isArray(agencies.data)){
      this.agencies = agencies.data;
      this.originalAgencies = agencies.data;
    }else {
      this._router.navigate(['/'])
    }
  }
  
  onSearch(value?: string) {
    const { originalAgencies } = this;
    let newArray;
    const agent =[...originalAgencies.map((el) => {
        return {...el}
    })]

    if(value && value.length > 1){
        newArray = agent.filter((element) => {
            if (element.agencia) {
                return String(element.agencia)
                .concat(element.distrito).concat(' ')
                .concat(element.provincia).concat(' ').concat(element.direccion)
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "").toLowerCase()
                .indexOf(value.normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "").toLowerCase()) > -1
            }
        });
        this.agencies = newArray
    }else{
       this.agencies = this.originalAgencies
    }
   
  }

  showMap(positions: google.maps.LatLngLiteral) {
    this._dialog.open(MapdialogComponent, {
      data: positions,

    })
  }

  saveFavourite(value: boolean, agency: AgencyI) {
    const index: number = this.originalAgencies.findIndex(agnt => agnt.id == agency.id);
    this.originalAgencies[index].favorite = value;
    StorageService.setSessionStorageItem('agencias', this.originalAgencies)
  if(value) {
      this._snackBar.open('Se añadió a favoritos correctamente', 'Aceptar', {
        duration: 2500
      })
    }else {
      this._snackBar.open('Se eliminó de favoritos correctamente', 'Aceptar', {
        duration: 2500
      })
    }
  }
  
  goToDetail(agency: AgencyI) {
    const parameter =   this._crypt.cryptInfo(agency)
    this._router.navigate(['/agencyDetail', parameter])
  }
  goToFavorite() {
    this._router.navigate(['/favorites'])
  }

}
