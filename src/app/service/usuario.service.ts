import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends AbstractService<Usuario>{

    endpoint: string = 'usuarios';

    constructor(http: HttpClient) {
        super(http);
    }
}
