import { StorageService } from 'src/app/services/storage.service';
import { AgencyI } from 'src/app/models/Agency.model';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CryptService } from 'src/app/services/crypt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bcp-favoritelist',
  templateUrl: './favoritelist.component.html',
  styleUrls: ['./favoritelist.component.scss']
})
export class FavoritelistComponent implements OnInit {
  agencies: AgencyI[] =[];
  search: boolean = false;
  constructor(
    private _router: Router,
    private _crypt: CryptService,
    private _snackBar: MatSnackBar
  ) { 
    this.getAgenciesData()
  }

  ngOnInit(): void {
  }

  getAgenciesData(){
    const agencies = StorageService.getSessionStorageItem('agencias');
    console.log("agencies: ", agencies)
    if(agencies.success &&  Array.isArray(agencies.data)){
      this.agencies = agencies.data.filter(agnt => agnt.favorite);
    }else {
      this._router.navigate(['/home'])
    }
  }


  saveFavourite(value: boolean, agency: AgencyI) {
    const index: number = this.agencies.findIndex(agnt => agnt.id == agency.id);
    this.agencies[index].favorite = value;
    StorageService.setSessionStorageItem('agencias', this.agencies)
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
  
  onBack(): void {
    this._router.navigate(['/home'])
  }


}
