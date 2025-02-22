import Address from "./Address";
import People from "./People";
import Role from "./Role";
import { Gender } from "./Gender";

export default class Employee extends People {
   private _id: number; 
   private _salario: number;
   private _cargo: Role;

   constructor(id: number, salario: number, cargo: Role, nome: string, idade: number, cpf: number, genero: Gender, endereco: Address, telefone: number) {
      super(nome, idade, cpf, genero, endereco, telefone);
      this._id = id;
      this._salario = salario;
      this._cargo = cargo;
   }

   public set setNomeFuncionario(nomeFuncionario: string) {
      this._nome = nomeFuncionario;
   }
   public get getNomeFuncionario(): string {   
      return this._nome;
   }

   public set setId(id: number) {
      this._id = id;
   }
   public get getId(): number {   
      return this._id;
   }

   public set setSalario(salario: number) {
      this._salario = salario;
   }
   public get getSalario(): number {   
      return this._salario;
   }

   public set setCargo(cargo: Role) {
      this._cargo = cargo;
   }
   public get getCargo(): Role {   
      return this._cargo;
   }

   public set setIdade(idade: number) {
      this._idade = idade;
   }
   public get getIdade(): number {   
      return this._idade;
   }

   public set setCpf(cpf: number) {
      this._cpf = cpf;
   }
   public get getCpf(): number {   
      return this._cpf;
   }

   public set setGenero(genero: Gender) {
      this._genero = genero;
   }
   public get getGenero(): string {   
      return this._genero;
   }

   public set setEndereco(endereco: Address) {
      this._endereco = endereco;
   }
   public get getEndereco(): Address {   
      return this._endereco;
   }

   public set setTelefone(telefone: number) {
      this._telefone = telefone;
   }
   public get getTelefone(): number {   
      return this._telefone;
   }
}
