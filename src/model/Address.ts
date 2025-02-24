import IIdentity from "./IIdentity";

export default class Address implements IIdentity{
   private static _idCounter = 0;
   public id: number

   private _rua: string;
   private _bairro: string;
   private _cidade: string;
   private _estado: string;
   private _numero: number;

   constructor(rua: string, bairro: string, cidade: string, estado: string, numero: number) {
      this.id = this.gerarId()
      this._rua = rua;
      this._bairro = bairro;
      this._cidade = cidade;
      this._estado = estado;
      this._numero = numero;
   }

   public gerarId(): number {
      return Address._idCounter++;
   }
   public get getId(): number {
      return this.id 
   }

   public get getRua(): string {
      return this._rua;
   }

   public get getBairro(): string {
      return this._bairro;
   }

   public get getNumero(): number {
      return this._numero
   }

   
}