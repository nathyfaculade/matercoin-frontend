import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movimentacao } from '../model/Movimentacao';
import { AbstractService } from './abstract.service';

@Injectable({
    providedIn: 'root',
})
export abstract class MovimentacaoService extends AbstractService<Movimentacao> {
    endpoint: string = 'movimentos';

    constructor(http: HttpClient) {
        super(http);
    }
}
