import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConsignmentNotesService {

    constructor() {
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



