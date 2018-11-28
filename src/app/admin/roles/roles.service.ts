import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {SharedService} from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})
export class RolesService {

    constructor(private http: HttpClient) {
    }


    /**
     * 获取角色集合
     * @returns {Observable<Object>}
     */
    getRoles(): Observable<any> {
        return this.http.get(SharedService.getUrl + '/role', SharedService.getLoginHttpHeader);
    }

}
