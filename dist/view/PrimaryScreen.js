"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PrimaryScreenController_1 = require("../controller/PrimaryScreenController");
const EmployeeController_1 = require("../controller/EmployeeController");
class PrimaryScreen {
    constructor(empresa) {
        this.empresa = empresa;
    }
    getFirstScreen() {
        let option = 0;
        while (option !== 9) {
            console.log(`\n+======   Gerenciador de Funcionarios da empresa ${this.empresa.getNome} ======+`);
            console.log("| 1. Cadastrar Funcionario                    |");
            console.log("| 2. Remover Funcionario                      |");
            console.log("| 3. Promover Funcionario                     |");
            console.log("| 4. Listar Funcionarios                      |");
            console.log("| 5. Excluir Funcionario                      |");
            console.log("| 6. Cadastrar Cargo                          |");
            console.log("| 7. Listar Cargos                            |");
            console.log("| 8. Excluir Cargo                            |");
            console.log("| 9. Sair                                     |");
            option = PrimaryScreenController_1.default.escolherOpcao(option);
            switch (option) {
                case 1: {
                    this.empresa.addFuncionario();
                    break;
                }
                case 2: {
                    EmployeeController_1.default.removerFuncionario();
                    break;
                }
                case 3: {
                    console.log("Promovendo funcionário...");
                    break;
                }
                case 4: {
                    console.log(`${this.empresa.listarFuncionarios()}`);
                    break;
                }
                case 5: {
                    console.log("Listando funcionários...");
                    break;
                }
                case 6: {
                    this.empresa.addNewRole();
                    break;
                }
                case 7: {
                    console.log("Listando cargos...");
                    console.log(`${this.empresa.listarCargo()}`);
                    break;
                }
                case 8: {
                    console.log("Listando funcionários...");
                    break;
                }
                case 9: {
                    console.log("Saindo...");
                    break;
                }
                default: {
                    console.log("Opção Inválida!");
                    break;
                }
            }
        }
    }
}
exports.default = PrimaryScreen;
