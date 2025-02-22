"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const People_1 = require("./People");
class Employee extends People_1.default {
    constructor(id, salario, cargo, nome, idade, cpf, genero, endereco, telefone) {
        super(nome, idade, cpf, genero, endereco, telefone);
        this._id = id;
        this._salario = salario;
        this._cargo = cargo;
    }
    set setNomeFuncionario(nomeFuncionario) {
        this._nome = nomeFuncionario;
    }
    get getNomeFuncionario() {
        return this._nome;
    }
    set setId(id) {
        this._id = id;
    }
    get getId() {
        return this._id;
    }
    set setSalario(salario) {
        this._salario = salario;
    }
    get getSalario() {
        return this._salario;
    }
    set setCargo(cargo) {
        this._cargo = cargo;
    }
    get getCargo() {
        return this._cargo;
    }
    set setIdade(idade) {
        this._idade = idade;
    }
    get getIdade() {
        return this._idade;
    }
    set setCpf(cpf) {
        this._cpf = cpf;
    }
    get getCpf() {
        return this._cpf;
    }
    set setGenero(genero) {
        this._genero = genero;
    }
    get getGenero() {
        return this._genero;
    }
    set setEndereco(endereco) {
        this._endereco = endereco;
    }
    get getEndereco() {
        return this._endereco;
    }
    set setTelefone(telefone) {
        this._telefone = telefone;
    }
    get getTelefone() {
        return this._telefone;
    }
}
exports.default = Employee;
