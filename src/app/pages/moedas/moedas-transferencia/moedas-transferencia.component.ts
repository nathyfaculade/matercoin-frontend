import { Component, OnInit } from '@angular/core';
import { Movimentacao } from 'src/app/model/Movimentacao';
import { Periodo } from 'src/app/model/periodo';
import { Usuario } from 'src/app/model/usuario';
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

    destinos: Usuario[] = [];

    constructor(
        private periodoService: PeriodoService,
        private usuarioService: UsuarioService
    ) {}

    ngOnInit(): void {
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
    }
}
