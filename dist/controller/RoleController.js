"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PromptSync = require("prompt-sync");
const Role_1 = require("../model/Role");
const DatabaseRole_1 = require("../db/DatabaseRole");
let input = PromptSync();
class RoleController {
    static addNewRole() {
        let nomeCargo = input("Qual o nome do cargo? ");
        let salarioCargo = +input(`Qual o salario base do cargo ${nomeCargo} ? `);
        let newRole = new Role_1.default(nomeCargo, salarioCargo);
        DatabaseRole_1.default.addNovoCargo(newRole);
        return newRole;
    }
}
exports.default = RoleController;
