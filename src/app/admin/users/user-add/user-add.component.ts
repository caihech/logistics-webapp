import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {Observable} from 'rxjs/index';
import {SharedReg} from '../../../shared/sharedReg';
import {RolesService} from '../../roles/roles.service';
import {UsersService} from '../users.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-user-add',
    templateUrl: './user-add.component.html',
    styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {


    userFormModel: FormGroup;
    public selected;

    roles = [];


    constructor(fb: FormBuilder, private sharedReg: SharedReg, private rolesService: RolesService, private userService: UsersService, private router: Router) {

        this.userFormModel = fb.group({
                username: [, [Validators.required, this.sharedReg.usernameRegValidator]],
                password: [, [Validators.required, this.sharedReg.passwordRegValidator]],
                mobilephone: [, [Validators.required, this.sharedReg.mobilephoneRegValidator]],
                email: [],
                fullname: [, [Validators.required]],
                birthday: [],
                companyName: [, [Validators.required]],
                postalCode: [],
                address: [],
                fax: [],
                telephone: [],
                wechat: [],
                weibo: [],
                remark: [],
                sex: [0],
                valid: [1],
                role: fb.group(
                    {id: [1]}
                )
            }
        );

    }

    ngOnInit() {

        this.httpGetRoles();
    }


    /**
     * 提交表单
     */
    onSubmitForm() {
        var _that = this;
        if (this.userFormModel.valid) {
            _that.userService.postUser(this.userFormModel.value).subscribe((res) => {
                alert('添加成功');
                _that.router.navigate(['/admin/users']);
            }, (error) => {
                if (error['status'] === 400) {
                    alert('数据格式错误');
                } else if (error['status'] === 401) {
                    alert('Token已过期');
                } else if (error['status'] === 500) {
                    alert('用户名已存在');
                } else {
                    alert('其他错误状态码' + error['status']);
                }
            });
        }
    }

    /**
     * 获取角色列表
     */
    httpGetRoles() {
        var _that = this;
        this.rolesService.getRoles().subscribe(
            function (rep) {
                _that.roles = rep;
            }, function (error) {
                console.error(error);
            }
        );
    }


    // 用户名正则
    getUsernameErrorMessage() {
        return this.userFormModel.get('username').hasError('required') ? '用户名不能为空!' :
            this.userFormModel.get('username').hasError('usernameRegValidator') ? '用户名格式无效,请输入4到16位（字母，数字，下划线，减号）为有效字符.' :
                '';
    }

    // 密码正则
    getPasswordErrorMessage() {
        return this.userFormModel.get('password').hasError('required') ? '密码不能为空!' :
            this.userFormModel.get('password').hasError('passwordRegValidator') ? '密码格式无效,请输入8到16位（字母，数字，下划线，减号）为有效字符.' :
                '';
    }

    // 移动电话正则
    getMobilephoneErrorMessage() {
        return this.userFormModel.get('mobilephone').hasError('required') ? '移动电话不能为空!' :
            this.userFormModel.get('mobilephone').hasError('mobilephoneRegValidator') ? '移动电话格式错误' :
                '';
    }

    // 真是姓名正则
    getFullnameErrorMessage() {
        return this.userFormModel.get('fullname').hasError('required') ? '真实姓名不能为空!' :
            '';
    }

    // 公司名称正则
    getCompanyNameErrorMessage() {
        return this.userFormModel.get('companyName').hasError('required') ? '公司名称不能为空!' :
            '';
    }

    onResetForm() {
        this.userFormModel.reset();
    }
}
