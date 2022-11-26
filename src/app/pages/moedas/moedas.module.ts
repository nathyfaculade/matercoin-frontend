import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoedasListaComponent } from './moedas-lista/moedas-lista.component';
import { MoedasCadastrosComponent } from './moedas-cadastros/moedas-cadastros.component';
import { FormsModule } from '@angular/forms';
import { CofreMatercoinComponent } from './cofre-matercoin/cofre-matercoin.component';
import { BaseListaModule } from '../base-lista/base-lista.module';
import { CardModule } from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [
    MoedasListaComponent,
    MoedasCadastrosComponent,
    CofreMatercoinComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BaseListaModule,
    CardModule,
    DropdownModule,
    CalendarModule,
    InputTextModule,
    InputNumberModule,
    CheckboxModule,
    ButtonModule,
    TableModule,
    ToastModule,
    MessagesModule
  ],
  providers:[MessageService]
})
export class MoedasModule { }
