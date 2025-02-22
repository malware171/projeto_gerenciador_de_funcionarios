
export default class Role { 
   private static idCounter = 0; // Contador estático para IDs
   private static roles: Role[] = []; // Array estático para armazenar cargos
   private id: number;
   private nome: string;
   private salario: number;

   constructor(nome: string, salario: number) {
      Role.idCounter++;
      this.id = Role.idCounter; 
      this.nome = nome;
      this.salario = salario;

      Role.roles.push(this);
   }

   public static getRoles(): Role[] {
      return Role.roles; 
   }

   static cadastrarCargo() {}

   public set setId(id: number) {
      this.id = id;
   }
   public get getId(): number {
      return this.id;
   }

   public set setNome(nome: string) {
      this.nome = nome;
   }
   public get getNome(): string {
      return this.nome;
   }

   public set setSalario(salario: number) {
      this.salario = salario;
   }
   public get getSalario(): number {
      return this.salario;
   }
}
