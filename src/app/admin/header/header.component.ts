import {Component, OnInit} from '@angular/core';
import {PasswordDialogComponent} from '../../users/password-dialog/password-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(public dialog: MatDialog) {
    }

    ngOnInit() {
    }


    openPasswordDialog(): void {
        const dialogRef = this.dialog.open(PasswordDialogComponent, {});
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
