import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {VehiclesService} from './vehicles.service';

@Component({
    selector: 'app-vehicles',
    templateUrl: './vehicles.component.html',
    styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

    vehiclesTableDisplayedColumns: string[] = ['id', 'licensePlate', 'driverName', 'drivingLicenseNumber', 'driverPhone', 'startDate',
        'endDate', 'delete', 'edit'];
    vehiclesTableDataSource
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private vehiclesService: VehiclesService) {
    }

    ngOnInit() {
        this.httpGetVehicles();
    }

    /**
     * 获取托运单信息
     */
    httpGetVehicles() {
        var _that = this;
        _that.vehiclesService.getVehicles().subscribe(
            function (res) {
                console.info(res);
                _that.vehiclesTableDataSource = new MatTableDataSource<Object>(res);
                _that.vehiclesTableDataSource.paginator = _that.paginator;
                _that.vehiclesTableDataSource.sort = _that.sort;
            }, function (error) {
                console.error(error);
            }
        );
    }

    /**
     * 删除车次
     * @param {number} id
     */
    onDelete(id: number) {
        var _that = this;
        if (confirm('确认要删除？')) {
            _that.vehiclesService.deleteVehicles(id).subscribe(
                success => {
                    _that.httpGetVehicles();
                }, faile => {
                    console.error(faile);
                }
            );
        }
    }

}



