import PromptSync = require("prompt-sync")

let input = PromptSync()

export default class RoleController {

   static addNewRole(): { nome: string; descricao: string; salario: number } {
      let nomeCargo = input("Qual o nome do cargo? ");
      let descricaoCargo = input(`Qual a descrição do cargo ${nomeCargo} ?`);
      let salarioCargo = +input(`Qual o salario base do cargo ${nomeCargo} ? `);

      return { nome: nomeCargo, descricao: descricaoCargo, salario: salarioCargo };
   }
}