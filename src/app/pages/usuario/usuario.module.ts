import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriteriosComponent } from './criterios/criterios.component';
import { CondicoesTrocaComponent } from './condicoes-troca/condicoes-troca.component';
import { FormsModule } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { TimelineModule } from 'primeng/timeline';
import { ToastModule } from 'primeng/toast';

@NgModule({
    declarations: [CriteriosComponent, CondicoesTrocaComponent],
    imports: [
        CommonModule,
        FormsModule,
        CardModule,
        DropdownModule,
        CalendarModule,
        InputTextModule,
        InputNumberModule,
        CheckboxModule,
        ButtonModule,
        TableModule,
        ToastModule,
        MessagesModule,
        ConfirmDialogModule,
        TimelineModule,
    ],
    providers: [MessageService, ConfirmationService],
})
export class UsuarioModule {}
