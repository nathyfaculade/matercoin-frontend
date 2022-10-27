import { Component, OnInit } from '@angular/core';
import { Movimentacao } from 'src/app/model/Movimentacao';
import { MovimentacaoService } from 'src/app/service/movimentacao.service';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss']
})

export class PaginaInicialComponent implements OnInit {

  transferencias = 0;
  professores = 0;
  alunos = 0;
  total = 0;

  movimentacoes: Movimentacao[] = [];

  constructor(private movimentacaoService: MovimentacaoService) { }

  ngOnInit(): void {
    this.movimentacaoService.getAll().subscribe((movs) => {
        this.movimentacoes = [...movs];
        console.log(movs);
    })
  }

}
