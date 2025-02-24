"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DatabaseAddress {
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
}
DatabaseAddress.address = [];
exports.default = DatabaseAddress;
