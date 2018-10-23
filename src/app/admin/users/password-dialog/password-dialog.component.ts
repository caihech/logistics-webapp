import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-password-dialog',
    templateUrl: './password-dialog.component.html',
    styleUrls: ['./password-dialog.component.css']
})
export class PasswordDialogComponent implements OnInit {

    hide = true;
    username: String = '';


    constructor(private dialogRef: MatDialogRef<PasswordDialogComponent>,
                @Inject(MAT_DIALOG_DATA) private data: PasswordDialogData) {
    }

    ngOnInit() {
        this.username = this.data.username;
    }

    onNoClick(): void {
        this.data.username = '111';
        this.dialogRef.close(this.data);
    }

}

export interface PasswordDialogData {
    username: string;
}