import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {MatDialog} from '@angular/material';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

    @Output() private nav = new EventEmitter<string>();

    constructor(public dialog: MatDialog) {
    }

    ngOnInit() {
    }


    openPasswordDialog() {

    }


    onOpendNavBar(e) {
        this.nav.emit('msg frin cgukd');
    }

}
