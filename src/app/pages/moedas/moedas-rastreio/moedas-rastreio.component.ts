import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Moeda } from 'src/app/model/moeda';
import { Movimentacao } from 'src/app/model/Movimentacao';
import { MoedasService } from 'src/app/service/moedas.service';
import { MovimentacaoService } from 'src/app/service/movimentacao.service';

@Component({
    selector: 'app-moedas-rastreio',
    templateUrl: './moedas-rastreio.component.html',
    styleUrls: ['./moedas-rastreio.component.scss'],
})
export class MoedasRastreioComponent implements OnInit {
    moedas: Moeda[] = [];
    moeda: Moeda;
    movimentos: Movimentacao[] = [];
    constructor(
        private moedaService: MoedasService,
        private movimentacaoService: MovimentacaoService,
        private router: Router,
        private msg: MessageService
    ) {}

    ngOnInit(): void {
        this.moedaService.getAll([]).subscribe({
            next: (v) => {
                if (v) {
                    this.moedas = v;
                    this.changeMoeda({value: this.moedas[0]})
                }
            },
        });
    }

    changeMoeda(event) {
        this.moeda = event.value;
        this.movimentacaoService
            .getAll([
                {
                    paramName: 'moeda.id',
                    paramValue: this.moeda.id,
                    compareType: 'EQUAL',
                },
            ])
            .subscribe({
                next: (mov) => {
                    if (mov) {
                        this.movimentos = mov;
                    }
                },
            });
    }
}
