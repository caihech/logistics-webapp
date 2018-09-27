import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    static getUrl = 'http://localhost:8081';

    constructor() {
    }
}
