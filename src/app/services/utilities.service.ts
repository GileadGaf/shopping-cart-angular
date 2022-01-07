import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  public saveToStorage(key: string, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  public loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key) || 'null');
  }
  constructor() { }
}
