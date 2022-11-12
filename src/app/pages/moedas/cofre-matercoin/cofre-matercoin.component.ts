import { Component, OnInit } from '@angular/core';
import { Moeda } from 'src/app/model/moeda';
import { Periodo } from 'src/app/model/periodo';

@Component({
  selector: 'app-cofre-matercoin',
  templateUrl: './cofre-matercoin.component.html',
  styleUrls: ['./cofre-matercoin.component.scss']
})
export class CofreMatercoinComponent implements OnInit {
    transferencias = 0;
    professores = 0;
    alunos = 0;
    total = 0;
    descricao!: Periodo;

    moeda: Moeda[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
