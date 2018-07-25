import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    openedNavBar = true;

    constructor() {
    }

    ngOnInit() {
    }


    onOpendNavBar(e) {
        if (this.openedNavBar) {
            this.openedNavBar = false;
        } else {
            this.openedNavBar = true;
        }
    }

}
