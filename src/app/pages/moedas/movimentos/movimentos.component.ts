import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Moeda } from 'src/app/model/moeda';
import { Movimentacao } from 'src/app/model/Movimentacao';
import { MoedasService } from 'src/app/service/moedas.service';
import { MovimentacaoService } from 'src/app/service/movimentacao.service';

@Component({
    selector: 'app-movimentos',
    templateUrl: './movimentos.component.html',
    styleUrls: ['./movimentos.component.scss'],
})
export class MovimentosComponent implements OnInit {
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
        this.getMovs();
    }

    get usuarioAtivo() {
        return this.moedaService.getIdUsuarioAtivo();
    }

    getMovs() {
        this.movimentacaoService
            .getAll([
                {
                    paramName: 'destino.id',
                    paramValue: this.moedaService.getIdUsuarioAtivo(),
                    compareType: 'EQUAL',
                },
            ])
            .subscribe({
                next: (mov1) => {
                    if (!mov1) {
                        mov1 = [];
                    }
                    this.movimentacaoService
                        .getAll([
                            {
                                paramName: 'origem.id',
                                paramValue:
                                    this.moedaService.getIdUsuarioAtivo(),
                                compareType: 'EQUAL',
                            },
                        ])
                        .subscribe({
                            next: (mov2) => {
                                if (!mov2) {
                                    mov2 = [];
                                }
                                this.movimentos = [...mov1, ...mov2].sort(
                                    (a, b) => {
                                        return a.id - b.id;
                                    }
                                );
                            },
                        });
                },
            });
    }
}
