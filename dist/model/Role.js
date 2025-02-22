"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Role {
    constructor(nome, salario) {
        Role.idCounter++;
        this.id = Role.idCounter;
        this.nome = nome;
        this.salario = salario;
        Role.roles.push(this);
    }
    static getRoles() {
        return Role.roles;
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
Role.idCounter = 0; // Contador estático para IDs
Role.roles = []; // Array estático para armazenar cargos
exports.default = Role;
