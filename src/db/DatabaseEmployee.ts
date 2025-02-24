import Employee from '../model/Employee'; 

export default class DatabaseEmployee {
   private static employees: Employee[] = [];

   public static addNovoFuncionario(funcionario: Employee): void {
      this.employees.push(funcionario)
   }

   public static filtroFuncionario(): string {
      let resultado: string = '';
      for(let i = 0; i < this.employees.length; i++) {
         resultado += `Funcionario ${i}: ${this.employees[i].getNomeFuncionario}`
      }
      return resultado;
   }

   public static removeFuncionarioDb(numero: number): void {
      for(let i = 0; i < this.employees.length; i++) {
         if (this.employees[i].getId === numero) {
            this.employees.splice(i, 1);
         } else {
            console.log("Funcionári não foi encontrado ")
         }
      }
   }
}
