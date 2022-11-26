import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { PaginaInicialModule } from './pages/pagina-inicial/pagina-inicial.module';
import { BaseListaComponent } from './pages/base-lista/base-lista.component';
import { BaseCadastroComponent } from './pages/base-cadastro/base-cadastro.component';
import { MoedasModule } from './pages/moedas/moedas.module';
import { CofreMatercoinComponent } from './pages/moedas/cofre-matercoin/cofre-matercoin.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        PaginaInicialModule,
        MoedasModule,
        CommonModule,
        BrowserModule,
        NgxSpinnerModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
