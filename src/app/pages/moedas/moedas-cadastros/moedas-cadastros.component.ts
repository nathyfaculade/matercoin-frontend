import { Component, OnInit } from '@angular/core';
import { Moeda } from 'src/app/model/moeda';


@Component({
    selector: 'app-moedas-cadastros',
    templateUrl: './moedas-cadastros.component.html',
    styleUrls: ['./moedas-cadastros.component.scss'],
})
export class MoedasCadastrosComponent implements OnInit {
    transferencias = 0;
    professores = 0;
    alunos = 0;
    total = 0;


    moeda: Moeda[] = [];
    constructor() {}

    ngOnInit(): void {}
}
