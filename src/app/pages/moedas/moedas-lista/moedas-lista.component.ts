import { Component, OnInit } from '@angular/core';
import { Moeda } from 'src/app/model/moeda';
import { MoedasService } from 'src/app/service/moedas.service';

@Component({
    selector: 'app-moedas-lista',
    templateUrl: './moedas-lista.component.html',
    styleUrls: ['./moedas-lista.component.scss'],
})
export class MoedasListaComponent implements OnInit {
    titulo = 'Cadastro de moedas';
    objs: Moeda[] = [];
    cols = [
        { field: 'fabricacao', header: 'Data', type: 'date' },
        { field: 'nroSerie', header: 'Número de série', type: 'text' },
        { field: 'ativo', header: 'Situação', type: 'function' }, // TODO: implementar função para verificar se é perdido.
        { field: '', header: 'Ações', type: 'buttons' },
    ]

    constructor(public service: MoedasService) {}

    ngOnInit(): void {}
}
