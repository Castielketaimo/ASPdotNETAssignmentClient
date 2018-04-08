import { User } from './../Models/User';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthService {
  private BASE_URL = "https://localhost:8888";
  accessToken = "";
  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  private headers = new Headers({ 'Content-Type': 'application/json' });

  signup(newUser: User): Promise<User> {
    return this.http
      .post(this.BASE_URL += "/api/AccountAPI/Register", JSON.stringify(newUser), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }
}
