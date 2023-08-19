let n1 = parseInt(prompt("Digite o primeiro número"))
let n2 = parseInt(prompt("Digite o segundo número"))
let op =  parseInt(prompt("Escolha a operção que deseja realizar:"
+ "\n1 = +; \n2 = -; \n3 = *; \n4 = /;"))

switch (op) {
    case 1:
        console.log(n1 + "  +  " + n2 + " = " + (n1 + n2))
        break;
    case 2:
        console.log(n1 + "  -  " + n2 + " = " + (n1 - n2))
        break;
    case 3:
        console.log(n1 + "  *  " + n2 + " = " + (n1 * n2))
        break;
    default:
        console.log(n1 + "  /  " + n2 + " = " + (n1 / n2))
        break;
}