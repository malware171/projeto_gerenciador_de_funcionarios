"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BussinessView {
    static exibirEmpresa(bussiness) {
        return `
      Nome: ${bussiness.getNome} 
      CNPJ: ${bussiness.getCnpj}
      Endereço: ${bussiness.getEndereco.getRua}, ${bussiness.getEndereco.getBairro} n:${bussiness.getEndereco.getNumero} 
      Quantidade de Funcionarios: 
      Cargos Cadastrados:
      `;
    }
}
exports.default = BussinessView;
