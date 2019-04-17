import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {VehiclesService} from '../vehicles.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-vehicle-add',
    templateUrl: './vehicle-add.component.html',
    styleUrls: ['./vehicle-add.component.css']
})
export class VehicleAddComponent implements OnInit {


    vehicleFormModel: FormGroup;

    constructor(private fb: FormBuilder, private vehiclesService: VehiclesService, private router: Router) {

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
                    alert('添加成功');
                    _that.router.navigate(['/admin/vehicles']);
                },
                (error) => {
                    if (error['status'] === 400) {
                        alert('数据格式错误');
                    } else if (error['status'] === 401) {
                        alert('Token已过期');
                    } else if (error['status'] === 403) {
                        alert('您权限不够');
                    } else if (error['status'] === 500) {
                        alert('服务器异常');
                    } else {
                        alert('其他错误状态码' + error['status']);
                    }
                });
        }
    }

}
