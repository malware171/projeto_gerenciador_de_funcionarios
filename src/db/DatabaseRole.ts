import Role from '../model/Role';

export default class DatabaseRole {
   private static roles: Role[] = [];

   public static addNovoCargo(cargo: Role): void {
      this.roles.push(cargo)
   }

   public static listaCargos(): string {
      let resultado: string = ''; 
      for (let i = 0; i < this.roles.length; i++) {
         const role = this.roles[i];
         resultado += `ID: ${role.getId}, Nome: ${role.getNome}, Salário: ${role.getSalario}\n`; 
      }
      return resultado;
   }

   public static filtroCargo(numero: number): Role | null {
      for(let i = 0; i < this.roles.length; i++) {
         if (this.roles[i].getId === numero) {
            return this.roles[i]
         }
      } return null
   }
}
