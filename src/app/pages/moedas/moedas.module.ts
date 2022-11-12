import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoedasListaComponent } from './moedas-lista/moedas-lista.component';
import { MoedasCadastrosComponent } from './moedas-cadastros/moedas-cadastros.component';
import { FormsModule } from '@angular/forms';
import { CofreMatercoinComponent } from './cofre-matercoin/cofre-matercoin.component';
import { BaseListaModule } from '../base-lista/base-lista.module';
import { CardModule } from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';



@NgModule({
  declarations: [
    MoedasListaComponent,
    MoedasCadastrosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BaseListaModule,
    CardModule,
    DropdownModule
  ]
})
export class MoedasModule { }
