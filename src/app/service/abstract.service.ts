import { ISearchParam } from './../model/isearch-param';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { __values } from 'tslib';
import { HttpRequest, UriBuilder } from './http-requests';

@Injectable({
    providedIn: 'root',
})
export abstract class AbstractService<T> {
    http: HttpClient;
    abstract endpoint: string;

    getToken(): string {
        const token = localStorage.getItem('auth');
        return token || '';
    }

    public static setToken(value: string) {
        localStorage.setItem('auth', value);
    }

    delete(id: number): Observable<any> {
        const url = environment.api + '/' + this.endpoint + '/' + id;

        const h = new HttpHeaders({
            Accept: 'application/json; charset=utf-8',
            auth: this.getToken(),
        });
        return this.http.delete<any>(url, { headers: h });
    }

    getAll(searchParams: ISearchParam[] = []): Observable<T[]> {
        const sp = { params: searchParams };
        return new HttpRequest<any[]>(this.http)
            .endpoint(`${this.endpoint}`)
            .uri(
                new UriBuilder()
                    .param('params', JSON.stringify(searchParams))
                    .build()
            )

            .doGet();
    }

    save(obj: T) {
        return new HttpRequest<any>(this.http)
            .endpoint(this.endpoint)
            .body(obj)
            .doPostBody();
    }

    saveP(obj): Promise<T> {
        return new Promise((resolve, reject) => {
            this.save(obj).subscribe(
                (ret) => {
                    resolve(ret);
                },
                (e) => {
                    reject(e);
                }
            );
        });
    }

    saveAll(objs: T[]): Promise<T[]> {
        const retorno = [];
        for (const o of objs) {
            retorno.push(this.saveP(o));
        }
        return Promise.all<T>(retorno);
    }

    constructor(http: HttpClient) {
        this.http = http;
    }
}
