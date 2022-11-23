import { Periodo } from "./periodo";
import { Usuario } from "./usuario";

export interface Moeda {

    id: number;
    nroSerie: string;
    perdido: string;
    fabricacao: Date;
    vencimento: Date;
    periodo: Periodo;
    ativo: string;
    obs: string;
    usuario: Usuario;
    createdAt: Date;
    updatedAt: Date;
    lote?
}
