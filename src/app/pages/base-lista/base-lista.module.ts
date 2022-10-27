import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseListaComponent } from './base-lista.component';



@NgModule({
  declarations: [ BaseListaComponent],
  imports: [
    FormsModule,
    CommonModule
  ], exports: [ BaseListaComponent]
})
export class BaseListaModule {}
