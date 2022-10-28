import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseCadastroComponent } from './base-cadastro.component';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';



@NgModule({
  declarations: [BaseCadastroComponent],
  imports: [
    FormsModule,
    CommonModule,
    DividerModule
  ], exports:[BaseCadastroComponent]
})
export class BaseCadastroModule { }

