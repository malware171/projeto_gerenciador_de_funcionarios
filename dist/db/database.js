"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Database {
    static listaCargos() {
        let resultado = ''; // Inicializa uma string para acumular os resultados
        for (let i = 0; i < this.roles.length; i++) {
            const role = this.roles[i];
            resultado += `ID: ${role.getId}, Nome: ${role.getNome}, Salário: ${role.getSalario}\n`; // Adiciona cada cargo à string
        }
        return resultado; // Retorna a string formatada
    }
}
Database.roles = [];
Database.employees = [];
exports.default = Database;
