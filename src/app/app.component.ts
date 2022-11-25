import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AbstractService } from './service/abstract.service';

export const spinner = (value) => {
    showSpinner = value;
}

export var showSpinner = false;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    constructor(private primengConfig: PrimeNGConfig) {
        //AbstractService.setToken("abc123")
    }

    get spinner() {
        return showSpinner;
    }

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
