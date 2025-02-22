"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PrimaryScreen_1 = require("./view/PrimaryScreen");
const Bussiness_1 = require("./model/Bussiness");
const Address_1 = require("./model/Address");
const ENDERECO = new Address_1.default("Rodovia BR 373", "Vila das Flores", "Prudentópolis", "PR", 270);
const EMPRESA = new Bussiness_1.default("Agropeças San't Ana", 27666834000197, ENDERECO, 34464816);
const screen = new PrimaryScreen_1.default(EMPRESA);
screen.getFirstScreen();
