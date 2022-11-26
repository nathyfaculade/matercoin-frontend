import { Moeda } from "./moeda";
import { Periodo } from "./periodo";
import { Usuario } from "./usuario";

export interface Movimentacao {
    id: number;
    transferencia: Date;
    moeda: Moeda;
    origem: Usuario;
    destino: Usuario;
    periodo: Periodo;
    createdAt?: Date;
    updatedAt?: Date;
}
