import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Periodo } from '../model/periodo';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class PeriodoService extends AbstractService<Periodo>{

    endpoint: string = 'periodos';

    constructor(http: HttpClient) {
        super(http);
    }
}
