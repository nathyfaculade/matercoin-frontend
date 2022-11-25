import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { spinner } from 'src/app/app.component';
import { Moeda } from 'src/app/model/moeda';
import { MoedasService } from 'src/app/service/moedas.service';


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
        perdido: 'F',
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
        vencimento: new Date(2030, 12, 31),
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

    getLote() {
        this.service.getAll([{ paramName: 'nroSerie', paramValue: this._dadosLote.lote, compareType: "LIKE" }])
            .subscribe(list => {
                if (list) {
                    this.objs = [...list];
                }
            })
    }

    adicionarMoedas() {
        // if (!this.dadosLote.vencimento) {
        //     this.msg.add({
        //         severity: 'warn',
        //         summary: "Atenção",
        //         detail: "Vencimento é obrigatório!"
        //     })
        //     return;
        // }
        if (!this.dadosLote.fabricacao) {
            this.msg.add({
                severity: 'warn',
                summary: "Atenção",
                detail: "Fabricação é obrigatório!"
            })
            return;
        }
        if (!this.dadosLote.lote) {
            this.msg.add({
                severity: 'warn',
                summary: "Atenção",
                detail: "Lote é obrigatório!"
            })
            return;
        }
        const result = [];
        if (!this.objs) this.objs = [];
        for (let i = this.serieInicial; i <= this.serieFinal; i++) {
            if (this.objs.find(o => o.nroSerie == (this._dadosLote.lote + i))) {
                continue;
            }
            const moeda: Moeda = {
                id: (i * -1),
                nroSerie: this.dadosLote.lote + i,
                perdido: 'F',
                fabricacao: this.dadosLote.fabricacao,
                vencimento: this.dadosLote.vencimento,
                periodo: undefined,
                ativo: 'V',
                obs: '',
                usuario: { id: 1 },
                createdAt: undefined,
                updatedAt: undefined
            }
            result.push(moeda);
        }
        this.objs = [...this.objs, ...result]
    }

    excluirMoeda(val) {
        this.objs = [...this.objs.filter(o => o.id != val.id)];
    }

    salvar() {
        spinner(true)
        this.service.saveAll(this.objs).then((objs) => {
            console.log(objs);
            this.msg.add({
                severity: 'success',
                summary: "Atenção",
                detail: "Salvo com sucesso!"
            })
        }).catch((e) => {

        }).finally(() => {
            spinner(false)
        })
    }

    cancelar() {
        this.router.navigateByUrl('moedas')
    }

    constructor(private service: MoedasService,
        private router: Router, private msg: MessageService) { }

    ngOnInit(): void { 
        this.getLote();
    }
}
