"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DatabaseRole_1 = require("../db/DatabaseRole");
const EmployeeController_1 = require("../controller/EmployeeController");
const RoleController_1 = require("../controller/RoleController");
const DatabaseEmployee_1 = require("../db/DatabaseEmployee");
class Bussinees {
    constructor(nome, cnpj, endereco, telefone) {
        this._funcionarios = [];
        this._nome = nome;
        this._cnpj = cnpj;
        this._endereco = endereco;
        this._telefone = telefone;
    }
    addFuncionario() {
        EmployeeController_1.default.cadastroFuncionario();
    }
    removerFuncionario() { }
    listarFuncionarios() {
        return DatabaseEmployee_1.default.filtroFuncionario();
    }
    addNewRole() {
        RoleController_1.default.addNewRole();
    }
    listarCargo() {
        return DatabaseRole_1.default.listaCargos();
    }
    atualizarCargo() {
    }
    get getNome() {
        return this._nome;
    }
    get getCnpj() {
        return this._cnpj;
    }
    get getEndereco() {
        return this._endereco;
    }
    get getTelefone() {
        return this._telefone;
    }
    get getFuncionarios() {
        return this._funcionarios;
    }
    set setNome(nome) {
        this._nome = nome;
    }
    set setCnpj(cnpj) {
        this._cnpj = cnpj;
    }
    set setEndereco(endereco) {
        this._endereco = endereco;
    }
    set setTelefone(telefone) {
        this._telefone = telefone;
    }
}
exports.default = Bussinees;
