import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    /**
     * 全局变量
     */
    static getUrl = 'http://localhost:8087';

    /**
     * 获取没有登录 header
     * @type {{headers: HttpHeaders}}
     */
    static getNotLoginHttpHeader = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    /**
     * 获取登录模式 header
     * @type {{headers: HttpHeaders}}
     */
    static getLoginHttpHeader = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': SharedService.getAuthorizationToken()
        })
    };


    static getAuthorizationToken(): string {
        return 'Token ' + JSON.parse(localStorage.getItem('token'));
    }


    /**
     * 设置本地缓存
     */
    static setStorageItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    /**
     * 读取本地缓存
     */
    static getStorageItem(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    /**
     * 删除本地缓存
     * @param key
     */
    static removeStorageItem(key) {
        localStorage.removeItem(key);
    }

    constructor() {
    }
}
