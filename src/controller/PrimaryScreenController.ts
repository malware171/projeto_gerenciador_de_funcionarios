import PromptSync = require("prompt-sync")

let input = PromptSync()

export default class PrimaryScreenController {

   static escolherOpcao(option: number): number {
      option = +input("Escolha uma opção: ")
      return option
   }
}