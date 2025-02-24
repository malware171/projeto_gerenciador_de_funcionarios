"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DatabaseRole {
    static addNovoCargo(cargo) {
        this.roles.push(cargo);
    }
    static listaCargos() {
        let resultado = '';
        for (let i = 0; i < this.roles.length; i++) {
            const role = this.roles[i];
            resultado += `ID: ${role.getId}, Nome: ${role.getNome}, Salário: ${role.getSalario}\n`;
        }
        return resultado;
    }
    static filtroCargo(numero) {
        for (let i = 0; i < this.roles.length; i++) {
            if (this.roles[i].getId === numero) {
                return this.roles[i];
            }
        }
        return null;
    }
}
DatabaseRole.roles = [];
exports.default = DatabaseRole;
