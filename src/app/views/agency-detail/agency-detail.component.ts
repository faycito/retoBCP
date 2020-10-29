import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { element } from 'protractor';
import { AgencyI } from 'src/app/models/Agency.model';
import { CryptService } from 'src/app/services/crypt.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-agency-detail',
  templateUrl: './agency-detail.component.html',
  styleUrls: ['./agency-detail.component.scss']
})
export class AgencyDetailComponent implements OnInit, OnDestroy {

  subscriber$;
  agency: AgencyI;
  agencyForm: FormGroup;
  gmOptions: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  enableButton: boolean = true;
  latitude: number;
  longitude: number;


  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _crypt: CryptService,
    private _frmBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) { 

  }


  ngOnInit(): void {
    this.subscriber$ = this._activatedRoute.paramMap.subscribe(params => {
      let param = params.get('agency')
      this.buildParamsToAgency(param)
    })
  }

  buildParamsToAgency(param: any) {
    try {
      this.agency = this._crypt.decryptInfo(param);
      this.gmOptions = {
        lat: this.agency.lat,
        lng: this.agency.lon
      }
      this.buildForm(this.agency)
    } catch (error) {
      this._router.navigate(['/notofund'])
    }
  }

  private buildForm(agency: AgencyI): void {
    this.agencyForm = this._frmBuilder.group({
      agency: [agency.agencia, [Validators.required, Validators.minLength(3)]],
      district: [agency.distrito, [Validators.required, Validators.minLength(4)]],
      address: [agency.direccion, [Validators.required, Validators.minLength(4)]],
      lat: [{value: agency.lat, disabled: true},[Validators.required, Validators.minLength(4)]],
      lon: [{value: agency.lon, disabled: true},[Validators.required, Validators.minLength(4)]],
    })
    this.latitude = agency.lat;
    this.longitude = agency.lon;

    this.agencyForm.valueChanges.subscribe(result => {
      this.enableButton = this.validUpdate()
    })
  }
  
  changeAddress(event: google.maps.LatLngLiteral){
    console.log("called", this.agencyForm)
    this.latitude = event.lat;
    this.longitude = event.lng;
    this.agencyForm.patchValue({lon: event.lng, lat: event.lat})
  }

  updateData(){
    this.agency.agencia = this.agencyForm.value.agency;
    this.agency.distrito = this.agencyForm.value.district;
    this.agency.direccion = this.agencyForm.value.address;
    this.agency.lat = this.latitude;
    this.agency.lon = this.longitude;

    const agencies: AgencyI[] = StorageService.getLocalStorageItem('agencias').data;
    const index = agencies.findIndex(agent => agent.id == this.agency.id)
    agencies[index] = this.agency;
    console.log("agencies: ", agencies)
    console.log("agency: ", this.agency)
    this._snackBar.open('Datos actualizados correctamente', '',{
      duration: 2500
    })
    StorageService.setLocalStorageItem('agencias', agencies);
    this.enableButton = true
  }

  validUpdate(): boolean {
    const {agency, district, address} = this.agencyForm.value;
    const {latitude, longitude} = this;
    console.log(this.agencyForm.value)
    if( (agency != this.agency.agencia ||
       district != this.agency.distrito ||
      address != this.agency.direccion ||
      latitude != this.agency.lat ||
      longitude != this.agency.lon ) && this.agencyForm.valid 
    ){
      return false;
    }
    return true;
  }
  
  onBack(): void {
    this._router.navigate(['/home'])
  }

  
  ngOnDestroy(): void {
    
    this.subscriber$.unsubscribe();
  }
}
