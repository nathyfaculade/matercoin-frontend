import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInicialComponent } from './pagina-inicial.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PaginaInicialComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PaginaInicialModule { }
