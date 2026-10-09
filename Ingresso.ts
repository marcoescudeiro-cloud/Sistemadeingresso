export class Ingresso {
    private codigo: string;
    private valor: number;
    private nomeEvento: string;

    constructor(codigo: string, valor: number, nomeEvento: string) {
        this.codigo = codigo;
        this.valor = valor;
        this.nomeEvento = nomeEvento;
    }

    public getCodigo(): string {
        return this.codigo;
    }

    public getValor(): number {
        return this.valor;
    }

    public getNomeEvento(): string {
        return this.nomeEvento;
    }

    public setValor(valor: number): void {
        this.valor = valor;
    }

    public exibirDados(): string {
        return `Código: ${this.codigo} | Evento: ${this.nomeEvento} | Valor: R$ ${this.valor.toFixed(2)}`;
    }
}