import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';

@Component({
    selector: 'app-user-add',
    templateUrl: './user-add.component.html',
    styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {


    userFormModel: FormGroup;


    constructor(fb: FormBuilder) {

        this.userFormModel = fb.group({
                username: ['', [Validators.required]],
                password: ['', [Validators.required]],
                mobilephone: ['', [Validators.required]],
                email: ['', [Validators.required]],
                fullname: [''],
                birthday: [''],
                companyName: [''],
                postalCode: [''],
                address: [''],
                fax: [''],
                telephone: [''],
                wechat: [''],
                weibo: [''],
                remark: ['']

            }
        );

    }

    ngOnInit() {
    }


    /**
     * 提交表单
     */
    onSubmitForm() {
        console.info(this.userFormModel.value);
    }
}


// userRet.setSex(user.getSex());
// userRet.setValid(true);
