import Address from "./Address";
import Employee from "./Employee";
import DatabaseRole from "../db/DatabaseRole";
import EmployeeController from "../controller/EmployeeController";
import RoleController from "../controller/RoleController";

export default class Bussinees {
   private _nome: string;
   private _cnpj: number;
   private _endereco: Address;
   private _telefone: number;
   private _funcionarios: Employee[] =[]

   constructor(nome: string, cnpj: number, endereco: Address, telefone: number) {
      this._nome = nome;
      this._cnpj = cnpj;
      this._endereco = endereco;
      this._telefone = telefone;
   }

   public addFuncionario(): void {
      EmployeeController.cadastroFuncionario()
   }
  
   

   removerFuncionario() {}

   listarFuncionario() {}

   public addNewRole(): void {
      RoleController.addNewRole()
   }
   public listarCargo(): string {
      return DatabaseRole.listaCargos()
   }
   public atualizarCargo() {

   }

   

   public get getNome(): string {
      return this._nome;
   }

   public get getCnpj(): number {
      return this._cnpj;
   }

   public get getEndereco(): Address {
      return this._endereco;
   }

   public get getTelefone(): number {
      return this._telefone;
   }

   public get getFuncionarios(): Employee[] {
      return this._funcionarios;
   }

   public set setNome(nome: string) {
      this._nome = nome;
   }

   public set setCnpj(cnpj: number) {
      this._cnpj = cnpj;
   }

   public set setEndereco(endereco: Address) {
      this._endereco = endereco;
   }

   public set setTelefone(telefone: number) {
      this._telefone = telefone;
   }
}
