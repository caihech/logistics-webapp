import { Component,Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {SharedService} from '../../../shared/shared.service';
import {ConsignmentNotesService} from '../../../service/consignment-notes.service';


@Component({
  selector: 'app-vehicle-dialog',
  templateUrl: './vehicle-dialog.component.html',
  styleUrls: ['./vehicle-dialog.component.css']
})
export class VehicleDialogComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA)private data: VehicleDialogData,private consignmentNotesService: ConsignmentNotesService) { }

  ngOnInit() {
  }

}


export interface VehicleDialogData {
  id: number;
}