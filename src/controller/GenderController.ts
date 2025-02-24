import { Gender } from '../model/Gender';

export function escolherGenero(prompt: any): Gender | null {

   console.log("Escolha um gênero:");
   for (const key in Gender) {
      console.log(`${key}: ${Gender[key]}`);
   }

   const escolha = prompt("Digite o gênero desejado: "); // Captura a escolha do usuário

   if (escolha in Gender) {
      return Gender[escolha as keyof typeof Gender]; // Retorna o valor correspondente
   }
   return null; // Retorna null se a escolha não for válida
}
