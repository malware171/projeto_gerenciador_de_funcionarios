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
        let nome = prompt("Qual o nome completo do funcionário ?");
        let idade = +prompt(`Qual a idade de ${nome} ? `);
        let cpf = +prompt(`Qual o CPF de ${nome} ? `);
        // Chama a função escolherGenero e espera um valor do tipo Gender
        let genero = (0, GenderController_1.escolherGenero)(prompt);
        if (!genero) {
            console.log("Gênero inválido. Tente novamente.");
            return; // Retorna se o gênero não for válido
        }
        let salario = +prompt(`Qual o salario de ${nome} ? `);
        let idCargo = +prompt(`Digite o numero referente ao cargo de ${nome} ? \n ${console.log(DatabaseRole_1.default.listaCargos())}`);
        let telefone = +prompt("Digite o numero de telefone: ");
        let endereco = AddressController_1.default.cadastroEndereco();
        let cargo = DatabaseRole_1.default.filtroCargo(idCargo);
        let newFuncionario = new Employee_1.default(salario, cargo, nome, idade, cpf, genero, endereco, telefone);
        DatabaseEmployee_1.default.addNovoFuncionario(newFuncionario);
    }
}
exports.default = EmployeeController;
