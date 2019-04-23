import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { SharedService } from '../shared/shared.service';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(private http: HttpClient) {
    }


    /**
     * 获取用户信息集合 需要登录
     * @returns {Observable<Object>}
     */
    getUsers(): Observable<any> {
        return this.http.get(SharedService.getUrl + '/users', SharedService.getLoginHttpHeader);
    }


    /**
     * 更新当前用户密码
     * @param {Object} jsonData
     * @returns {Observable<Object>}
     */
    putCurrentUserPassword(jsonData: Object): Observable<Object> {
        return this.http.put(SharedService.getUrl + '/users/password', jsonData, SharedService.getLoginHttpHeader);
    }

    /**
     * 添加用户
     * @param {Object} jsonData
     * @returns {Observable<Object>}
     */
    postUser(jsonData: Object): Observable<Object> {
        return this.http.post(SharedService.getUrl + '/users', jsonData, SharedService.getLoginHttpHeader);
    }


    /**
     * 通过用户id查询详细信息
     * @param {number} id
     * @returns {Observable<Object>}
     */
    getUserById(id): Observable<Object> {
        return this.http.get(SharedService.getUrl + '/users/' + id, SharedService.getLoginHttpHeader)
    }


    /**
     * 修改用户信息
     * @param id
     * @param {Object} jsonData
     * @returns {Observable<Object>}
     */
    putUser(id, jsonData: Object): Observable<Object> {
        return this.http.put(SharedService.getUrl + '/users/' + id, jsonData, SharedService.getLoginHttpHeader);
    }


    /**
     * 通过主键删除用户
     * @param id
     * @returns {Observable<Object>}
     */
    deleteUser(id): Observable<Object> {
        return this.http.delete(SharedService.getUrl + '/users/' + id, SharedService.getLoginHttpHeader);
    }

}
