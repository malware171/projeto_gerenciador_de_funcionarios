"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DatabaseEmployee {
    static addNovoFuncionario(funcionario) {
        this.employees.push(funcionario);
    }
    static filtroFuncionario() {
        let resultado = '';
        for (let i = 0; i < this.employees.length; i++) {
            resultado += `Funcionario ${i}: ${this.employees[i].getNomeFuncionario}`;
        }
        return resultado;
    }
    static removeFuncionarioDb(numero) {
        for (let i = 0; i < this.employees.length; i++) {
            if (this.employees[i].getId === numero) {
                this.employees.splice(i, 1);
            }
            else {
                console.log("Funcionári não foi encontrado ");
            }
        }
    }
}
DatabaseEmployee.employees = [];
exports.default = DatabaseEmployee;
