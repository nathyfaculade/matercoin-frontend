import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseCadastroComponent } from './base-cadastro.component';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import {AutoCompleteModule} from 'primeng/autocomplete';



@NgModule({
  declarations: [BaseCadastroComponent],
  imports: [
    FormsModule,
    CommonModule,
    DividerModule
  ], exports:[BaseCadastroComponent]
})


export class BaseCadastroModule { }

