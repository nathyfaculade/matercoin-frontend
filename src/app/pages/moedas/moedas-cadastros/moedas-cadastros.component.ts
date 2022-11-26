import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { spinner } from 'src/app/app.component';
import { Moeda } from 'src/app/model/moeda';
import { MoedasService } from 'src/app/service/moedas.service';

@Component({
    selector: 'app-moedas-cadastros',
    templateUrl: './moedas-cadastros.component.html',
    styleUrls: ['./moedas-cadastros.component.scss'],
})
export class MoedasCadastrosComponent implements OnInit {
    // transferencias = 0;
    // professores = 0;
    // alunos = 0;
    // total = 0;

    // moeda: Moeda[] = [];

    _dadosLote: Moeda = {
        id: 0,
        nroSerie: '',
        perdido: 'F',
        fabricacao: new Date(),
        vencimento: undefined,
        periodo: undefined,
        ativo: 'V',
        obs: '',
        usuario: undefined,
        createdAt: undefined,
        updatedAt: undefined,
        lote: 'A',
    };

    get dadosLote() {
        return this._dadosLote;
    }

    set dadosLote(val) {
        this._dadosLote = val;
    }

    obj: Moeda = {
        id: 0,
        nroSerie: '',
        perdido: '',
        fabricacao: new Date(),
        vencimento: new Date(2030, 12, 31),
        periodo: undefined,
        ativo: 'V',
        obs: '',
        usuario: undefined,
        createdAt: undefined,
        updatedAt: undefined,
        lote: '',
    };

    objs: Moeda[] = [];
    lotes = ['A', 'B', 'C'];

    serieInicial: number = 0;
    serieFinal: number = 10;

    getLoteTimeout() {
        setTimeout(() => {
            this.getLote();
        }, 150);
    }

    onChangeLoteAtivo(event) {
        for (const m of this.objs) {
            m.ativo = event.checked;
        }
    }

    getLote() {
        this.objs = [];
        spinner(true);
        this.service
            .getAll([
                {
                    paramName: 'nroSerie',
                    paramValue: this._dadosLote.lote,
                    compareType: 'LIKE',
                },
            ])
            .subscribe((list) => {
                spinner(false);
                if (list) {
                    this.objs = [...list].sort((a, b) => {
                        return a.nroSerie < b.nroSerie
                            ? -1
                            : a.nroSerie > b.nroSerie
                            ? 1
                            : 0;
                    });
                }
            });
    }

    adicionarMoedas() {
        // if (!this.dadosLote.vencimento) {
        //     this.msg.add({
        //         severity: 'warn',
        //         summary: "Atenção",
        //         detail: "Vencimento é obrigatório!"
        //     })
        //     return;
        // }
        if (!this.dadosLote.fabricacao) {
            this.msg.add({
                severity: 'warn',
                summary: 'Atenção',
                detail: 'Fabricação é obrigatório!',
            });
            return;
        }
        if (!this.dadosLote.lote) {
            this.msg.add({
                severity: 'warn',
                summary: 'Atenção',
                detail: 'Lote é obrigatório!',
            });
            return;
        }
        const result = [];
        if (!this.objs) this.objs = [];
        for (let i = this.serieInicial; i <= this.serieFinal; i++) {
            if (this.objs.find((o) => o.nroSerie == this._dadosLote.lote + i)) {
                continue;
            }
            const moeda: Moeda = {
                id: i * -1,
                nroSerie: this.dadosLote.lote + i,
                perdido: 'F',
                fabricacao: this.dadosLote.fabricacao,
                vencimento: this.dadosLote.vencimento,
                periodo: undefined,
                ativo: 'V',
                obs: '',
                usuario: { id: 1 },
                createdAt: undefined,
                updatedAt: undefined,
            };
            result.push(moeda);
        }
        this.objs = [...this.objs, ...result].sort((a, b) => {
            return a.nroSerie < b.nroSerie
                ? -1
                : a.nroSerie > b.nroSerie
                ? 1
                : 0;
        });

        this.msg.add({
            severity: 'info',
            summary: 'Moedas adicionadas!',
            detail: 'Clique em "Salvar" no final da lista para concluir a operação',
        });
    }

    excluirMoeda(val) {
        if (val.id < 0) {
            this.objs = [...this.objs.filter((o) => o.id != val.id)];
        } else {
            this.confirmation.confirm({
                acceptLabel: 'Sim',
                rejectLabel: 'Não',
                message:
                    'Deseja realmente apagar essa moeda? Esta ação não pode ser desfeita.',
                accept: () => {
                    this.service.delete(val.id).subscribe(
                        (deleted) => {
                            this.msg.add({
                                severity: 'success',
                                summary: 'Atenção',
                                detail: 'Excluído com sucesso!',
                            });
                            this.getLote();
                        },
                        (e) => {
                            this.msg.add({
                                severity: 'error',
                                summary: 'Erro',
                                detail: e.message,
                            });
                        },
                        () => {}
                    );
                },
            });
        }
    }

    salvar() {
        spinner(true);
        this.service
            .saveAll(this.objs)
            .then((objs) => {
                console.log(objs);
                this.msg.add({
                    severity: 'success',
                    summary: 'Atenção',
                    detail: 'Salvo com sucesso!',
                });
                this.getLote();
            })
            .catch((e) => {})
            .finally(() => {
                spinner(false);
            });
    }

    cancelar() {
        this.router.navigateByUrl('moedas');
    }

    constructor(
        private service: MoedasService,
        private router: Router,
        private msg: MessageService,
        private confirmation: ConfirmationService
    ) {}

    ngOnInit(): void {
        this.getLote();
    }
}
