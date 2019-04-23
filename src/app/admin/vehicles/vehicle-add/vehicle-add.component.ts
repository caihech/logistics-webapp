import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VehiclesService } from '../../../service/vehicles.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-vehicle-add',
    templateUrl: './vehicle-add.component.html',
    styleUrls: ['./vehicle-add.component.css']
})
export class VehicleAddComponent implements OnInit {


    vehicleFormModel: FormGroup;

    constructor(private fb: FormBuilder, private vehiclesService: VehiclesService, private router: Router, private snackBar: MatSnackBar) {

        this.vehicleFormModel = fb.group({
            licensePlate: [],
            driverName: [],
            drivingLicenseNumber: [],
            driverPhone: [],
            startDate: [],
            endDate: []
        });
    }

    ngOnInit() {

    }


    /**
     * 提交表单
     */
    onSubmitForm() {
        var _that = this;
        if (this.vehicleFormModel.valid) {
            _that.vehiclesService.postVehicles(_that.vehicleFormModel.value).subscribe(
                (res) => {
                    _that.snackBar.open("添加成功", "提示", { duration: 2000 });
                    _that.router.navigate(['/admin/vehicles']);
                },
                (error) => {
                    if (error['status'] === 400) {
                        _that.snackBar.open("数据格式错误", "提示", { duration: 2000 });
                    } else if (error['status'] === 401) {
                        _that.snackBar.open("Token已过期", "提示", { duration: 2000 });
                    } else if (error['status'] === 403) {
                        _that.snackBar.open("您权限不够", "提示", { duration: 2000 });
                    } else if (error['status'] === 500) {
                        _that.snackBar.open("服务器异常", "提示", { duration: 2000 });
                    } else {
                        _that.snackBar.open("其他错误状态码" + error['status'], "提示", { duration: 2000 });
                    }
                });
        }
    }

}
