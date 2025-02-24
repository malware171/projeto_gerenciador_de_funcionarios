import PromptSync = require("prompt-sync")
import Role from "../model/Role";
import DatabaseRole from "../db/DatabaseRole";

let input = PromptSync()

export default class RoleController {

   static addNewRole(): Role {
      let nomeCargo = input("Qual o nome do cargo? ");
      let salarioCargo = +input(`Qual o salario base do cargo ${nomeCargo} ? `);

      let newRole: Role = new Role(nomeCargo, salarioCargo);

      DatabaseRole.addNovoCargo(newRole)
      return newRole;
   }
}