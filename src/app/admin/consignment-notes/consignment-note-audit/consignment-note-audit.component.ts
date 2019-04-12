import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SharedService} from '../../../shared/shared.service';
import {ConsignmentNotesService} from '../consignment-notes.service';

@Component({
    selector: 'app-consignment-note-audit',
    templateUrl: './consignment-note-audit.component.html',
    styleUrls: ['./consignment-note-audit.component.css']
})
export class ConsignmentNoteAuditComponent implements OnInit {

    formModel: FormGroup;


    constructor(private dialogRef: MatDialogRef<ConsignmentNoteAuditComponent>, @Inject(MAT_DIALOG_DATA)
    private data: ConsignmentNoteAutidDialogData, fb: FormBuilder, private  consignmentNotesService: ConsignmentNotesService) {


        this.formModel = fb.group({
                id: [''],
                orderNumber: [''],
                checkstatus: [1],
                checkUsername: [''],
                checkDate: ['']
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
            checkstatus: 1,
            checkUsername: SharedService.getStorageItem('username'),
            checkDate: _that.getDateFromat(new Date().getTime()),
            checkMessage: null
        });
    }

    /**
     * 提交审核表单
     */
    onSubmitForm() {
        var _that = this;
        console.info(_that.formModel.value);


        if (_that.formModel.valid) {

            _that.consignmentNotesService.putConsignmentNotesValid(
                _that.formModel.value.id).subscribe(success => {

                _that.dialogRef.close(this.data);

            }, error => {
                if (error['status'] === 400) {
                    alert('数据格式错误');
                } else if (error['status'] === 401) {
                    alert('Token已过期');
                } else if (error['status'] === 403) {
                    alert('没有权限');
                } else if (error['status'] === 500) {
                    alert('服务器异常');
                } else {
                    alert('其他错误状态码' + error['status']);
                }
            });
        }

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