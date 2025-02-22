import PrimaryScreen from "./view/PrimaryScreen";
import Bussinees from "./model/Bussiness";
import Address from "./model/Address";

const ENDERECO: Address = new Address("Rodovia BR 373", "Vila das Flores", "Prudentópolis", "PR", 270)
const EMPRESA: Bussinees = new Bussinees("Agropeças San't Ana", 27666834000197, ENDERECO, 34464816)

const screen = new PrimaryScreen(EMPRESA);

screen.getFirstScreen();