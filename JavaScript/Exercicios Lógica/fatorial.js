//node maiorNum.js para executar o arquivo diretamente pelo terminal
const prompt = require('prompt-sync')();
var fatorial = 1;

function calcFatorial(){
    const num = parseFloat(prompt('Digite um número: '));

    if(num == 0 || num == 1){
        console.log(`Fatorial de ${num} é 1`);
    } else{
        for(var c = 2; c <= num; c++){
            fatorial *= c;
        }
        console.log(`O fatorial de ${num} é ${fatorial}`);
    }
}

console.log(`\n==Calcula Fatorial==`);
calcFatorial();
