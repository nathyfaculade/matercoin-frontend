import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface IUriBuilder {
    subpath(subpath: string): IUriBuilder;
    param(aparam: string, avalue: string): IUriBuilder;
    build(): string;
}

export interface IHttpRequest<T> {
    endpoint(endpoint: string): IHttpRequest<T>;
    uri(uri: string): IHttpRequest<T>;
    header(header: string, value: string): IHttpRequest<T>;
    param(param: string, value: string): IHttpRequest<T>;
    body(val: T): IHttpRequest<T>
    doGet(): Observable<T>;
    doPost(): Observable<T>;
    doPostBody(): Observable<T>;
    doPut(): Observable<T>;
    doDelete(): Observable<T>;
}


export class HttpRequest<T> implements IHttpRequest<T> {
    private _endpoint!: string;
    private _uri!: string;
    private _headers: { name: string, value: string }[] = [];
    private _params: { name: string, value: string }[] = [];
    private _body: T;

    constructor(private http: HttpClient) {

    }

    endpoint(endpoint: string): IHttpRequest<T> {
        this._endpoint = endpoint;
        return this;
    }
    uri(uri: string): IHttpRequest<T> {
        this._uri = uri;
        return this;
    }
    header(header: string, value: string): IHttpRequest<T> {
        this._headers.push({ name: header, value: value });
        return this;
    }
    param(param: string, value: string): IHttpRequest<T> {
        this._params.push({ name: param, value: value });
        return this;
    }

    getToken(): string {
        const token = localStorage.getItem("auth")
        return token || ""
      }

    private headers(): HttpHeaders {
        let headers = new HttpHeaders(
            {
                'Accept': 'application/json; charset=utf-8',
                'auth': this.getToken()
            }
        );
        for (let i = 0; i < this._headers.length; i++) {
            headers = headers.append(this._headers[i].name, this._headers[i].value);
        }
        return headers;
    }

    body(val: T): IHttpRequest<T> {
        this._body = val;
        return this
    }


    private params(): URLSearchParams {
        let params = new URLSearchParams();
        for (let i = 0; i < this._params.length; i++) {
            params.append(this._params[i].name, this._params[i].value);
        }
        return params;
    }

    private fullUrl() {
        let url = environment.api + '/' + this._endpoint;
        if (this._uri != null && this._uri != undefined) {
            if (!this._uri.startsWith('/')) {
                url += '/';
            }
            url += this._uri;
        }
        return url;
    }

    doGet(): Observable<T> {
        let uri = this.fullUrl();
        let params: string = this.params().toString();
        if (params !== '') {
            uri += '?' + params;
        }
        return this.http.get<T>(uri, { headers: this.headers() });
    }
    doPost(): Observable<T> {
        let h = this.headers();
        if (!h.has('Content-Type')) {
            h = h.append('Content-Type', 'application/x-www-form-urlencoded');
        }

        return this.http.post<T>(this.fullUrl(), this.params().toString(), { headers: h });
    }

    doPostBody(): Observable<T> {
        let h = this.headers();
        // if (!h.has('Content-Type')) {
        //     h = h.append('Content-Type', 'application/x-www-form-urlencoded');
        // }

        return this.http.post<T>(this.fullUrl(), this._body, { headers: h });
    }

    
    doPut(): Observable<T> {
        let h = this.headers();
        if (!h.has('Content-Type')) {
            h = h.append('Content-Type', 'application/x-www-form-urlencoded');
        }
        return this.http.put<T>(this.fullUrl(), this.params().toString(), { headers: h });
    }
    doDelete(): Observable<T> {
        return this.http.delete<T>(this.fullUrl(), { headers: this.headers() });
    }
}

export class UriBuilder implements IUriBuilder {
    private _subpaths: string[] = [];
    private _params: { param: string, value: string }[] = [];

    subpath(subpath: string): IUriBuilder {
        this._subpaths.push(subpath);
        return this;
    }
    param(aparam: string, avalue: string): IUriBuilder {
        this._params.push({ param: aparam, value: avalue });
        return this;
    }
    build(): string {
        let uri: string = '/';
        for (let i = 0; i < this._subpaths.length; i++) {
            uri += this._subpaths[i];
            if (i < this._subpaths.length - 1) {
                uri += '/';
            }
        }
        if (this._params.length > 0) {
            uri += '?';
            for (let i = 0; i < this._params.length; i++) {
                uri += this._params[i].param + '=' + encodeURIComponent(this._params[i].value);
                if (i < this._params.length - 1) {
                    uri += '&';
                }
            }
        }
        return uri;
    }

}