import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { AgencyI } from 'src/app/models/Agency.model';
import { StorageService } from 'src/app/services/storage.service';
import AgencyJSON from '../../../assets/data/agencias.json';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  options: AnimationOptions = {
    path:'../../assets/animations/loader.json',
    loop: true
  };
  private images: string[] = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFgzGivw7qZkOX5csH7hb8cvQqiYJ66Rv6zQ&usqp=CAU',
    'https://1.bp.blogspot.com/_RgmvIeqJCz8/RyALKG4eowI/AAAAAAAAAAM/r5y6azMSL3M/w1200-h630-p-k-no-nu/logo_agente.gif',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMRCRZwyClIHiJUZtD1cZh5nPZ-fX-vYRIIQ&usqp=CAU'
  ];

  constructor(
    private _route: Router,
     
  ) { 
    this.readingData()
  }

  ngOnInit(): void {
  }

  readingData(){
    setTimeout(() => {
      const response = StorageService.getSessionStorageItem('agencias')
      if(response.success && response.data != null){
        this._route.navigate(['/home'])
      }else {
        let data: AgencyI[] = AgencyJSON
        data = data.map((el, index) => {
          const random = Math.floor(Math.random() * 3)
          const aux = el.lon
          el.image = this.images[random] || this.images[0]
          el.favorite = false;
          el.id = index;
          el.lon = el.lat;
          el.lat = aux;
          return el
        })
        StorageService.setSessionStorageItem('agencias', data);
        this._route.navigate(['/home'])
      }
    }, 2500);
  }

}
