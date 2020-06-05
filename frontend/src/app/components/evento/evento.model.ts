import { Casa } from './../casa/casa.model';
export class Evento{
    id?: number;
    nome: string;
    descricao: string;
    dtEvento: Date;
    estoque_ingresso: number;
    valor: number;
    casa: Casa ;
}