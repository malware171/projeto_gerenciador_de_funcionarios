"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PromptSync = require("prompt-sync");
const DatabaseAddress_1 = require("../db/DatabaseAddress");
const Address_1 = require("../model/Address");
let prompt = PromptSync();
class AddressController {
    static cadastroEndereco() {
        let rua = prompt("Digite a rua: ");
        let bairro = prompt("Digite o Bairro");
        let cidade = prompt("Digite a Cidade: ");
        let estado = prompt("Digite o Estado: ");
        let numero = +prompt("Digite o numero residencia: ");
        let newAddress = new Address_1.default(rua, bairro, cidade, estado, numero);
        DatabaseAddress_1.default.addNovoEndereco(newAddress);
        console.log(DatabaseAddress_1.default.listEndereco());
        return newAddress;
    }
}
exports.default = AddressController;
