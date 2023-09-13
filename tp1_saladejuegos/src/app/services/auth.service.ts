import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(

    private router: Router,
  ) {}

 
  //================ LocalStorage ================
  //Set

  setElementInLocalstorage(key: string, element: any) {
    return localStorage.setItem(key, JSON.stringify(element));
  }

  //Get

  getElementFromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

 
  //================ Router ================
  routerLink(url: string) {
    return this.router.navigateByUrl(url);
  }
}