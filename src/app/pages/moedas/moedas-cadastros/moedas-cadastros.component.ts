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

    objs: Moeda[] = [];

    serieInicial: number = 0;
    serieFinal: number = 10;
    
    adicionarMoedas() {
        const result = [];
        for (let i = this.serieInicial; i <= this.serieFinal; i++) {
            const moeda: Moeda = {
                id: (i*-1),
                nroSerie: this.dadosLote.lote + i,
                perdido: 'F',
                fabricacao: this.dadosLote.fabricacao,
                vencimento: undefined,
                periodo: undefined,
                ativo: 'V',
                obs: '',
                usuario: undefined,
                createdAt: undefined,
                updatedAt: undefined
            }
            result.push(moeda);
        }
        this.objs = [...result]
    }

    excluirMoeda(val) {
        this.objs = [...this.objs.filter(o => o.id != val.id)];
    }

    constructor() { }
    
    ngOnInit(): void { }
}
