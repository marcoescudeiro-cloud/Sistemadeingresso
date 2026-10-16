import { Ingresso } from "./Ingresso";
import { IngressoVIP } from "./IngressoVIP";
import { VetorIngressos } from "./VetorIngressos";

export class IngressosTest {
    static main(): void {
        let vetor: VetorIngressos;
        let opcao: number;
        let codigo: string;
        let nome_evento: string;
        let valor: number;
        let valor_adicional: number;
        let ingresso: Ingresso;
        let ingresso_vip: IngressoVIP;
        let lista: string;

        vetor = new VetorIngressos();
        opcao = 0;

        while (opcao != 8) {
            opcao = Number(prompt(
                "===== SISTEMA DE INGRESSOS =====\n" +
                "1. Cadastrar ingresso comum\n" +
                "2. Cadastrar ingresso VIP\n" +
                "3. Apresentar os dados de um ingresso\n" +
                "4. Apresentar os dados de todos os ingressos\n" +
                "5. Alterar o valor de um ingresso\n" +
                "6. Alterar o valor adicional de um ingresso VIP\n" +
                "7. Remover um ingresso\n" +
                "8. Encerrar o programa"
            ));

            if (opcao == 1) {
                codigo = prompt("Código do ingresso:")!;
                nome_evento = prompt("Nome do evento:")!;
                valor = Number(prompt("Valor do ingresso:"));
                ingresso = new Ingresso(codigo, valor, nome_evento);
                if (vetor.adicionar(ingresso)) {
                    alert("Ingresso cadastrado!");
                } else {
                    alert("Já existe um ingresso com esse código.");
                }
            } else if (opcao == 2) {
                codigo = prompt("Código do ingresso:")!;
                nome_evento = prompt("Nome do evento:")!;
                valor = Number(prompt("Valor do ingresso:"));
                valor_adicional = Number(prompt("Valor adicional do VIP:"));
                ingresso_vip = new IngressoVIP(codigo, valor, nome_evento, valor_adicional);
                if (vetor.adicionar(ingresso_vip)) {
                    alert("Ingresso VIP cadastrado!");
                } else {
                    alert("Já existe um ingresso com esse código.");
                }
            } else if (opcao == 3) {
                codigo = prompt("Código do ingresso:")!;
                alert(vetor.exibirIngresso(codigo));
            } else if (opcao == 4) {
                lista = vetor.listar();
                if (lista == "") {
                    alert("Nenhum ingresso cadastrado.");
                } else {
                    alert(lista);
                }
            } else if (opcao == 5) {
                codigo = prompt("Código do ingresso:")!;
                valor = Number(prompt("Novo valor:"));
                if (vetor.alterarValor(codigo, valor)) {
                    alert("Valor alterado!");
                } else {
                    alert("Ingresso não encontrado.");
                }
            } else if (opcao == 6) {
                codigo = prompt("Código do ingresso:")!;
                valor_adicional = Number(prompt("Novo valor adicional:"));
                if (vetor.alterarValorAdicional(codigo, valor_adicional)) {
                    alert("Valor adicional alterado!");
                } else {
                    alert("Ingresso não encontrado ou não é VIP.");
                }
            } else if (opcao == 7) {
                codigo = prompt("Código do ingresso:")!;
                if (vetor.remover(codigo)) {
                    alert("Ingresso removido!");
                } else {
                    alert("Ingresso não encontrado.");
                }
            } else if (opcao == 8) {
                alert("Programa encerrado.");
            } else {
                alert("Opção inválida.");
            }
        }
    }
}

IngressosTest.main();