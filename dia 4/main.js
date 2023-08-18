let fome = false
let dinheiro = false
let restaurante = false

let rUHungry = prompt("você está com fome? (s/n)")
if (rUHungry === "s") {
    fome = true
}
let uGotMoney = prompt("Você tem dinheiro? (s/n)")
if (uGotMoney === "s"){
    dinheiro = true
}
let itsOpen = prompt("Seu restaurante favorito está aberto? (s/n)")
if (itsOpen === "s"){
    restaurante = true
}
 
if(!fome || !dinheiro) {
    console.log("Hoje a janta será em casa")
}else if(fome && dinheiro && !restaurante) {
    console.log("Peça um delivery") 
}else {
    console.log("Hoje o jantar será no seu restaurante preferido")
}


   