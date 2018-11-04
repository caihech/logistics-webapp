import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {SharedService} from '../../shared/shared.service';

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


    putPassword() {

    }

    /**
     * 更新当前用户密码
     * @param {Object} jsonData
     * @returns {Observable<Object>}
     */
    putCurrentUserPassword(jsonData: Object): Observable<Object> {
        return this.http.put(SharedService.getUrl + '/users/password', jsonData, SharedService.getLoginHttpHeader);
    }
}
