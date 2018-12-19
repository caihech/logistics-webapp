import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';

@Component({
    selector: 'app-vehicles',
    templateUrl: './vehicles.component.html',
    styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

    vehiclesTableDisplayedColumns: string[] = ['id', 'licensePlate', 'driverName', 'drivingLicenseNumber', 'driverPhone', 'startDate',
        'endDate', 'vehicleStatus', 'consignmentNotes'];
    vehiclesTableDataSource;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor() {
    }

    ngOnInit() {
    }

}
