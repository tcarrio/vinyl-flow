import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token: string;

  constructor() { }

  public isAuthenticated(): boolean {
    return true; // what mockery
    // return this.token !== undefined; 
  }

  public getAuthHeader(): Object {
    if (this.isAuthenticated()) {
      return { 'Authorization': `Bearer ${this.token}` }
    }
    return {}
  }
}
