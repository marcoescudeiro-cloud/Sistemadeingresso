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
        let total: number;
        total = this.getValor() + this.valorAdicional;
        return total;
    }

    public override exibirDados(): string {
        let resultado: string;
        resultado = `Código: ${this.getCodigo()} | Evento: ${this.getNomeEvento()} | Valor Original: R$ ${this.getValor().toFixed(2)} | Valor Adicional: R$ ${this.valorAdicional.toFixed(2)} | Valor Total: R$ ${this.calcularValor().toFixed(2)}`;
        return resultado;
    }
}