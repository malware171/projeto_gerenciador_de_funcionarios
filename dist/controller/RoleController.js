"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PromptSync = require("prompt-sync");
let input = PromptSync();
class RoleController {
    static addNewRole() {
        let nomeCargo = input("Qual o nome do cargo? ");
        let descricaoCargo = input(`Qual a descrição do cargo ${nomeCargo} ?`);
        let salarioCargo = +input(`Qual o salario base do cargo ${nomeCargo} ? `);
        return { nome: nomeCargo, descricao: descricaoCargo, salario: salarioCargo };
    }
}
exports.default = RoleController;
