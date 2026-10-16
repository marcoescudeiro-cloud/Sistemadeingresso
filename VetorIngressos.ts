import { Ingresso } from "./Ingresso";
import { IngressoVIP } from "./IngressoVIP";

export class VetorIngressos {
    private ingressos: Ingresso[] = [];

    adicionar(ingresso: Ingresso): boolean {
        let posicao: number;
        let adicionado: boolean = false;
        posicao = this.localizar(ingresso.getCodigo());
        if (posicao == -1) {
            this.ingressos.push(ingresso);
            adicionado = true;
        }
        return adicionado;
    }

    listar(): string {
        let resultado: string = "";
        let i: number;
        for (i = 0; i < this.ingressos.length; i++) {
            resultado += this.ingressos[i].exibirDados() + "\n";
        }
        return resultado;
    }

    localizar(codigo: string): number {
        let posicao: number = -1;
        let i: number = 0;
        while (i < this.ingressos.length && posicao == -1) {
            if (this.ingressos[i].getCodigo() == codigo) {
                posicao = i;
            }
            i++;
        }
        return posicao;
    }

    exibirIngresso(codigo: string): string {
        let posicao: number;
        let resultado: string = "Ingresso não encontrado.";
        posicao = this.localizar(codigo);
        if (posicao != -1) {
            resultado = this.ingressos[posicao].exibirDados();
        }
        return resultado;
    }

    remover(codigo: string): boolean {
        let posicao: number;
        let removido: boolean = false;
        posicao = this.localizar(codigo);
        if (posicao != -1) {
            this.ingressos.splice(posicao, 1);
            removido = true;
        }
        return removido;
    }

    alterarValor(codigo: string, valor: number): boolean {
        let posicao: number;
        let alterado: boolean = false;
        posicao = this.localizar(codigo);
        if (posicao != -1) {
            this.ingressos[posicao].setValor(valor);
            alterado = true;
        }
        return alterado;
    }

    alterarValorAdicional(codigo: string, valor_adicional: number): boolean {
        let posicao: number;
        let alterado: boolean = false;
        posicao = this.localizar(codigo);
        if (posicao != -1 && this.ingressos[posicao] instanceof IngressoVIP) {
            let ingresso_vip: IngressoVIP;
            ingresso_vip = this.ingressos[posicao] as IngressoVIP;
            ingresso_vip.setValorAdicional(valor_adicional);
            alterado = true;
        }
        return alterado;
    }
}
