import { Component, Input, OnInit } from '@angular/core';
import { AbstractService } from 'src/app/service/abstract.service';

@Component({
    selector: 'app-base-lista',
    templateUrl: './base-lista.component.html',
    styleUrls: ['./base-lista.component.scss'],
})
export class BaseListaComponent<T, S extends AbstractService<T>>
    implements OnInit
{
    @Input()
    service!: S;

    @Input()
    objs: T[] = [];

    @Input()
    titulo: string  = "Matercoin";

    @Input()
    cols: any[] = []

    @Input()
    params = []


    editar() {}

    excluir() {}
    adicionar() {}

    carregar() {
        this.service.getAll(this.params).subscribe(lst => {
            this.objs = [...lst];
        })
    }

    constructor() {}

    ngOnInit(): void {
        this.carregar()
    }
}
