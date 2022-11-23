import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AbstractService } from './service/abstract.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    constructor(private primengConfig: PrimeNGConfig) {
        //AbstractService.setToken("abc123")
    }

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
