import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse} from '@angular/common/http';

import {Observable, of, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {SharedService} from '../shared/shared.service';


@Injectable()
export class LoginService {

    constructor(private http: HttpClient) {
    }

    /**
     * 获取新的验证码
     * @returns {Observable<Object>}
     */
    getNewCode() {
        return this.http.get(SharedService.getUrl + '/login/code');
    }

    /**
     * 登录
     * @param {Object} jsonData
     * @returns {Observable<Object>}
     */
    postLogin(jsonData: Object): Observable<Object> {
        return this.http.post(SharedService.getUrl + '/login', jsonData, SharedService.getNotLoginHttpHeader);
    }
}
