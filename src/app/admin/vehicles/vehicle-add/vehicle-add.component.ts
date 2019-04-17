import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
    selector: 'app-vehicle-add',
    templateUrl: './vehicle-add.component.html',
    styleUrls: ['./vehicle-add.component.css']
})
export class VehicleAddComponent implements OnInit {


    constructor(private _formBuilder: FormBuilder) {
    }

    ngOnInit() {

    }

}
