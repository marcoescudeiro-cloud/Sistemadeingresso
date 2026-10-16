export class Ingresso {
    protected codigo: string;
    private valor: number;
    private nomeEvento: string;

    constructor(codigo: string, valor: number, nomeEvento: string) {
        this.codigo = codigo;
        this.valor = valor;
        this.nomeEvento = nomeEvento;
    }

    getCodigo(): string {
        return this.codigo;
    }

    getValor(): number {
        return this.valor;
    }

    getNomeEvento(): string {
        return this.nomeEvento;
    }

    setValor(valor: number): void {
        this.valor = valor;
    }

    exibirDados(): string {
        return `Código: ${this.codigo} | Evento: ${this.nomeEvento} | Valor: R$ ${this.valor.toFixed(2)}`;
    }
}
