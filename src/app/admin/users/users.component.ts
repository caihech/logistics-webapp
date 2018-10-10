import {Component, OnInit, ViewChild} from '@angular/core';
import {UsersService} from './users.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    usersTableDisplayedColumns: string[] = ['id', 'username', 'fullname', 'mobilephone', 'roleName', 'stateName', 'updateTime', 'edit', 'delete'];
    usersTableDataSource;
    @ViewChild(MatPaginator) paginator: MatPaginator;


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
                _that.usersTableDataSource = new MatTableDataSource<Object[]>(rep);
                _that.usersTableDataSource.paginator = _that.paginator;
            }, function (error) {
                console.error(error);
            }
        );
    }

    onEdit(id: number) {
        alert('编辑用户' + id);
    }

    onDelete(id: number) {
        alert('删除用户' + id);
    }
}