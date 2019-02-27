import {Injectable} from '@angular/core';
import {SharedService} from '../../shared/shared.service';
import {Observable} from 'rxjs/index';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ConsignmentNotesService {

    constructor(private http: HttpClient) {
    }

    /**
     * 获取用户信息集合 需要登录
     * @returns {Observable<Object>}
     */
    getConsignmentNotes(): Observable<any> {
        return this.http.get(SharedService.getUrl + '/consignmentnote', SharedService.getLoginHttpHeader);
    }


    /**
     * 通过id查询详细信息
     * @param {number} id
     * @returns {Observable<Object>}
     */
    getConsignmentNoteById(id): Observable<Object> {
        return this.http.get(SharedService.getUrl + '/consignmentnote/' + id, SharedService.getLoginHttpHeader);
    }


    /**
     * 添加托运单
     * @param {Object} jsonData
     * @returns {Observable<Object>}
     */
    postConsignmentNotes(jsonData: Object): Observable<Object> {
        return this.http.post(SharedService.getUrl + '/consignmentnote', jsonData, SharedService.getLoginHttpHeader);
    }


    /**
     *put修改
     * @param {Object} jsonData
     * @returns {Observable<Object>}
     */
    putConsignmentNotes(id, jsonData: Object): Observable<Object> {
        return this.http.put(SharedService.getUrl + '/consignmentnote/', jsonData, SharedService.getLoginHttpHeader);
    }


    /**
     *put check status修改
     * @param {Object} jsonData
     * @returns {Observable<Object>}
     */
    putConsignmentNotesCheckStatus(id, jsonData: Object): Observable<Object> {
        return this.http.put(SharedService.getUrl + '/consignmentnote/checkstatus/', jsonData, SharedService.getLoginHttpHeader);
    }

    /**
     * delete 删除托运单
     * @param id
     * @returns {Observable<Object>}
     */
    deleteConsignmentNotes(id): Observable<Object> {
        return this.http.delete(SharedService.getUrl + '/consignmentnote/' + id, SharedService.getLoginHttpHeader);
    }

}

