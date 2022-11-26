import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { spinner } from 'src/app/app.component';
import { Moeda } from 'src/app/model/moeda';
import { Movimentacao } from 'src/app/model/Movimentacao';
import { Periodo } from 'src/app/model/periodo';
import { Usuario } from 'src/app/model/usuario';
import { MoedasService } from 'src/app/service/moedas.service';
import { MovimentacaoService } from 'src/app/service/movimentacao.service';
import { PeriodoService } from 'src/app/service/periodo.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
    selector: 'app-moedas-transferencia',
    templateUrl: './moedas-transferencia.component.html',
    styleUrls: ['./moedas-transferencia.component.scss'],
})
export class MoedasTransferenciaComponent implements OnInit {
    obj: Movimentacao = {
        id: 0,
        transferencia: new Date(),
        moeda: undefined,
        origem: undefined,
        destino: undefined,
        periodo: null,
    };

    periodos: Periodo[] = [];
    tiposDestino: string[] = ['Professor', 'Aluno', 'Coordenador'];
    tipoDestino = 'Professor';
    moedas: Moeda[] = [];
    destinos: Usuario[] = [];

    constructor(
        private periodoService: PeriodoService,
        private usuarioService: UsuarioService,
        private moedaService: MoedasService,
        private movimentacaoService: MovimentacaoService,
        private router: Router,
        private msg: MessageService
    ) {}

    ngOnInit(): void {
        this.obj.origem = this.moedaService.getUsuarioAtivo();
        this.periodoService.getAll([]).subscribe({
            next: (v) => {
                if (v) {
                    this.periodos = v;
                }
            },
        });
        this.usuarioService.getAll([]).subscribe({
            next: (v) => {
                if (v) {
                    this.destinos = v;
                }
            },
        });
        this.moedaService.getAll([]).subscribe({
            next: (v) => {
                if (v) {
                    this.moedas = v;
                }
            },
        });
    }

    cancelar() {
        this.router.navigateByUrl('cofre-matercoin');
    }

    salvar() {
        spinner(true);
        this.movimentacaoService.save(this.obj).subscribe({
            next: (ret) => {
                this.msg.add({
                    severity: 'success',
                    summary: 'Transferência de MaterCoin',
                    detail: 'Transferência realizada com sucesso!'
                })

                spinner(false);
                this.router.navigateByUrl('cofre-matercoin');

            },
            error: (error) => {
                this.msg.add({
                    severity: 'error',
                    summary: 'Erro!',
                    detail: error.message
                })
                spinner(false);
            },
            complete: () => {
                spinner(false);
            },
        });
    }
}
