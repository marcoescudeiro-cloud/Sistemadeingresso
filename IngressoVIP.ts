import { Ingresso } from "./Ingresso";

export class IngressoVIP extends Ingresso {
    private valorAdicional: number;

    constructor(codigo: string, valor: number, nomeEvento: string, valorAdicional: number) {
        super(codigo, valor, nomeEvento);
        this.valorAdicional = valorAdicional;
    }

    public getValorAdicional(): number {
        return this.valorAdicional;
    }

    public setValorAdicional(valorAdicional: number): void {
        this.valorAdicional = valorAdicional;
    }

    public calcularValor(): number {
        return this.getValor() + this.valorAdicional;
    }

    public override exibirDados(): string {
        return `Código: ${this.getCodigo()} | Evento: ${this.getNomeEvento()} | Valor Original: R$ ${this.getValor().toFixed(2)} | Valor Adicional: R$ ${this.valorAdicional.toFixed(2)} | Valor Total: R$ ${this.calcularValor().toFixed(2)}`;
    }
}