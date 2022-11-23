import { ISearchParam } from './../model/isearch-param';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { __values } from 'tslib';
import { HttpRequest, UriBuilder } from './http-requests';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractService<T> {
  http: HttpClient
  abstract endpoint: string;

  getToken(): string {
    const token = localStorage.getItem("auth")
    return token || ""
  }

  public static setToken(value: string) {
    localStorage.setItem("auth", value)
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

  constructor(http: HttpClient) {
    this.http = http;
  }
}
