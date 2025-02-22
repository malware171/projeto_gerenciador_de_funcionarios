"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PromptSync = require("prompt-sync");
let input = PromptSync();
class PrimaryScreenController {
    static escolherOpcao(option) {
        option = +input("Escolha uma opção: ");
        return option;
    }
}
exports.default = PrimaryScreenController;
