import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ConsignmentNotesService} from '../consignment-notes.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-consignment-note-add',
    templateUrl: './consignment-note-add.component.html',
    styleUrls: ['./consignment-note-add.component.css']
})
export class ConsignmentNoteAddComponent implements OnInit {

    ordersFormModel: FormGroup;

    constructor(fb: FormBuilder, private  consignmentNotesService: ConsignmentNotesService, private router: Router) {

        this.ordersFormModel = fb.group({
            // 订单编号 8位 唯一 必填
            orderNumber: [],
            // 站点 必填 40字节
            station: [],
            // 货号 必填 20 字节
            articleNumber: [],
            // 托运日期 必填 日期
            consignmentDate: [],
            // 到货地址
            goodsAddress: [],
            // 托运人 姓名 必填 10字节
            shippersName: [],
            // 托运人 电话 必填 15字节
            shippersPhone: [],
            // 收货人 姓名 必填 10字节
            consigneeName: [],
            // 收货人 电话 必填 15字节
            consigneePhone: [],

            // 货物名称 必填 80 字节
            goodsName: [],
            // 包装 100
            packaging: [],
            // 重量 必填 0.000
            weight: [],
            // 体积 必填 0.000
            volume: [],
            // 件数 必填 int
            number: [],
            // 保险 必填  0.00
            insurance: [],
            // 保费= 保险*0.005   不可编辑
            premium: [],
            // 月结 不可编辑 公式计算：
            monthlyStatement: [],
            // 回单付 0.00
            receiptPayment: [],
            // 现金付 0.00
            cashPayment: [],
            // 提付 必填 0.00
            extractPayment: [],
            // 短途运费
            shortHaulFreight: [],
            // 代收货款 0.00
            collectionOnDelivery: [],
            // 合计 不可编辑 计算公式:保费+月结+回单付+现金+提付+短途运费+代收货款
            amount: [],
            // 送货地址 80 字节
            deliveryAddress: [],
            // remark
            remark: [],
            // 打印次数
            printCount: [],
            // 提货人
            consignee: [],
            // 身份证
            idCard: [],
            // 发货人
            consignor: []

        });

    }

    ngOnInit() {
        this.initWebData();
    }


    /**
     * 初始化页面数据
     */
    initWebData() {

        var _that = this;
        this.ordersFormModel.patchValue({
            orderNumber: '',
            weight: 0.000,
            volume: 0.00,
            number: 0,
            insurance: 0.00,
            premium: 0.00,
            monthlyStatement: 0.00,
            receiptPayment: 0.00,
            cashPayment: 0.00,
            extractPayment: 0.00,
            shortHaulFreight: 0.00,
            collectionOnDelivery: 0.00,
            // 合计 不可编辑 计算公式:保费+月结+回单付+现金+提付+短途运费+代收货款
            amount: 0.00,
            printCount: 0
        });
    }

    /**
     * 提交表单
     */
    onSubmitForm() {
        var _that = this;
        console.info(this.ordersFormModel.value);
        if (this.ordersFormModel.valid) {
            _that.consignmentNotesService.postConsignmentNotes(this.ordersFormModel.value).subscribe((res) => {
                alert('添加成功');
                _that.router.navigate(['/admin/consignmentnotes']);
            }, (error) => {
                if (error['status'] === 400) {
                    alert('数据格式错误');
                } else if (error['status'] === 401) {
                    alert('Token已过期');
                } else if (error['status'] === 500) {
                    alert('服务器异常');
                } else {
                    alert('其他错误状态码' + error['status']);
                }
            });
        } else {
            console.info("faile");
        }
    }

    /**
     * 清空表单
     */
    onResetForm() {
    }

}
