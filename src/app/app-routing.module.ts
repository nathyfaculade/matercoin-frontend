import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { MoedasListaComponent } from './pages/moedas/moedas-lista/moedas-lista.component';
import { CofreMatercoinComponent } from './pages/moedas/cofre-matercoin/cofre-matercoin.component';
import { MoedasCadastrosComponent } from './pages/moedas/moedas-cadastros/moedas-cadastros.component';
import { MoedasRastreioComponent } from './pages/moedas/moedas-rastreio/moedas-rastreio.component';
import { MoedasTransferenciaComponent } from './pages/moedas/moedas-transferencia/moedas-transferencia.component';
import { MovimentosComponent } from './pages/moedas/movimentos/movimentos.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', component: PaginaInicialComponent },
                    //Cadastro de moedas
                    { path: 'moedas', component: MoedasListaComponent},
                    { path: 'cad-moedas', component: MoedasCadastrosComponent},
                    { path: 'cofre-matercoin', component: CofreMatercoinComponent},
                    { path: 'moedas-rastreio', component: MoedasRastreioComponent},
                    { path: 'movimentos', component: MovimentosComponent},
                    { path: 'moedas-transferencia', component: MoedasTransferenciaComponent},
                    { path: 'dash', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UikitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) },
                ],
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'pages/notfound', component: NotfoundComponent },
            { path: '**', redirectTo: 'pages/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
