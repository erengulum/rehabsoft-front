import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from "../../environments/environment";

import { BehaviorSubject, Observable } from 'rxjs';

import { User } from '../models/user';
import { TokenDto } from '../models/tokendto';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<TokenDto>;
    public currentUser: Observable<TokenDto>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<TokenDto>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): TokenDto {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
      return this.http.post<any>(environment.API_BASE_PATH + '/token', { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    register(registerData) {
      return this.http.post<any>(environment.API_BASE_PATH + '/token/register', registerData)
        .pipe(map(resp => {
          return resp;
        }));
    }
  


    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}