import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public static setSessionStorageItem(key: string, item: any) :  boolean {
    try {
      sessionStorage.setItem(key, JSON.stringify(item))
      return true;
    } catch (error) {
      return false
    }
  }

  public static getSessionStorageItem(key:string) : any {
    try {
      const data = JSON.parse(sessionStorage.getItem(key));
      console.log("data", data)
      return {success: true, data};
    } catch (error) {
      return {success: false, message: 'Ha ocurrido un problema'}
    }
  }

  public static setLocalStorageItem(key: string, item: any) :  boolean {
    try {
      localStorage.setItem(key, JSON.stringify(item))
      return true;
    } catch (error) {
      return false
    }
  }

  public static getLocalStorageItem(key:string) : any {
    try {
      const data = JSON.parse(localStorage.getItem(key));
      return {success: true, data};
    } catch (error) {
      return {success: false, message: 'Ha ocurrido un problema'}
    }
  }

  
}
