import { Cliente } from "./cliente";

export class Agendamento {
    id!: number;
    cdAgendamento!: string;
    nomeServico!: string;
    tempoEstimado!: number;
    valor!: number;
    dtAtendimento!: string;
    responsavel!: string;
    status!: string;
    clienteID!: number;
    estabelecimentoID!: number;
    cliente!: Cliente;
}