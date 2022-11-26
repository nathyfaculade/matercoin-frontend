import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { AbstractService } from './service/abstract.service';
import { UsuarioService } from './service/usuario.service';

export const spinner = (value) => {
    showSpinner = value;
};

export var showSpinner = false;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    constructor(
        private primengConfig: PrimeNGConfig,
        private route: ActivatedRoute,
        private service: UsuarioService
    ) {
        this.route.queryParams.subscribe((p) => {
            if (p['token']) {
                localStorage.setItem('auth', p['token']);
                console.log(localStorage.getItem('auth'));
            }
        });
        //AbstractService.setToken("abc123")
    }

    get spinner() {
        return showSpinner;
    }

    async getToken() {
        const p = await this.route.queryParams;
        console.log(p);
        if (p['token']) {
            localStorage.setItem('auth', p['token']);
            console.log(localStorage.getItem('auth'));
        }
        return localStorage.getItem('auth');
    }

    ngOnInit() {
        this.getToken().then((t) => {
            this.service.validateToken(t).subscribe((v) => {
                localStorage.setItem('id-usuario', v.userId);
                localStorage.setItem('username', v.username);
            });
        });

        this.primengConfig.ripple = true;
    }
}
