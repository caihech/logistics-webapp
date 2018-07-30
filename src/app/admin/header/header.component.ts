import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {PasswordDialogComponent} from '../../users/password-dialog/password-dialog.component';
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
        this.dialog.open(PasswordDialogComponent, {
            height: '400px',
            width: '600px',
            data: {
                animal: 'panda'
            }
        });
    }


    onOpendNavBar(e) {
        this.nav.emit('msg frin cgukd');
    }

}
