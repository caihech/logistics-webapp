import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {SharedService} from '../shared/shared.service';

@Injectable({
    providedIn: 'root'
})
export class VehiclesService {

    constructor(private http: HttpClient) {
    }


    /**
     * 获取全部车次信息
     * @returns {Observable<any>}
     */
    getVehicles(): Observable<any> {
        return this.http.get(SharedService.getUrl + '/vehicle', SharedService.getLoginHttpHeader);
    }


    /**
     * 通过id查询车次详情
     * @param {number} id
     * @returns {Observable<Object>}
     */
    getVehiclesById(id): Observable<Object> {
        return this.http.get(SharedService.getUrl + '/vehicle/' + id, SharedService.getLoginHttpHeader)
    }

    /**
     * 添加车次
     * @param {Object} jsonData
     * @returns {Observable<Object>}
     */
    postVehicles(jsonData: Object): Observable<Object> {
        return this.http.post(SharedService.getUrl + '/vehicle', jsonData, SharedService.getLoginHttpHeader);
    }

    /**
     * 修改车次
     * @param {Object} jsonData
     * @returns {Observable<Object>}
     */
    putVehicles(id, jsonData: Object): Observable<Object> {
        return this.http.put(SharedService.getUrl + '/vehicle/' + id, jsonData, SharedService.getLoginHttpHeader);
    }


    /**
     * 修改车次 审核状态
     * @param {Object} jsonData
     * @returns {Observable<Object>}
     */
    putVehiclesValid(id, jsonData: Object): Observable<Object> {
        return this.http.put(SharedService.getUrl + '/vehicle/valid/' + id, jsonData, SharedService.getLoginHttpHeader);
    }

    /**
     * 通过主键删除车次
     * @param id
     * @returns {Observable<Object>}
     */
    deleteVehicles(id): Observable<Object> {
        return this.http.delete(SharedService.getUrl + '/vehicle/' + id, SharedService.getLoginHttpHeader);
    }


}
