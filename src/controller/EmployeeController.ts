import PromptSync = require("prompt-sync");
import DatabaseEmployee from "../db/DatabaseEmployee";
import DatabaseRole from "../db/DatabaseRole";
import Address from "../model/Address";
import AddressController from "./AddressController";
import { escolherGenero } from "./GenderController";
import Employee from "../model/Employee";
import { Gender } from "../model/Gender";

let prompt = PromptSync();

export default class EmployeeController {

   public static cadastroFuncionario() {
      let nome = prompt("Qual o nome completo do funcionário ? ");
      let cpf = +prompt(`Qual o CPF de ${nome} ? `);
      
      let genero: Gender | null = escolherGenero(prompt);
      if (!genero) {
         console.log("Gênero inválido. Tente novamente.");
         return; 
      }
      
      let salario = +prompt(`Qual o salario de ${nome} ? `);
      let idCargo = +prompt(`Digite o numero referente ao cargo de ${nome} ? \n ${console.log(DatabaseRole.listaCargos())}`);
      let telefone = +prompt("Digite o numero de telefone: ");
      let endereco: Address = AddressController.cadastroEndereco();

      let cargo = DatabaseRole.filtroCargo(idCargo);
      let newFuncionario: Employee = new Employee(salario, cargo, nome, cpf, genero, endereco, telefone);
      DatabaseEmployee.addNovoFuncionario(newFuncionario)
   }

   public static removerFuncionario() {
      `${console.log(DatabaseEmployee.filtroFuncionario())}`
      let idFuncionario = +prompt("Digite o numero do funcionário que deseja remover: ");
      DatabaseEmployee.removeFuncionarioDb(idFuncionario);
   }

   
}
