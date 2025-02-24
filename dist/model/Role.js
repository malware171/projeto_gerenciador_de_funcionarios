"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Role {
    constructor(nome, salario) {
        this.id = this.gerarId();
        this.nome = nome;
        this.salario = salario;
    }
    gerarId() {
        return Role._idCounter++;
    }
    static cadastrarCargo() { }
    set setId(id) {
        this.id = id;
    }
    get getId() {
        return this.id;
    }
    set setNome(nome) {
        this.nome = nome;
    }
    get getNome() {
        return this.nome;
    }
    set setSalario(salario) {
        this.salario = salario;
    }
    get getSalario() {
        return this.salario;
    }
}
Role._idCounter = 0;
exports.default = Role;
