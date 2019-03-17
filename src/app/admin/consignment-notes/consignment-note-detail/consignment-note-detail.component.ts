import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ConsignmentNotesService} from '../consignment-notes.service';
import {ActivatedRoute, Router} from '@angular/router';
import {debounceTime} from 'rxjs/internal/operators';
import {ConsignmentNoteAuditComponent} from '../consignment-note-audit/consignment-note-audit.component';
import {MatDialog} from '@angular/material';

@Component({
    selector: 'app-consignment-note-detail',
    templateUrl: './consignment-note-detail.component.html',
    styleUrls: ['./consignment-note-detail.component.css']
})
export class ConsignmentNoteDetailComponent implements OnInit {

    ordersFormModel: FormGroup;

    constructor(fb: FormBuilder, private  consignmentNotesService: ConsignmentNotesService, private router: Router, private route: ActivatedRoute, private dialog: MatDialog) {

        this.ordersFormModel = fb.group({
            id: [],
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
        const id = this.route.snapshot.paramMap.get('id');
        this.initWebDataBy(id);
    }


    /**
     * 初始化页面数据
     */
    initWebDataBy(id) {

        const _that = this;

        _that.consignmentNotesService.getConsignmentNoteById(id).subscribe((res) => {

            _that.ordersFormModel.patchValue({
                id: res['id'],
                orderNumber: res['orderNumber'],
                station: res['station'],
                articleNumber: res['articleNumber'],
                consignmentDate: _that.getDateFromat(res['consignmentDate']),
                goodsAddress: res['goodsAddress'],
                shippersName: res['shippersName'],
                shippersPhone: res['shippersPhone'],
                consigneeName: res['consigneeName'],
                consigneePhone: res['consigneePhone'],
                goodsName: res['goodsName'],
                packaging: res['packaging'],
                weight: res['weight'],
                volume: res['volume'],
                number: res['number'],
                insurance: res['insurance'],
                premium: res['premium'],
                monthlyStatement: res['monthlyStatement'],
                receiptPayment: res['receiptPayment'],
                cashPayment: res['cashPayment'],
                extractPayment: res['extractPayment'],
                shortHaulFreight: res['shortHaulFreight'],
                amount: res['amount'],
                collectionOnDelivery: res['collectionOnDelivery'],
                deliveryAddress: res['deliveryAddress'],
                remark: res['remark'],
                printCount: res['printCount'],
                consignee: res['consignee'],
                idCard: res['idCard'],
                consignor: res['consignor'],

                // private User user;
                // private Vehicle vehicle;

                checkStatus: res['checkStatus'],
                checkUsername: res['checkUsername'],
                checkDate: res['checkDate'],
                checkMessage: res['checkMessage']

            });


        });


        // 保费计算
        _that.ordersFormModel.controls['insurance'].valueChanges.pipe(
            debounceTime(500)
        ).subscribe(
            value => {
                _that.ordersFormModel.patchValue({
                    premium: value * 0.005
                });
            }
        );

        //  合计计算  不可编辑 计算公式:保费+月结+回单付+现金+提付+短途运费+代收货款
        _that.ordersFormModel.valueChanges.pipe(
            debounceTime(500)
        ).subscribe(from => {
            const SUM = (from.premium + from.monthlyStatement + from.receiptPayment +
                from.cashPayment + from.extractPayment + from.shortHaulFreight + from.collectionOnDelivery);
            _that.ordersFormModel.patchValue({
                amount: SUM
            });
        });

    }

    getDateFromat(timeStamp) {
        let dataTime = '';
        if (timeStamp) {
            var tempDate = new Date(timeStamp);
            let year = tempDate.getFullYear();
            let month = tempDate.getMonth() + 1;
            let M1 = '';
            if (month >= 10) {
                M1 = month.toString();
            } else {
                M1 = '0' + month;
            }
            let day = tempDate.getDate();
            let D1 = '';
            if (day >= 10) {
                D1 = day.toString();
            } else {
                D1 = '0' + day;
            }
            dataTime = year + '-' + M1 + '-' + D1;
        }
        return dataTime;
    }


    /**
     * 提交表单
     */
    onSubmitUpdateForm() {
        const _that = this;
        console.info(this.ordersFormModel.value);
        if (this.ordersFormModel.valid) {
            _that.consignmentNotesService.putConsignmentNotes(
                _that.ordersFormModel.value.id, _that.ordersFormModel.value).subscribe((res) => {
                alert('更新成功1');
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
            console.info('faile');
        }
    }

    onAudit(): void {
        console.info('audit');

        const dialogRef = this.dialog.open(ConsignmentNoteAuditComponent, {
            width: '400px',
            height: '330px',
            disableClose: true,
            data: {id: 0}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed.' + result);
        });

    }
}
