"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../db/database");
class Bussinees {
    constructor(nome, cnpj, endereco, telefone) {
        this._funcionarios = [];
        this._nome = nome;
        this._cnpj = cnpj;
        this._endereco = endereco;
        this._telefone = telefone;
    }
    addFuncionario(funcionario) {
    }
    removerFuncionario() { }
    listarFuncionario() { }
    atualizarCargo() { }
    listarCargo() {
        database_1.default.listaCargos();
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
