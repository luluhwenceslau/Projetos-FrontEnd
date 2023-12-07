/*
let num = [5, 8, 2, 9, 3]
num.push(1) //acrescenta um valor
num.sort() //ordena o vetor
console.log(`Nosso vetor é o: ${num} `)
console.log(`O vetor possui ${num.length} posições`)

console.log('\n---------------------------')
console.log('Vetor com repetição')
let = valores = [8, 1, 7, 4, 2, 9]
for(let pos = 0; pos<valores.length; pos++){
    console.log(`A posição ${pos} possui o valor ${valores[pos]}`)
}
*/
//versão mais simplificada
let num = [1, 2, 3, 4]

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
let valor = num.indexOf(2)
//busca de valores com método .indexOf()  Ex: num.indexOf(3)
console.log(`\nO valor está na posição ${valor}`)