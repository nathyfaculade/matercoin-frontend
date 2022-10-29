import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseListaComponent } from './base-lista.component';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [ BaseListaComponent],
  imports: [
    FormsModule,
    CommonModule,
    CardModule,
    TableModule
  ], exports: [ BaseListaComponent]
})
export class BaseListaModule {}
