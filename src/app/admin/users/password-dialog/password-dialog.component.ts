import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {Observable} from 'rxjs/index';
import {UsersService} from '../../../service/users.service';

@Component({
    selector: 'app-password-dialog',
    templateUrl: './password-dialog.component.html',
    styleUrls: ['./password-dialog.component.css']
})
export class PasswordDialogComponent implements OnInit {

    username: String = '';

    // 响应式表单
    formModel: FormGroup;

    constructor(private dialogRef: MatDialogRef<PasswordDialogComponent>, @Inject(MAT_DIALOG_DATA)
    private data: PasswordDialogData, fb: FormBuilder, private usersService: UsersService) {

        this.formModel = fb.group({
                currentPassword: ['', [Validators.required, this.passwordRegValidator]],
                newPasswordGroup: fb.group({
                        newPassword1: ['', [Validators.required, this.passwordRegValidator]],
                        newPassword2: ['', [Validators.required, this.passwordRegValidator]],
                    },
                    {validator: this.equalPasswordValidator})
            }
        );
    }


    /**
     * 响应式表单提交
     */
    onSubmitForm() {
        var _that = this;
        if (this.formModel.valid) {
            // console.info(this.formModel.value);

            const userPasswordModel = {
                currentPassword: this.formModel.value.currentPassword,
                newPassword: this.formModel.value.newPasswordGroup.newPassword1
            };

            _that.usersService.putCurrentUserPassword(userPasswordModel).subscribe(function (data) {

                // console.info(data);
                alert('更新成功!');
                _that.dialogRef.close(this.data);

            }, function (error) {
                if (error['status'] === 400) {
                    alert('错误：请求格式异常.');
                } else if (error['status'] === 452) {
                    alert('错误：新密码与当前密码相同.');
                } else if (error['status'] === 404) {
                    alert('错误：没有找到当前用户信息.');
                } else if (error['status'] === 409) {
                    alert('错误：原始密码不正确.');
                } else {
                    alert('其他错误状态码' + error['status']);
                }
            });
        } else {
            alert('密码格式错误!');
        }
    }


    ngOnInit() {
        this.username = this.data.username;
    }

    onNoClick(): void {
        this.dialogRef.close(this.data);
    }


    // 密码正则，8到16位（字母，数字，下划线，减号）
    passwordRegValidator(control: FormControl): any {
        let pwdRge = /^[a-zA-Z0-9_-]{6,16}$/;
        let vaild = pwdRge.test(control.value);
        return vaild ? null : {passwordReg: true};
    }


    // 二次密码校验
    equalPasswordValidator(group: FormGroup): any {
        let pwdOne = group.get('newPassword1') as FormControl;
        let pwdTow = group.get('newPassword2') as FormControl;
        let valid: boolean = (pwdOne.value === pwdTow.value);
        return valid ? null : {equalPassword: true};
    }


    // TODO 异步校验器 使用第三个参数使用如 【''，Reg，mobileAsyncValidator】
    // mobileAsyncValidator(control: FormControl): any {
    //     const pwdRge = /^[a-zA-Z0-9_-]{8,16}$/;
    //     const vaild = pwdRge.test(control.value);
    //     return Observable.of(vaild ? null : {mobuleAsync: true}).delay(5000);
    // }


    getCurrentPasswordErrorMessage(tempControl: FormControl) {
        return this.formModel.get('currentPassword').hasError('required') ? '密码不能为空!' :
            this.formModel.get('currentPassword').hasError('passwordReg') ? '密码格式错误,请输入6-16为有效字符.' :
                '';
    }

    getNewPassword1ErrorMessage() {
        return this.formModel.get(['newPasswordGroup', 'newPassword1']).hasError('required') ? '密码不能为空!' :
            this.formModel.get(['newPasswordGroup', 'newPassword1']).hasError('passwordReg') ? '密码格式错误,请输入6-16为有效字符.' :
                '';
    }

    getNewPassword2ErrorMessage() {
        return this.formModel.get(['newPasswordGroup', 'newPassword2']).hasError('required') ? '密码不能为空!' :
            this.formModel.get(['newPasswordGroup', 'newPassword2']).hasError('equalPassword') ? '密码格式错误,请输入6-16为有效字符.' :
                '';
    }

    getNewPasswordGroupErrorMessage() {
        return this.formModel.get(['newPasswordGroup']).hasError('equalPassword') ? '新密码与确认密码不一致.' :
            '';
    }


}

export interface PasswordDialogData {
    username: string;
}