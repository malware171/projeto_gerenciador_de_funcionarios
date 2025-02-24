"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DatabaseEmployee {
    static addNovoFuncionario(funcionario) {
        this.employees.push(funcionario);
    }
}
DatabaseEmployee.employees = [];
exports.default = DatabaseEmployee;
