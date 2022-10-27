import { Component, Input, OnInit } from '@angular/core';
import { AbstractService } from 'src/app/service/abstract.service';

@Component({
  selector: 'app-base-lista',
  templateUrl: './base-lista.component.html',
  styleUrls: ['./base-lista.component.scss']
})
export class BaseListaComponent<T, S extends AbstractService<T>> implements OnInit {

    @Input()
    service: S | undefined;

    @Input()
    obj: S | undefined;

    @Input()
    titulo: S | undefined;

    @Input()
    editar: S | undefined;

    @Input()
    excluir: S | undefined;

    @Input()
    adicionar: S | undefined;

    @Input()
    caregar: S | undefined;


  constructor() { }

  ngOnInit(): void {
  }

}
