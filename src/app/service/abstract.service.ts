import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractService<T> {
    http: HttpClient
    abstract endpoint: string;

    getToken(): string{
      const token = localStorage.getItem("token")
      return token || ""
    }

    public static setToken(value: string){
      localStorage.setItem("token", value)
    }

    getAll(): Observable<T[]> {
        const header = new HttpHeaders();
        header.append("token", this.getToken() )
        return this.http.get<T[]>(`${ environment.api }/${this.endpoint}`,  { headers: header })
    }

    constructor(http: HttpClient) {
        this.http = http;
     }
}
