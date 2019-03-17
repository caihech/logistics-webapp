import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-consignment-note-audit',
    templateUrl: './consignment-note-audit.component.html',
    styleUrls: ['./consignment-note-audit.component.css']
})
export class ConsignmentNoteAuditComponent implements OnInit {

    constructor(private dialogRef: MatDialogRef<ConsignmentNoteAuditComponent>, @Inject(MAT_DIALOG_DATA)
    private data: ConsignmentNoteAutidDialogData) {
    }

    ngOnInit() {
    }

}

export interface ConsignmentNoteAutidDialogData {
    id: number;
    orderNumber: String;
    checkUsername: String;
    checkDate: number;
    checkMessage: String;
}