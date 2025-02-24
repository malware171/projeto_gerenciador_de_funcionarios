import IIdentity from "./IIdentity";

export default class Role implements IIdentity { 
   private static _idCounter = 0;
   public id: number;

   private nome: string;
   private salario: number;

   constructor(nome: string, salario: number) {
      this.id = this.gerarId()
      this.nome = nome;
      this.salario = salario;
   }

   public gerarId(): number {
       return Role._idCounter++;
   }
   static cadastrarCargo() {}

   public set setId(id: number) {
      this.id = id;
   }
   public get getId(): number {
      return this.id;
   }

   public set setNome(nome: string) {
      this.nome = nome;
   }
   public get getNome(): string {
      return this.nome;
   }

   public set setSalario(salario: number) {
      this.salario = salario;
   }
   public get getSalario(): number {
      return this.salario;
   }
}
