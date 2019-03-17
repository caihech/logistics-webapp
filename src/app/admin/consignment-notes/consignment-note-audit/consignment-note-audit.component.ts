import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SharedService} from '../../../shared/shared.service';

@Component({
    selector: 'app-consignment-note-audit',
    templateUrl: './consignment-note-audit.component.html',
    styleUrls: ['./consignment-note-audit.component.css']
})
export class ConsignmentNoteAuditComponent implements OnInit {

    formModel: FormGroup;


    constructor(private dialogRef: MatDialogRef<ConsignmentNoteAuditComponent>, @Inject(MAT_DIALOG_DATA)
    private data: ConsignmentNoteAutidDialogData, fb: FormBuilder) {


        this.formModel = fb.group({
                id: [''],
                orderNumber: [''],
                checkUsername: [''],
                checkDate: [''],
                checkMessage: ['', [Validators.required]]
            }
        );
    }


    ngOnInit() {
        this.initWebData(this.data);
    }

    /**
     * 初始化页面数据
     * @param data
     */
    initWebData(data) {
        var _that = this;
        _that.formModel.patchValue({
            id: data.id,
            orderNumber: data.orderNumber,
            checkUsername: SharedService.getStorageItem('username'),
            checkDate: _that.getDateFromat(new Date().getTime()),
            checkMessage: null
        });
    }


    getCheckMessageErrorMessage(tempControl: FormControl) {
        return this.formModel.get('checkMessage').hasError('required') ? '请填写设备备注!' : '';
    }


    /**
     * 提交审核表单
     */
    onSubmitForm() {
        var _that = this;
        console.info(_that.formModel.value);
    }


    getDateFromat(timeStamp) {
        let dataTime = '';
        if (timeStamp) {
            var tempDate = new Date(timeStamp);
            let year = tempDate.getFullYear();
            let month = tempDate.getMonth() + 1;
            let M1 = '';
            if (month >= 10) {
                M1 = month.toString();
            } else {
                M1 = '0' + month;
            }
            let day = tempDate.getDate();
            let D1 = '';
            if (day >= 10) {
                D1 = day.toString();
            } else {
                D1 = '0' + day;
            }
            dataTime = year + '-' + M1 + '-' + D1;
        }
        return dataTime;
    }

}

export interface ConsignmentNoteAutidDialogData {
    id: number;
    orderNumber: String;
}