import {Component, OnInit, ViewChild} from '@angular/core';
import {PasswordDialogComponent} from '../../users/password-dialog/password-dialog.component';
import {MatDialog} from '@angular/material';
import {AdminComponent} from '../admin.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    // 获取模板内的第一个指定组件
    @ViewChild(AdminComponent)
    private adminComponent: AdminComponent;


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
        this.adminComponent.onOpendNavBar(e);
    }

}
