"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Address {
    constructor(rua, bairro, cidade, estado, numero) {
        this._rua = rua;
        this._bairro = bairro;
        this._cidade = cidade;
        this._estado = estado;
        this._numero = numero;
    }
    get getRua() {
        return this._rua;
    }
    set setRua(nomeRua) {
        this._rua = nomeRua;
    }
    get getBairro() {
        return this._bairro;
    }
    set setBairro(nomeBairro) {
        this._bairro = nomeBairro;
    }
    get getCidade() {
        return this._cidade;
    }
    set setCidade(nomeCidade) {
        this._cidade = nomeCidade;
    }
    get getEstado() {
        return this._estado;
    }
    set setEstado(nomeEstado) {
        this._estado = nomeEstado;
    }
    get getNumero() {
        return this._numero;
    }
    set setNumero(numeroEndereco) {
        this._numero = numeroEndereco;
    }
}
exports.default = Address;
