import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Mater coins',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/'] },

                    { label: 'Cadastro de moedas', icon: 'pi pi-fw pi-dollar', routerLink: ['/cad-moedas'] },

                    { label: 'Cofre MaterCoin', icon: 'pi pi-fw pi-bitcoin', routerLink: ['/cofre-matercoin'] },

                    { label: 'Rastreio de Moedas', icon: 'pi pi-fw pi-map-marker', routerLink: ['/moedas-rastreio'] },

                    { label: 'Minhas movimentações', icon: 'pi pi-fw pi-chart-line', routerLink: ['/movimentos'] },

                    { label: 'Meus critérios', icon: 'pi pi-fw pi-list', routerLink: ['/usuario'] },

                    { label: 'Condições de troca', icon: 'pi pi-fw pi-ticket', routerLink: ['/usuario'] },

                    { label: 'Baixa semestral', icon: 'pi pi-fw pi-pencil', routerLink: ['/usuario'] },

                ]
            },


        ];
    }
}
