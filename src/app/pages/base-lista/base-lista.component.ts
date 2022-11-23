import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

    @Input()
    urlCad = "";

    editar() {}

    excluir() {}
    adicionar() {
        this.router.navigate([this.urlCad]);
    }

    carregar() {
        this.service.getAll(this.params).subscribe(lst => {
            this.objs = [...lst];
        })
    }

    constructor(
        private router: Router
    ) {}

    ngOnInit(): void {
        this.carregar()
    }
}
