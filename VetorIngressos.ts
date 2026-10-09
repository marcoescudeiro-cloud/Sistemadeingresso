import { Ingresso } from "./Ingresso";
import { IngressoVIP } from "./IngressoVIP";

export class VetorIngressos {
    private ingressos: Ingresso[];

    constructor() {
        this.ingressos = [];
    }

    public localizar(codigo: string): number {
        let posicao: number=-1;
        let i: number = 0;
        while (i < this.ingressos.length && posicao === -1) {
            if (this.ingressos[i].getCodigo() === codigo) {
                posicao = i;
            }
            i++;            
        }
        return posicao;
    }

    public adicionar(ingresso: Ingresso): boolean {
        let posicao: number;
        let resultado : boolean = false;
        posicao = this.localizar(ingresso.getCodigo());
        if (posicao === -1) {
             this.ingressos.push(ingresso);
             resultado = true;
        }
        return resultado;
    }           
    
    public listar(): string {
        let resultado: string;
        if (this.ingressos.length === 0) {
            resultado = "Nenhum ingresso cadastrado.";
        } else {
            resultado = "";
            for (const ingresso of this.ingressos) {
                resultado += ingresso.exibirDados() + "\n";
            }
        }
        return resultado;
    }

    public listarTodos(): string {
        let resultado = "";
        if (this.ingressos.length === 0) {
            resultado = "Nenhum ingresso cadastrado.";
        }
        resultado = "";
        for (const ingresso of this.ingressos) {
            resultado += ingresso.exibirDados() + "\n";
        }
        return resultado;
    }

    public remover(codigo: string): boolean {
        const posicao = this.localizar(codigo);
        let removido: boolean = false;
        if (posicao !== -1) {
            this.ingressos.splice(posicao, 1);
            removido = true;
        }
        return removido;
    }

    public alterarValor(codigo: string, valor: number): boolean {
        const posicao = this.localizar(codigo);
        let alterado: boolean = false;
        if (posicao !== -1) {
            this.ingressos[posicao].setValor(valor);
            alterado = true;
        }
        return alterado;
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
        let resultado: Ingresso | null = null;
        if (posicao !== -1) {
            resultado = this.ingressos[posicao];
        }
        return resultado;
    }
}