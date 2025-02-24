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
      let nome = prompt("Qual o nome completo do funcionário ?");
      let idade = +prompt(`Qual a idade de ${nome} ? `);
      let cpf = +prompt(`Qual o CPF de ${nome} ? `);
      
      // Chama a função escolherGenero e espera um valor do tipo Gender
      let genero: Gender | null = escolherGenero(prompt);
      if (!genero) {
         console.log("Gênero inválido. Tente novamente.");
         return; // Retorna se o gênero não for válido
      }
      
      let salario = +prompt(`Qual o salario de ${nome} ? `);
      let idCargo = +prompt(`Digite o numero referente ao cargo de ${nome} ? \n ${console.log(DatabaseRole.listaCargos())}`);
      let telefone = +prompt("Digite o numero de telefone: ");
      let endereco: Address = AddressController.cadastroEndereco();

      let cargo = DatabaseRole.filtroCargo(idCargo);
      let newFuncionario: Employee = new Employee(salario, cargo, nome, idade, cpf, genero, endereco, telefone);
      DatabaseEmployee.addNovoFuncionario(newFuncionario)
   }
}
