import Role from '../model/Role'; // Importa a classe Role
import Employee from '../model/Employee'; // Importa a classe Employee

export default class Database {
   private static roles: Role[] = [];
   private static employees: Employee[] = [];

   public static listaCargos(): string {
      let resultado: string = ''; // Inicializa uma string para acumular os resultados
      for (let i = 0; i < this.roles.length; i++) {
         const role = this.roles[i];
         resultado += `ID: ${role.getId}, Nome: ${role.getNome}, Salário: ${role.getSalario}\n`; // Adiciona cada cargo à string
      }
      return resultado; // Retorna a string formatada
   }
}
