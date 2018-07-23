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

        this.getInitLoginCode();
    }

    onSubmit() {

        console.info(this.login);

    }


    /**
     * 获取验证码
     */
    getInitLoginCode() {
        this.loginService.getLoginCode()
            .subscribe(resp => {
                //获取Header
                const keys = resp.headers.keys();
                // console.info(keys);
                this.login = resp.body;
                // console.info(resp.body);
            });
    }


}
