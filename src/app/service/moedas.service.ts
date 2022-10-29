import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Moeda } from '../model/moeda';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class MoedasService extends AbstractService<Moeda>{

    endpoint: string = 'moedas';

    constructor(http: HttpClient) {
        super(http);
    }
}
