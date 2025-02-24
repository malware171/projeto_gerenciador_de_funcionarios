"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Database {
    //DB CARGOS
    // ------------------------------------------------ //
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
    // ------------------------------------------------ //
    // DATABASE DE ENDEREÇO
    // ------------------------------------------------ //
    static addNovoEndereco(endereco) {
        this.address.push(endereco);
    }
    static listEndereco() {
        let resultado = '';
        for (let i = 0; i < this.address.length; i++) {
            const endereco = this.address[i];
            resultado += `ID: ${endereco.getId}, Logradouro: ${endereco.getRua}, Número: ${endereco.getNumero}\n`;
            return resultado;
        }
    }
    // ------------------------------------------------ //
    // DATABASE DE FUNCIONARIO
    // ------------------------------------------------ //
    static addNovoFuncionario(funcionario) {
        this.employees.push(funcionario);
    }
}
Database.roles = [];
Database.employees = [];
Database.address = [];
exports.default = Database;
