import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CryptService {

  constructor() { }

  public cryptInfo(data: any) : string {
    const dataToJSON = JSON.stringify(data);
    return btoa(dataToJSON);
  }

  public decryptInfo(encripted: string) : any {
    const dataDecrypted = atob(encripted);
    return JSON.parse(dataDecrypted);
  }
}
