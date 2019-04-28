import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { SharedService } from '../../../shared/shared.service';
import { ConsignmentNotesService } from '../../../service/consignment-notes.service';
import { VehiclesService } from 'src/app/service/vehicles.service';
import { VehicleDetailComponent } from '../vehicle-detail/vehicle-detail.component';


@Component({
    selector: 'app-vehicle-dialog',
    templateUrl: './vehicle-dialog.component.html',
    styleUrls: ['./vehicle-dialog.component.css']
})
export class VehicleDialogComponent implements OnInit {

    consignmentNotesList = [];

    constructor(private dialogRef: MatDialogRef<VehicleDetailComponent>, @Inject(MAT_DIALOG_DATA) private data: VehicleDialogData
        , private consignmentNotesService: ConsignmentNotesService, private vehiclesService: VehiclesService, private snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.initWebData();
    }


    initWebData() {
        var _that = this;
        _that.consignmentNotesService.getConsignmentNotes().subscribe(
            (res) => {
                for (let temp of res) {

                    if (temp['valid'] === true && temp['vehicleId'] === 0) {
                        // console.info(temp);
                        let cns = {
                            id: temp['id'],
                            orderNumber: temp['orderNumber'],
                            selected: false
                        }
                        _that.consignmentNotesList.push(cns);
                    }
                }
            },
            (error) => {
                console.error(error);
            });
    }


    onCheckSubmit() {
        console.info(this.consignmentNotesList);


        var _that = this;

        var jsonData = {
            id: _that.data.id,
            consignmentNotes: []
        }

        for (let temp of _that.consignmentNotesList) {
            if (temp.selected === true) {
                console.info(temp.id);
                jsonData.consignmentNotes.push(
                    {
                        id: temp.id
                    });
            }
        }



        //TODO 修改啊后台实现传入数组
        _that.vehiclesService.putVehiclescCnsignmentNotes(
            _that.data.id, jsonData
        ).subscribe(
            (res) => {
                _that.dialogRef.close(this.data);
            },
            (error) => {

                if (error['status'] === 400) {
                    _that.snackBar.open("数据格式错误", "提示", { duration: 2000 });
                } else if (error['status'] === 401) {
                    _that.snackBar.open("Token已过期", "提示", { duration: 2000 });
                } else if (error['status'] === 403) {
                    _that.snackBar.open("没有权限", "提示", { duration: 2000 });
                } else if (error['status'] === 500) {
                    _that.snackBar.open("服务器异常", "提示", { duration: 2000 });
                } else {
                    _that.snackBar.open("其他错误状态码" + error['status'], "提示", { duration: 2000 });
                }
            }
        )
    }
}


export interface VehicleDialogData {
    id: number;
}