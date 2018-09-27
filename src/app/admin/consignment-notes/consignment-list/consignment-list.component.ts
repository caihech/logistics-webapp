import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Http, Headers} from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {JsogService} from 'jsog-typescript';
import {map} from "rxjs/internal/operators";


@Component({
    selector: 'app-consignment-list',
    templateUrl: './consignment-list.component.html',
    styleUrls: ['./consignment-list.component.css']
})
export class ConsignmentListComponent implements OnInit {

    displayedColumns: string[] = ['id', 'consignmentNumber', 'consignmentDate', 'consignor', 'productName'];
    public ELEMENT_DATA: PeriodicElement[] = [];

    dataSource = new MatTableDataSource<PeriodicElement>();


    private headers = new Headers({
        'Authorization': 'Token ' + StorageService.getItem('token'),
        'Content-Type': 'application/json; charset=utf-8'
    });
    id;
    datas;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private http: Http, private router: ActivatedRoute, private jsog: JsogService) {

    }

    ngOnInit() {
        const that = this;
        that.dataSource.paginator = that.paginator;
        that.dataSource.sort = that.sort;
        that.router.params.subscribe(function (params) {
            that.id = params.id;
            that.getDatas();
        });


    }

    getDatas() {
        const that = this;
        this.http.get(CommonService.getUrl + '', {headers: that.headers})
            .pipe(map(res => res.json()))
            .subscribe(function (response) {
                that.datas = that.jsog.deserialize(response);

                for (let i = 0; i < that.datas.length; i++) {
                    const elements = new PeriodicElement();
                    elements.id = i;
                    elements.consignmentNumber = that.datas[i].consignmentNumber;
                    elements.constructor = that.datas[i].constructor;
                    elements.consignmentDate = that.datas[i].consignmentDate;
                    elements.productName = that.datas[i].productName;
                    that.ELEMENT_DATA[i] = elements;
                }
                that.dataSource = new MatTableDataSource<PeriodicElement>(that.ELEMENT_DATA);
                that.dataSource.paginator = that.paginator;
                that.dataSource.sort = that.sort;
            }, function (message) {
                console.error('error' + message);
            });
    }


    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}

export class PeriodicElement {
    id: string;
    consignmentNumber: string;
    consignor: string;
    productName: string;
    consignmentDate: null;
}
