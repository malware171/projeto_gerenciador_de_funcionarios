"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Address {
    constructor(rua, bairro, cidade, estado, numero) {
        this.id = this.gerarId();
        this._rua = rua;
        this._bairro = bairro;
        this._cidade = cidade;
        this._estado = estado;
        this._numero = numero;
    }
    gerarId() {
        return Address._idCounter++;
    }
    get getId() {
        return this.id;
    }
    get getRua() {
        return this._rua;
    }
    get getBairro() {
        return this._bairro;
    }
    get getNumero() {
        return this._numero;
    }
}
Address._idCounter = 0;
exports.default = Address;
