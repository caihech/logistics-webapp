import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ConsignmentNotesService} from './consignment-notes.service';
import {RolesService} from '../roles/roles.service';


@Component({
    selector: 'app-consignment-notes',
    templateUrl: './consignment-notes.component.html',
    styleUrls: ['./consignment-notes.component.css']
})
export class ConsignmentNotesComponent implements OnInit {


    consignmentTableDisplayedColumns: string[] = ['id', 'orderNumber', 'articleNumber', 'consignmentDate', 'shippersName', 'shippersPhone',
        'goodsName', 'weight', 'number', 'delete', 'edit'];
    // consignmentTableDataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;


    constructor(private consignmentNotesService: ConsignmentNotesService) {
    }

    ngOnInit() {
        this.httpGetConsignmentNotes();
        // console.info('aaa');
        // this.roleservice.getRoles().subscribe((res) => {
        //     console.info(res);
        // }, (error) => {
        //     console.info(error);
        // });
    }


    /**
     * 获取托运单信息
     */
    httpGetConsignmentNotes() {
        const _that = this;
        _that.consignmentNotesService.getConsignmentNotes().subscribe(
            function (res) {
                console.info(res);
                // _that.consignmentTableDataSource = new MatTableDataSource<Object>(res);
                // _that.consignmentTableDataSource.paginator = _that.paginator;
                // _that.consignmentTableDataSource.sort = _that.sort;
            }, function (error) {
                console.error(error);
            }
        );
    }

    /**
     * 编辑托运单id
     * @param {number} id
     */
    onEdit(id: number) {
        alert('编辑托运单' + id);
    }

    /**
     * 删除托运单
     * @param {number} id
     */
    onDelete(id: number) {
        alert('删除托运单' + id);
    }

}


export interface PeriodicElement {
    id: number;
    orderNumber: string;
    articleNumber: string;
    consignmentDate: string;
    shippersName: string;
    shippersPhone: string;
    goodsName: string;
    weight: string;
    number: string;
}
