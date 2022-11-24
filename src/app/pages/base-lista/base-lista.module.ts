import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseListaComponent } from './base-lista.component';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';




@NgModule({
  declarations: [ BaseListaComponent],
  imports: [
    FormsModule,
    CommonModule,
    CardModule,
    TableModule,
    ButtonModule,
    DropdownModule
  ], exports: [ BaseListaComponent]
})
export class BaseListaModule {}
