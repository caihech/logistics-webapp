import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ConsignmentNotesService} from './consignment-notes.service';


@Component({
    selector: 'app-consignment-notes',
    templateUrl: './consignment-notes.component.html',
    styleUrls: ['./consignment-notes.component.css']
})
export class ConsignmentNotesComponent implements OnInit {


    consignmentTableDisplayedColumns: string[] = ['id', 'orderNumber', 'articleNumber', 'consignmentDate', 'shippersName', 'shippersPhone',
        'goodsName', 'weight', 'number', 'delete', 'edit'];
    consignmentTableDataSource;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;


    constructor(private consignmentNotesService: ConsignmentNotesService) {
    }


    ngOnInit() {
        this.httpGetConsignmentNotes();
    }


    /**
     * 获取托运单信息
     */
    httpGetConsignmentNotes() {
        var _that = this;
        _that.consignmentNotesService.getConsignmentNotes().subscribe(
            function (res) {
                _that.consignmentTableDataSource = new MatTableDataSource<Object>(res);
                _that.consignmentTableDataSource.paginator = _that.paginator;
                _that.consignmentTableDataSource.sort = _that.sort;
            }, function (error) {
                console.error(error);
            }
        );
    }

    /**
     * 删除托运单
     * @param {number} id
     */
    onDelete(id: number) {
        var _that = this;
        if (confirm('确认要删除？')) {
            _that.consignmentNotesService.deleteConsignmentNotes(id).subscribe(
                success => {
                    _that.httpGetConsignmentNotes();
                }, faile => {
                    console.error(faile);
                }
            );
        }
    }

}