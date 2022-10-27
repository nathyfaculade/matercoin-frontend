import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseCadastroComponent } from './base-cadastro.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [BaseCadastroComponent],
  imports: [
    FormsModule,
    CommonModule
  ], exports:[BaseCadastroComponent]
})
export class BaseCadastroModule { }

