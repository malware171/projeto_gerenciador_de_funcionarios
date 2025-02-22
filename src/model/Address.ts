export default class Address {
   private _rua: string;
   private _bairro: string;
   private _cidade: string;
   private _estado: string;
   private _numero: number;

   constructor(rua: string, bairro: string, cidade: string, estado: string, numero: number) {
      this._rua = rua;
      this._bairro = bairro;
      this._cidade = cidade;
      this._estado = estado;
      this._numero = numero;
   }
   public get getRua(): string {
      return this._rua;
   }
   public set setRua(nomeRua: string) {
      this._rua = nomeRua;
   }
   public get getBairro(): string {
      return this._bairro;
   }
   public set setBairro(nomeBairro: string) {
      this._bairro = nomeBairro;
   }
   public get getCidade(): string {
      return this._cidade;
   }
   public set setCidade(nomeCidade: string) {
      this._cidade = nomeCidade;
   }
   public get getEstado(): string {
      return this._estado;
   }
   public set setEstado(nomeEstado: string) {
      this._estado = nomeEstado;
   }
   public get getNumero(): number {
      return this._numero
   }
   public set setNumero(numeroEndereco: number) {
      this._numero = numeroEndereco;
   }
}