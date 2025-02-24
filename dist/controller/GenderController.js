"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escolherGenero = escolherGenero;
const Gender_1 = require("../model/Gender");
function escolherGenero(prompt) {
    console.log("Escolha um gênero:");
    for (const key in Gender_1.Gender) {
        console.log(`${key}: ${Gender_1.Gender[key]}`);
    }
    const escolha = prompt("Digite o gênero desejado: "); // Captura a escolha do usuário
    if (escolha in Gender_1.Gender) {
        return Gender_1.Gender[escolha]; // Retorna o valor correspondente
    }
    return null; // Retorna null se a escolha não for válida
}
