import Bussiness from "../model/Bussiness";
export default class BussinessView {
   static exibirEmpresa(bussiness: Bussiness): string {
      return `
      Nome: ${bussiness.getNome} 
      CNPJ: ${bussiness.getCnpj}
      Endereço: ${bussiness.getEndereco.getRua}, ${bussiness.getEndereco.getBairro} n:${bussiness.getEndereco.getNumero} 
      Quantidade de Funcionarios: 
      Cargos Cadastrados:
      `;
    }

    
}
