import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AbstractControl, FormControl, ValidatorFn, Validators} from '@angular/forms';

@Component({
    selector: 'app-password-dialog',
    templateUrl: './password-dialog.component.html',
    styleUrls: ['./password-dialog.component.css']
})
export class PasswordDialogComponent implements OnInit {

    username: String = '';

    originalPassword = new FormControl('', [Validators.required]);

    userPasswordModel = new UserPasswordModel('', '', '');


    constructor(private dialogRef: MatDialogRef<PasswordDialogComponent>,
                @Inject(MAT_DIALOG_DATA) private data: PasswordDialogData) {
    }

    ngOnInit() {
        this.username = this.data.username;

    }

    onNoClick(): void {
        this.data.username = '111';
        this.dialogRef.close(this.data);
    }

    // 测试数据后期删除
    get diagnostic() {
        return JSON.stringify(this.userPasswordModel);
    }


    /**
     * 提交表单
     */
    onSubmitForm() {
        console.info(this.userPasswordModel);
    }
}

export interface PasswordDialogData {
    username: string;
}

export class UserPasswordModel {

    public oldPassword: string;
    public newPassword: string;
    public checkPassword: string;

    constructor(_oldPassword: string, _newPassword: string, _checkPassword: string) {
        this.oldPassword = _oldPassword;
        this.newPassword = _newPassword;
        this.checkPassword = _checkPassword;
    }
}