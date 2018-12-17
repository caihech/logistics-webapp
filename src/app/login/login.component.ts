import {Component, OnInit} from '@angular/core';

import {SharedService} from '../shared/shared.service';
import {throwError} from 'rxjs/index';
import {catchError} from 'rxjs/internal/operators';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {ReactiveFormsModule, FormGroup, FormsModule} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {SharedReg} from '../shared/sharedReg';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


    loginModel = {
        id: 0,
        code: '',
        ip: '',
        username: '',
        address: '',
        client: '',
        token: '',
        tokenExpired: '',
        password: '',
        status: 0
    };

    code: String = '';
    flag = 0;


    formLoginModel: FormGroup;

    constructor(private loginService: LoginService, private router: Router, private fb: FormBuilder, private sharedReg: SharedReg) {

        this.formLoginModel = fb.group({
                username: []
                // id: [],
                // username: ['', [Validators.required, sharedReg.usernameRegValidator]],
                // password: ['', [Validators.required, sharedReg.passwordRegValidator]],
                // code: ['', [Validators.required]],
                // ip: [],
                // address: [],
                // client: [],
                // token: [],
                // tokenExpired: [],
                // status: [0]
            }
        );

    }

    ngOnInit() {
        this.getCodeService();
    }


    /**
     * 登录事件
     */
    onClickSubmitForm() {

    }


    /**
     * 登录
     */
    onSubmit() {
        this.flag = this.flag + 1;
        // 避免多次点击
        if (this.flag > 2) {
            return;
        }

        // 用户名或密码不能为空
        if (!this.loginModel.username || !this.loginModel.password) {
            this.flag = 0;
            alert('用户名或密码不能为空');
            return;
        }

        // 验证码是否正确
        if (this.loginModel.code.toUpperCase() !== this.code.toUpperCase()) {
            alert('验证码错误');
            this.flag = 0;
            this.code = '';
            return;
        }


        var that = this;
        console.info(this.loginModel);

        this.loginService.postLogin(this.loginModel).subscribe(function (data) {

            console.info('success:' + data);

            SharedService.setStorageItem('username', data['username']);
            SharedService.setStorageItem('token', data['token']);
            SharedService.setStorageItem('tokenExpired', data['tokenExpired']);
            this.flag = 0;
            that.router.navigate(['/admin']);


        }, function (error) {
            console.error('error:' + error['status']);
            that.getCodeService();
            if (error['status'] === 450) {
                alert('验证码已过期');
            } else if (error['status'] === 451) {
                alert('验证码错误');
            } else if (error['status'] === 452) {
                alert('用户名或密码错误');
            } else {
                alert('其他错误状态码' + error['status']);
            }
        });
    }


    /**
     * 获取验证码
     */
    getCodeService() {
        var that = this;
        this.loginService.getNewCode()
            .subscribe((data) => that.loginModel = {
                id: data['id'],
                code: data['code'],
                ip: data['ip'],
                username: data['username'],
                address: data['address'],
                client: data['client'],
                token: data['token'],
                tokenExpired: data['tokenExpired'],
                password: data['password'],
                status: data['status']
            }, function (error) {
                console.error(error);
            });

        this.code = '';
    }
}
