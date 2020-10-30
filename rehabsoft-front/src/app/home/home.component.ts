import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../models/user';
import { UserService } from '../services/user.service';
import {AuthenticationService} from '../security/authentication.service';
import { TokenDto } from '../models/tokendto';



@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    currentUser: TokenDto;
    userFromApi: User;

    constructor(
        private userService: UserService,
        private authenticationService: AuthenticationService
    ) {
        this.currentUser = this.authenticationService.currentUserValue; //AuthService, localStorage'daki bilgilerden cekiyor
    }

    ngOnInit() {
        this.loading = true; //getById(1) koyduk daha sonra degisebilirsin ya da getBy UserName yap
        this.userService.getById(1).pipe(first()).subscribe(user => {
            this.loading = false;
            this.userFromApi = user;
        });
    }
}