let condicao = true;
while(condicao === true){
    let idade = Number(prompt('Insira a sua idade'))
    if(idade < 18){
        console.log('você é menor de idade')
        condicao = false;
    }
} 

console.log('acabou o while')