import {Component, OnInit, ViewChild} from '@angular/core';
import {UsersService} from './users.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    usersTableDisplayedColumns: string[] = ['id', 'username','companyName', 'mobilephone', 'fullname', 'roleName',
        'stateName', 'updateTime', 'edit', 'delete'];
    usersTableDataSource;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;


    constructor(private usersService: UsersService) {
    }

    ngOnInit() {
        this.httpGetUsers();
    }


    /**
     * 获取用户列表
     */
    httpGetUsers() {
        let _that = this;
        this.usersService.getUsers().subscribe(
            function (rep) {
                _that.usersTableDataSource = new MatTableDataSource<Object>(rep);
                _that.usersTableDataSource.paginator = _that.paginator;
                _that.usersTableDataSource.sort = _that.sort;
            }, function (error) {
                console.error(error);
            }
        );
    }

    /**
     * 修改用户信息通过用户id
     * @param {number} id
     */
    onEdit(id: number) {
        alert('编辑用户' + id);
    }

    /**
     * 删除用户
     * @param {number} id
     */
    onDelete(id: number) {
        alert('删除用户' + id);
    }
}