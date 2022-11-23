import { Component, OnInit } from '@angular/core';
import { Moeda } from 'src/app/model/moeda';


@Component({
    selector: 'app-moedas-cadastros',
    templateUrl: './moedas-cadastros.component.html',
    styleUrls: ['./moedas-cadastros.component.scss'],
})
export class MoedasCadastrosComponent implements OnInit {
    // transferencias = 0;
    // professores = 0;
    // alunos = 0;
    // total = 0;


    // moeda: Moeda[] = [];

    _dadosLote: Moeda = {
        id: 0,
        nroSerie: '',
        perdido: '',
        fabricacao: new Date(),
        vencimento: undefined,
        periodo: undefined,
        ativo: 'V',
        obs: '',
        usuario: undefined,
        createdAt: undefined,
        updatedAt: undefined,
        lote: 'A'
    };

    get dadosLote() {
        return this._dadosLote;
    }

    set dadosLote(val) {
        this._dadosLote = val;
    }

    obj: Moeda = {
        id: 0,
        nroSerie: '',
        perdido: '',
        fabricacao: new Date(),
        vencimento: undefined,
        periodo: undefined,
        ativo: 'V',
        obs: '',
        usuario: undefined,
        createdAt: undefined,
        updatedAt: undefined,
        lote: ''
    };
    constructor() { }

    ngOnInit(): void { }
}
