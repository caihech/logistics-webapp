import {Component, OnInit} from '@angular/core';
import {SharedService} from '../shared/shared.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {PasswordDialogComponent} from '../admin/users/password-dialog/password-dialog.component';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    openedNavBar = true;
    username: String = '';


    constructor(private router: Router, private dialog: MatDialog) {
    }

    ngOnInit() {
        this.permission();
        // SharedService.setStorageItem('username', 'admin');
        // SharedService.setStorageItem('token', 'a31ff937-6083-45c2-a607-beeba85935f0');
        // SharedService.setStorageItem('tokenExpired', '2018-12-28 08:10:14');
    }


    /**
     * 权限验证
     */
    permission() {
        var that = this;
        this.username = SharedService.getStorageItem('username');
        if (!this.username) {
            alert('请登录');
            that.onExitLogin();
            return;
        } else {
            // todo 验证tokenExpired与当前时间对比,并且判断非空
            console.info(SharedService.getStorageItem('token'))
            console.info(SharedService.getStorageItem('tokenExpired'))
            console.info('成功');
        }
    }

    /**
     * 退出登录
     */
    onExitLogin() {
        SharedService.removeStorageItem('username');
        SharedService.removeStorageItem('token');
        this.router.navigate(['/login']);
    }


    /**
     * 打开 修改密码 窗体
     */
    openPasswordDialog(): void {

        const dialogRef = this.dialog.open(PasswordDialogComponent, {
            width: '400px',
            height: '330px',
            disableClose: true,
            data: {username: this.username}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed.' + result);
        });

    }

}
