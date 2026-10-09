import * as readline from "readline-sync";
import { Ingresso } from "./Ingresso";
import { IngressoVIP } from "./IngressoVIP";
import { VetorIngressos } from "./VetorIngressos";

export class IngressosTest {
    public static main(): void {
        const gestor = new VetorIngressos();
        let opcao: number = 0;

        do {
            console.log("\n================ MENU DE OPÇÕES ================");
            console.log("1. Cadastrar ingresso comum");
            console.log("2. Cadastrar ingresso VIP");
            console.log("3. Apresentar os dados de um ingresso");
            console.log("4. Apresentar os dados de todos os ingressos cadastrados");
            console.log("5. Alterar o valor de um ingresso");
            console.log("6. Alterar o valor adicional de um ingresso VIP");
            console.log("7. Remover um ingresso");
            console.log("8. Encerrar o programa");
            console.log("=================================================");

            opcao = readline.questionInt("Escolha uma opcao: ");

            switch (opcao) {
                case 1: {
                    const codigo = readline.question("Codigo do ingresso: ");
                    const evento = readline.question("Nome do evento: ");
                    const valor = readline.questionFloat("Valor do ingresso: ");

                    const novoIngresso = new Ingresso(codigo, valor, evento);
                    if (gestor.adicionar(novoIngresso)) {
                        console.log("Ingresso comum cadastrado com sucesso!");
                    } else {
                        console.log("Erro: Ja existe um ingresso com esse codigo.");
                    }
                    break;
                }
                case 2: {
                    const codigo = readline.question("Codigo do ingresso: ");
                    const evento = readline.question("Nome do evento: ");
                    const valor = readline.questionFloat("Valor base do ingresso: ");
                    const valorAdicional = readline.questionFloat("Valor adicional VIP: ");

                    const novoIngressoVIP = new IngressoVIP(codigo, valor, evento, valorAdicional);
                    if (gestor.adicionar(novoIngressoVIP)) {
                        console.log("Ingresso VIP cadastrado com sucesso!");
                    } else {
                        console.log("Erro: Ja existe um ingresso com esse codigo.");
                    }
                    break;
                }
                case 3: {
                    const codigo = readline.question("Codigo do ingresso a consultar: ");
                    const ingresso = gestor.obterIngresso(codigo);
                    if (ingresso) {
                        console.log("\n--- Dados do Ingresso ---");
                        console.log(ingresso.exibirDados());
                    } else {
                        console.log("Ingresso nao encontrado.");
                    }
                    break;
                }
                case 4: {
                    console.log("\n--- Ingressos Cadastrados ---");
                    console.log(gestor.listar());
                    break;
                }
                case 5: {
                    const codigo = readline.question("Codigo do ingresso a alterar: ");
                    const novoValor = readline.questionFloat("Novo valor: ");

                    if (gestor.alterarValor(codigo, novoValor)) {
                        console.log("Valor alterado com sucesso!");
                    } else {
                        console.log("Erro: Ingresso nao encontrado.");
                    }
                    break;
                }
                case 6: {
                    const codigo = readline.question("Codigo do ingresso VIP a alterar: ");
                    const novoAdicional = readline.questionFloat("Novo valor adicional: ");

                    if (gestor.alterarValorAdicional(codigo, novoAdicional)) {
                        console.log("Valor adicional alterado com sucesso!");
                    } else {
                        console.log("Erro: Ingresso nao encontrado ou nao e do tipo VIP.");
                    }
                    break;
                }
                case 7: {
                    const codigo = readline.question("Codigo do ingresso a remover: ");
                    if (gestor.remover(codigo)) {
                        console.log("Ingresso removido com sucesso!");
                    } else {
                        console.log("Erro: Ingresso nao encontrado.");
                    }
                    break;
                }
                case 8: {
                    console.log("Programa encerrado.");
                    break;
                }
                default: {
                    console.log("Opcao invalida. Tente novamente.");
                    break;
                }
            }
        } while (opcao !== 8);
    }
}

// Execução do método main
IngressosTest.main();