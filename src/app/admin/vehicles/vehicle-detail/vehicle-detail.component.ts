import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {VehiclesService} from '../../../service/vehicles.service';
import {ConsignmentNotesService} from '../../../service/consignment-notes.service';
import {VehicleDialogComponent} from '../vehicle-dialog/vehicle-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
    selector: 'app-vehicle-detail',
    templateUrl: './vehicle-detail.component.html',
    styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {

    vehicleFormModel: FormGroup;
    consignmentNotesList: any;
    pageid;

    constructor(private fb: FormBuilder, private route: ActivatedRoute, private vehiclesService: VehiclesService
        , private consignmentNotesService: ConsignmentNotesService, private dialog: MatDialog, private router: Router) {

        this.vehicleFormModel = fb.group({
            id: [],
            licensePlate: [],
            driverName: [],
            drivingLicenseNumber: [],
            driverPhone: [],
            startDate: [],
            endDate: [],
            valid: []
        });
    }

    ngOnInit() {
        this.pageid = this.route.snapshot.paramMap.get('id');
        this.initWebInfoById(this.pageid);
    }


    initWebInfoById(id) {
        var _that = this;
        _that.vehiclesService.getVehiclesById(id).subscribe(
            (res) => {
                _that.vehicleFormModel.patchValue({
                    id: res['id'],
                    licensePlate: res['licensePlate'],
                    drivingLicenseNumber: res['drivingLicenseNumber'],
                    driverName: res['driverName'],
                    driverPhone: res['driverPhone'],
                    startDate: res['startDate'] ? (new Date(res['startDate'])).toISOString() : null,
                    endDate: res['endDate'] ? (new Date(res['endDate'])).toISOString() : null,
                    valid: res['valid']
                });

                _that.consignmentNotesList = res['consignmentNotes'];
            },
            (error) => {
            })
        ;
    }

    onAutid() {
        var _that = this;
        if (confirm('审核通过？')) {
            _that.vehiclesService.putVehiclesValid(_that.vehicleFormModel.value.id,
                _that.vehicleFormModel.value).subscribe(
                (res) => {
                    alert('更新成功');
                    _that.initWebInfoById(_that.vehicleFormModel.value.id);
                }, (error) => {

                }
            );

        }

    }


    onRemove(id) {
        var _that = this;
        if (confirm('确认要移除么？')) {
            var jsonData = {
                id: id
            }
            _that.consignmentNotesService.putConsignmentNotesVehicle(id, jsonData).subscribe(
                success => {
                    _that.initWebInfoById(_that.vehicleFormModel.value.id);
                }, faile => {
                    console.error(faile);
                }
            );
        }
    }


    /**
     * 提交表单
     */
    onSubmitUpdateForm() {
        var _that = this;
        if (_that.vehicleFormModel.valid) {
            _that.vehiclesService.putVehicles(
                _that.vehicleFormModel.value.id, _that.vehicleFormModel.value).subscribe(
                (res) => {
                    alert('更新成功');
                    _that.initWebInfoById(_that.vehicleFormModel.value.id);

                }, (error) => {
                    if (error['status'] === 400) {
                        alert('数据格式错误');
                    } else if (error['status'] === 401) {
                        alert('Token已过期');
                    } else if (error['status'] === 500) {
                        alert('服务器异常');
                    } else {
                        alert('其他错误状态码' + error['status']);
                    }
                });
        } else {
            console.info('faile');
        }
    }


    /**
     * 弹出对话框
     */
    onShowVehicleDialog(): void {
        var _that = this;
        const dialogRef = this.dialog.open(VehicleDialogComponent, {
            width: '600px',
            height: '500px',
            disableClose: true,
            data: {
                id: _that.pageid
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed.');
            if (result) {
                _that.initWebInfoById(_that.vehicleFormModel.value.id);
            } else {
                _that.router.navigate(['/admin/vehicles']);
            }
        });
    }

}
