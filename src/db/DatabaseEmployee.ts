import Employee from '../model/Employee'; 

export default class DatabaseEmployee {
   private static employees: Employee[] = [];

   public static addNovoFuncionario(funcionario: Employee): void {
      this.employees.push(funcionario)
   }
}
