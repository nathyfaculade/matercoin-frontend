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
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/'] },

                    { label: 'Cofre MaterCoin', icon: 'pi pi-fw pi-bitcoin', routerLink: ['/cofre-matercoin'] },

                    { label: 'Rastreio de Moedas', icon: 'pi pi-fw pi-list', routerLink: ['/movimentacao'] },

                    { label: 'Critérios de aquisição', icon: 'pi pi-fw pi-list', routerLink: ['/usuario'] },

                    { label: 'Condições de troca', icon: 'pi pi-fw pi-ticket', routerLink: ['/usuario'] },

                    { label: 'Baixa semestral', icon: 'pi pi-fw pi-list', routerLink: ['/usuario'] },

                ]
            },


        ];
    }
}
