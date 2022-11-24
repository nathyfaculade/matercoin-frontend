import { Moeda } from "./moeda";

export interface Usuario {

    id: number;

    tipo: number;

    nome: string;

    ra: string;

    senha: string;

    email: string;

    contato: string;

    ativo: string;

    saldo: number;

    condicoes: string;

    obs: string;

    moedas: Moeda[];

}
