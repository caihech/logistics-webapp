import {Injectable} from '@angular/core';
import {FormControl} from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class SharedReg {

    // 用户名正则，4到16位（字母，数字，下划线，减号）
    public usernameRegValidator(control: FormControl): any {
        const uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
        const valid = uPattern.test(control.value);
        return valid ? null : {usernameRegValidator: true};
    }

    // 密码正则，8到16位（字母，数字，下划线，减号）
    public passwordRegValidator(control: FormControl): any {
        const pwdRge = /^[a-zA-Z0-9_-]{6,16}$/;
        const vaild = pwdRge.test(control.value);
        return vaild ? null : {passwordRegValidator: true};
    }

    // 移动电话正则
    public mobilephoneRegValidator(control: FormControl): any {
        const pwdRge = /^1(3|4|5|7|8)\d{9}$/;
        const vaild = pwdRge.test(control.value);
        return vaild ? null : {mobilephoneRegValidator: true};
    }


}