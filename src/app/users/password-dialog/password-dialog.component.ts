import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

class DialogData {
}

@Component({
    selector: 'app-password-dialog',
    templateUrl: './password-dialog.component.html',
    styleUrls: ['./password-dialog.component.css']
})
export class PasswordDialogComponent {

    constructor( public dialogRef: MatDialogRef<PasswordDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }
}
