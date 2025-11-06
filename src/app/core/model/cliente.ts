import { Endereco } from "./endereco";

export class Cliente {
    id!: number;
    nome!: string;
    cpf!: string;
    dtNascimento!: Date;
    telefone!: string;
    sexo?: string;
    endereco!:Endereco;
}