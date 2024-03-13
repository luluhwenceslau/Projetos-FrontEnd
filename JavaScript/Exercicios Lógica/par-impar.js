//verifica se o número é par ou impar
var num = 8;

function verificaNum(num){
    num % 2 == 0 ?  console.log(`O numero ${num} é par!`) : console.log(`O numero ${num} é impar!`);
}

verificaNum(num);
