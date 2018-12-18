import {Component, OnInit} from '@angular/core';

import {SharedService} from '../shared/shared.service';
import {throwError} from 'rxjs/index';
import {catchError} from 'rxjs/internal/operators';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {ReactiveFormsModule, FormGroup, FormsModule, Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {SharedReg} from '../shared/sharedReg';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    formLoginModel: FormGroup;

    constructor(private loginService: LoginService, private router: Router, private fb: FormBuilder, private sharedReg: SharedReg) {

        this.formLoginModel = fb.group({
                id: [],
                username: ['', [Validators.required, sharedReg.usernameRegValidator]],
                password: ['', [Validators.required, sharedReg.passwordRegValidator]],
                code: ['', [Validators.required]],
                ip: [],
                address: [],
                client: [],
                token: [],
                tokenExpired: [],
                status: [0],
                verificationCode: []
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

        console.info(this.formLoginModel.value);
        var _that = this;
        if (this.formLoginModel.valid) {
            // console.info(this.formModel.value);
        }

    }

    /**
     * 验证 用户名
     * */
    getUsernameErrorMessage() {
        return this.formLoginModel.get('username').hasError('required') ? '用户名不能为空!' :
            this.formLoginModel.get('username').hasError('usernameRegValidator') ? '用户名格式无效,请输入4到16位（字母，数字，下划线，减号）为有效字符.' :
                '';
    }

    /**
     * 验证 密码
     */
    getPasswordErrorMessage() {
        return this.formLoginModel.get('password').hasError('required') ? '密码不能为空!' :
            this.formLoginModel.get('password').hasError('passwordRegValidator') ? '密码格式无效,请输入8到16位（字母，数字，下划线，减号）为有效字符.' :
                '';
    }

    /**
     * 验证 验证码
     */
    getCodeErrorMessage() {
        return this.formLoginModel.get(['verificationCode']).hasError('required') ? '验证码不能为空!' :
            '';
    }


    /**
     * 登录
     */
    onSubmit() {
        // this.flag = this.flag + 1;
        // // 避免多次点击
        // if (this.flag > 2) {
        //     return;
        // }
        //
        // // 用户名或密码不能为空
        // if (!this.loginModel.username || !this.loginModel.password) {
        //     this.flag = 0;
        //     alert('用户名或密码不能为空');
        //     return;
        // }
        //
        // // 验证码是否正确
        // if (this.loginModel.code.toUpperCase() !== this.code.toUpperCase()) {
        //     alert('验证码错误');
        //     this.flag = 0;
        //     this.code = '';
        //     return;
        // }
        //
        //
        // var that = this;
        // console.info(this.loginModel);
        //
        // this.loginService.postLogin(this.loginModel).subscribe(function (data) {
        //
        //     console.info('success:' + data);
        //
        //     SharedService.setStorageItem('username', data['username']);
        //     SharedService.setStorageItem('token', data['token']);
        //     SharedService.setStorageItem('tokenExpired', data['tokenExpired']);
        //     this.flag = 0;
        //     that.router.navigate(['/admin']);
        //
        //
        // }, function (error) {
        //     console.error('error:' + error['status']);
        //     that.getCodeService();
        //     if (error['status'] === 450) {
        //         alert('验证码已过期');
        //     } else if (error['status'] === 451) {
        //         alert('验证码错误');
        //     } else if (error['status'] === 452) {
        //         alert('用户名或密码错误');
        //     } else {
        //         alert('其他错误状态码' + error['status']);
        //     }
        // });
    }


    /**
     * 获取验证码
     */
    getCodeService() {
        var _that = this;
        this.loginService.getNewCode()
            .subscribe((res) => {
                _that.formLoginModel.patchValue({
                    id: res['id'],
                    code: res['code'],
                    username: res['username'],
                    password: res['password'],
                    address: res['address'],
                    client: res['client'],
                    token: res['token'],
                    tokenExpired: res['tokenExpired'],
                    status: res['status'],
                    verificationCode: ['']
                });
            }, (error) => {
                console.error(error);
            });
    }
}
