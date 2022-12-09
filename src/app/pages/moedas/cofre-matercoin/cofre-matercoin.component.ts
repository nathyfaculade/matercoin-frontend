import { Component, OnInit } from '@angular/core';
import { Moeda } from 'src/app/model/moeda';
import { Periodo } from 'src/app/model/periodo';
import { Usuario } from 'src/app/model/usuario';
import {ButtonModule} from 'primeng/button';
import { Router } from '@angular/router';
import { MoedasService } from 'src/app/service/moedas.service';

@Component({
    selector: 'app-cofre-matercoin',
    templateUrl: './cofre-matercoin.component.html',
    styleUrls: ['./cofre-matercoin.component.scss'],
})
export class CofreMatercoinComponent implements OnInit {
    transferencias = 0;
    professores = 0;
    alunos = 0;
    total = 0;
    descricao!: Periodo;
    periodos: Periodo[] = [{
        id: 0,
        descricao: 'Minhas moedas',
    }];


    usuarios: Usuario[] = [
        {
            id: 0,
            tipo: 0,
            nome: 'Nathiely',
            ra: '',
            senha: '',
            email: '',
            contato: '',
            ativo: '',
            saldo: 0,
            condicoes: '',
            obs: '',
            moedas: [],
        },
        {
            id: 0,
            tipo: 0,
            nome: '',
            ra: '',
            senha: '',
            email: '',
            contato: '',
            ativo: '',
            saldo: 0,
            condicoes: '',
            obs: '',
            moedas: [
                {
                    id: 0,
                    nroSerie: '',
                    perdido: '',
                    fabricacao: new Date(),
                    vencimento: undefined,
                    periodo: undefined,
                    ativo: 'V',
                    obs: '',
                    usuario: undefined,
                    createdAt: undefined,
                    updatedAt: undefined,
                    lote: '',
                },
            ],
        },
    ];
    usuario: Usuario = {
        id: 0,
        tipo: 0,
        nome: '',
        ra: '',
        senha: '',
        email: '',
        contato: '',
        ativo: '',
        saldo: 0,
        condicoes: '',
        obs: '',
        moedas: undefined,
    };

    moeda: Moeda[] = [
        {
            id: 0,
            nroSerie: '',
            perdido: '',
            fabricacao: new Date(),
            vencimento: undefined,
            periodo: undefined,
            ativo: 'V',
            obs: '',
            usuario: undefined,
            createdAt: undefined,
            updatedAt: undefined,
            lote: '',
        },
        {
            id: 0,
            nroSerie: '',
            perdido: '',
            fabricacao: new Date(),
            vencimento: undefined,
            periodo: undefined,
            ativo: 'V',
            obs: '',
            usuario: undefined,
            createdAt: undefined,
            updatedAt: undefined,
            lote: '',
        },
    ];
    constructor(private router: Router, private moedaService: MoedasService) {}

    novaTransferencia() {
        this.router.navigateByUrl('moedas-transferencia')
    }

    ngOnInit(): void {
        const sp = [
            {
                paramName: 'usuario.id',
                paramValue: [this.moedaService.getIdUsuarioAtivo()],
                compareType: "EQUAL"
            }
        ]
        this.moedaService.getAll(sp).subscribe((ret) => {
            if (ret) {
                this.moeda = [...ret]
            } else {
                this.moeda = [];
            }
        })
    }
}
