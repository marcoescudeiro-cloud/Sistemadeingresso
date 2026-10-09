import { Ingresso } from "./Ingresso";
import { IngressoVIP } from "./IngressoVIP";

export class VetorIngressos {
    private ingressos: Ingresso[];

    constructor() {
        this.ingressos = [];
    }

    public localizar(codigo: string): number {
        for (let i = 0; i < this.ingressos.length; i++) {
            if (this.ingressos[i].getCodigo() === codigo) {
                return i;
            }
        }
        return -1;
    }

    public adicionar(ingresso: Ingresso): boolean {
        if (this.localizar(ingresso.getCodigo()) !== -1) {
            return false;
        }
        this.ingressos.push(ingresso);
        return true;
    }

    public listar(): string {
        if (this.ingressos.length === 0) {
            return "Nenhum ingresso cadastrado.";
        }
        let resultado = "";
        for (const ingresso of this.ingressos) {
            resultado += ingresso.exibirDados() + "\n";
        }
        return resultado;
    }

    public remover(codigo: string): boolean {
        const posicao = this.localizar(codigo);
        if (posicao !== -1) {
            this.ingressos.splice(posicao, 1);
            return true;
        }
        return false;
    }

    public alterarValor(codigo: string, valor: number): boolean {
        const posicao = this.localizar(codigo);
        if (posicao !== -1) {
            this.ingressos[posicao].setValor(valor);
            return true;
        }
        return false;
    }

    public alterarValorAdicional(codigo: string, valorAdicional: number): boolean {
        let posicao: number;
        let alterado: boolean = false;

        posicao = this.localizar(codigo);

        if (posicao !== -1 && this.ingressos[posicao] instanceof IngressoVIP) {
            let ingresso_vip: IngressoVIP;
            ingresso_vip = this.ingressos[posicao] as IngressoVIP;
            ingresso_vip.setValorAdicional(valorAdicional);
            alterado = true;
        }

        return alterado;
    }

    public obterIngresso(codigo: string): Ingresso | null {
        const posicao = this.localizar(codigo);
        if (posicao !== -1) {
            return this.ingressos[posicao];
        }
        return null;
    }
}