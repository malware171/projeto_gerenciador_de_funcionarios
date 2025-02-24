import Address from '../model/Address';

export default class DatabaseAddress {
   private static address: Address[] = []

   public static addNovoEndereco(endereco: Address): void {
      this.address.push(endereco)
   }

   public static listEndereco(): string {
      let resultado: string = '';
      for (let i = 0; i < this.address.length; i++) {
         const endereco = this.address[i];
         resultado += `ID: ${endereco.getId}, Logradouro: ${endereco.getRua}, Número: ${endereco.getNumero}\n`;
         return resultado
      }
   }
}
