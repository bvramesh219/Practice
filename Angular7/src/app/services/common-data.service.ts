import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {

  isAuthenticated = false;

  constructor() { }

  authenticateUser(): void {
    // Perform authentication mechanism here
    this.isAuthenticated = true;
  }
}
