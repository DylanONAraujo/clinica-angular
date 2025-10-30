export class Cliente {
    id!: number;
    nome!: string;
    cpf!: string;
    dtNascimento!: Date;
    telefone!: string;
    cep!: string;
    logradouro?: string;
    numero?: string;
    complemento?: string;
    bairro?: string;
    cidade?: string;
    estado?: string;
}