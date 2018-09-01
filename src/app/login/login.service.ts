import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';

import {Observable, of, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';


@Injectable()
export class LoginService {

    configUrl = 'http://localhost:8080/login/code';

    constructor(private http: HttpClient) {
    }

    /**
     * 获取验证
     * @returns {Observable<HttpResponse<Login>>}
     */
    getLoginCode(): Observable<HttpResponse<Login>> {
        return this.http.get<Login>(
            this.configUrl, {observe: 'response'})
            .pipe(
                catchError(this.handleError)
            );
    }


    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    };

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