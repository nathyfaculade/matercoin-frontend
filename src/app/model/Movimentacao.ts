import { Moeda } from "./moeda";
import { Usuario } from "./usuario";

export interface Movimentacao {
    id: number;
    transferencia: Date;
    moeda: Moeda;
    origem: Usuario;
    destino: Usuario;
    createdAt: Date;
    updatedAt: Date;
}
