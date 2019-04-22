import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {SharedService} from '../../../shared/shared.service';
import {ConsignmentNotesService} from '../../../service/consignment-notes.service';


@Component({
    selector: 'app-vehicle-dialog',
    templateUrl: './vehicle-dialog.component.html',
    styleUrls: ['./vehicle-dialog.component.css']
})
export class VehicleDialogComponent implements OnInit {

    consignmentNotesList: [] = [];

    constructor(@Inject(MAT_DIALOG_DATA) private data: VehicleDialogData
        , private consignmentNotesService: ConsignmentNotesService) {
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

        for (let temp of _that.consignmentNotesList) {
            if (temp.selected === true) {
                console.info(temp.id);
            }
        }

        //TODO 修改啊后台实现传入数组
    }
}


export interface VehicleDialogData {
    id: number;
}