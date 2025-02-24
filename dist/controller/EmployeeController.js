"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PromptSync = require("prompt-sync");
const DatabaseEmployee_1 = require("../db/DatabaseEmployee");
const DatabaseRole_1 = require("../db/DatabaseRole");
const AddressController_1 = require("./AddressController");
const GenderController_1 = require("./GenderController");
const Employee_1 = require("../model/Employee");
let prompt = PromptSync();
class EmployeeController {
    static cadastroFuncionario() {
        let nome = prompt("Qual o nome completo do funcionário ? ");
        let cpf = +prompt(`Qual o CPF de ${nome} ? `);
        let genero = (0, GenderController_1.escolherGenero)(prompt);
        if (!genero) {
            console.log("Gênero inválido. Tente novamente.");
            return;
        }
        let salario = +prompt(`Qual o salario de ${nome} ? `);
        let idCargo = +prompt(`Digite o numero referente ao cargo de ${nome} ? \n ${console.log(DatabaseRole_1.default.listaCargos())}`);
        let telefone = +prompt("Digite o numero de telefone: ");
        let endereco = AddressController_1.default.cadastroEndereco();
        let cargo = DatabaseRole_1.default.filtroCargo(idCargo);
        let newFuncionario = new Employee_1.default(salario, cargo, nome, cpf, genero, endereco, telefone);
        DatabaseEmployee_1.default.addNovoFuncionario(newFuncionario);
    }
    static removerFuncionario() {
        `${console.log(DatabaseEmployee_1.default.filtroFuncionario())}`;
        let idFuncionario = +prompt("Digite o numero do funcionário que deseja remover: ");
        DatabaseEmployee_1.default.removeFuncionarioDb(idFuncionario);
    }
}
exports.default = EmployeeController;
