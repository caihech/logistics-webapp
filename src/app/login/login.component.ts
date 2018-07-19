import {Component, OnInit} from '@angular/core';
import {Login, LoginService} from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    login: Login;

    constructor(private loginService: LoginService) {

        this.login = {username: undefined};
    }

    ngOnInit() {

        this.login = this.loginService.getLogin()
            .subscribe((data: Login) => this.login = {
                id: data['id'],
                code: data['code'],
                ip: data['ip'],
                username: data['username'],
                password: data['password'],
                address: data['address'],
                client: data['client'],
                token: data['token'],
                tokenExpired: data['tokenExpired'],
                status: data['status']
            });
    }

    onSubmit() {

        console.info(this.login);

    }


}
