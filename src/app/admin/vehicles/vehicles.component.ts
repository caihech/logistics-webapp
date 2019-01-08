import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
    selector: 'app-vehicles',
    templateUrl: './vehicles.component.html',
    styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

    vehiclesTableDisplayedColumns: string[] = ['id', 'licensePlate', 'driverName', 'drivingLicenseNumber', 'driverPhone', 'startDate',
        'endDate', 'vehicleStatus', 'consignmentNotes', 'star'];
    vehiclesTableDataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor() {
    }

    ngOnInit() {
    }

}

export interface PeriodicElement {
    id: number;
    licensePlate: string;
    driverName: string;
    driverPhone: string;
    startDate: string;
    endDate: string;
    vehicleStatus: string;
    consignmentNotes: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        id: 1,
        licensePlate: 'Hydrogen',
        driverName: 'ytry',
        driverPhone: 'erterte',
        startDate: '',
        endDate: 'qwewqe',
        vehicleStatus: 'H',
        consignmentNotes: 'gfdgH'
    },

    {
        id: 1,
        licensePlate: 'Hydrogen',
        driverName: 'ytry',
        driverPhone: 'erterte',
        startDate: '',
        endDate: 'qwewqe',
        vehicleStatus: 'H',
        consignmentNotes: 'gfdgH'
    },
    {
        id: 1,
        licensePlate: 'Hydrogen',
        driverName: 'ytry',
        driverPhone: 'erterte',
        startDate: '',
        endDate: 'qwewqe',
        vehicleStatus: 'H',
        consignmentNotes: 'gfdgH'
    },
    {
        id: 1,
        licensePlate: 'Hydrogen',
        driverName: 'ytry',
        driverPhone: 'erterte',
        startDate: '',
        endDate: 'qwewqe',
        vehicleStatus: 'H',
        consignmentNotes: 'gfdgH'
    },
    {
        id: 1,
        licensePlate: 'Hydrogen',
        driverName: 'ytry',
        driverPhone: 'erterte',
        startDate: '',
        endDate: 'qwewqe',
        vehicleStatus: 'H',
        consignmentNotes: 'gfdgH'
    }
];