import PromptSync = require("prompt-sync");
import DatabaseAddress from "../db/DatabaseAddress";
import Address from "../model/Address";

let prompt = PromptSync()

export default class AddressController {

   static cadastroEndereco(): Address {
      let rua = prompt("Digite a rua: ");
      let bairro = prompt("Digite o Bairro: ")
      let cidade = prompt("Digite a Cidade: ");
      let estado = prompt("Digite o Estado: ");
      let numero = +prompt("Digite o numero residencia: ")
      let newAddress : Address = new Address(rua, bairro, cidade, estado, numero);
      DatabaseAddress.addNovoEndereco(newAddress)
      console.log(DatabaseAddress.listEndereco())

      return newAddress
   }
}