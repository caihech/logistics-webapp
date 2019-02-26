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

}


export class ConsignmentNote {
    private id: number;
    // 订单编号 ，8位 ，唯一约束 ，必填
    private orderNumber: number;
    // 站点 必填 40
    private station: string;
    // 货号 必填 20
    private articleNumber: string;
    // 托运日期 必填
    private consignmentDate: number;
    // 托运人姓名 必填 10
    private shippersName: string;
    // 托运人电话  必填 15
    private shippersPhone: string;
    // 收货人姓名 必填 10
    private consigneeName: string;
    // 收货人电话 必填 15
    private consigneePhone: number;
    // 货物名称 必填 80
    private goodsName: string;
    // 包装 1000
    private packaging: String;
    // 重量  必填 0.000 BigDecimal
    private weight: number;
    // 体积  必填 0.000 BigDecimal
    private volume: number;
    // 件数 必填
    private number: number;
    // 保险 18.2 BigDecimal
    private insurance: number;
    // 保费  = 保险 * 0.005 计算得到
    private premium: number;
    // 月结 18.2 BigDecimal
    private monthlyStatement: number;
    // 回单付 0.00 BigDecimal
    private receiptPayment: number;
    // 现金付款 0.00 BigDecimal
    private cashPayment: number;
    // 提付 0.00 BigDecimal
    private extractPayment: number;
    // 短途运费 0.00 BigDecimal
    private shortHaulFreight: number;
    // 合计  = 计算  保费+月结+回单付+现金+提付+短途运费+代收货款 0.00
    private amount: number;
    // 代收货款 0.00 BigDecimal
    private collectionOnDelivery: number;
    // 送货地址  80
    private deliveryAddress: string;
    // 备注 500
    private remark: string;
    // 打印次数
    private printCount: number;

    // private Use  user;
    // private ConsignmentNoteStatus consignmentNoteStatus;
    // private Vehicle vehicle;

}
