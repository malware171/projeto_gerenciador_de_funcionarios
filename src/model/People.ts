import Address from "./Address";
import { Gender } from "./Gender";

export default abstract class People {
   protected _nome: string;
   protected _idade: number;
   protected _cpf: number;
   protected _genero: Gender;
   protected _endereco: Address;
   protected _telefone: number;

   constructor(nome: string, idade: number, cpf: number, genero: Gender, endereco: Address, telefone: number) {
      this._nome = nome;
      this._idade = idade;
      this._cpf = cpf;
      this._genero = genero;
      this._endereco = endereco;
      this._telefone = telefone;
   }
}