import { Component, Input, OnInit } from '@angular/core';
import { AbstractService } from 'src/app/service/abstract.service';

@Component({
  selector: 'app-base-cadastro',
  templateUrl: './base-cadastro.component.html',
  styleUrls: ['./base-cadastro.component.scss']
})
export class BaseCadastroComponent<T, S extends AbstractService<T>> implements OnInit {

    @Input()
    service: S | undefined;

    @Input()
    titulo: S | undefined;

    @Input()
    obj: S | undefined;

    @Input()
    salvar: S | undefined;

    @Input()
    cancelar: S | undefined;


  constructor() { }

  ngOnInit(): void {
  }

}
