import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LoginService {

    configUrl = 'http://localhost:8080/login/code';

    constructor(private http: HttpClient) {
    }

    getLogin() {
        return this.http.get(this.configUrl);
    }

}


/**
 * 数据库
 */
export interface Login {
    id: number;
    code: String;
    ip: String;
    username: String;
    address: String;
    client: String;
    token: String;
    tokenExpired: String;
    password: String;
    status: number;
}