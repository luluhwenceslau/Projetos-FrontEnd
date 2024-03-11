const resultadoElement = document.getElementById('resultado');

const entrada = prompt('Digite um número para saber a sua tabuada: ');
const entradaInt = parseInt(entrada);

let tabuadaHTML = `<h2>Tabuada do ${entradaInt}</h2><ul>`;
for (let contador = 1; contador <= 10; contador++) {
    const valor = entradaInt * contador;
    tabuadaHTML += `<li>${entradaInt} X ${contador} = ${valor}</li>`;
}

tabuadaHTML += `</ul>`;
resultadoElement.innerHTML = tabuadaHTML;

