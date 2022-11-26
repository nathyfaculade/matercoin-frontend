import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';
import { AbstractService } from './abstract.service';
import { HttpRequest, UriBuilder } from './http-requests';

@Injectable({
    providedIn: 'root',
})
export class UsuarioService extends AbstractService<Usuario> {
    endpoint: string = 'usuarios';

    validateToken(token = ''): Observable<any> {
        return new HttpRequest<any>(this.http)
            .endpoint(`localiza`)
            .uri(new UriBuilder().param('token', token).build())

            .doGet();
    }

    constructor(http: HttpClient) {
        super(http);
    }
}
