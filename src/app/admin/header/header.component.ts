import {Router} from '@angular/router';
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {SharedService} from '../../shared/shared.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

    @Output() private nav = new EventEmitter<string>();
    username: String = '';

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.permission();
    }


    permission() {
        var that = this;
        this.username = SharedService.getStorageItem('username');
        if (!this.username) {
            alert('请登录');
            that.onExitLogin();
            return;
        } else {
            // todo 验证tokenExpired与当前时间对比,并且判断非空
            console.info(SharedService.getStorageItem('tokenExpired'))
            console.info('成功');
        }
    }


    onOpendNavBar(e) {
        this.nav.emit('msg frin cgukd');
    }

    /**
     * 退出登录
     */
    onExitLogin() {
        SharedService.removeStorageItem('username');
        SharedService.removeStorageItem('token');
        this.router.navigate(['/login']);
    }

}
