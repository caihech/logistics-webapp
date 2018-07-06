import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

class DialogData {
}

@Component({
    selector: 'app-password-dialog',
    templateUrl: './password-dialog.component.html',
    styleUrls: ['./password-dialog.component.css']
})
export class PasswordDialogComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }

    ngOnInit() {
    }

}
