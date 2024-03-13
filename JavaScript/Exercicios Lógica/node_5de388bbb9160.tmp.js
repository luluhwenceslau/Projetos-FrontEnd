const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function maiorEntreDois() {
    rl.question("Digite o primeiro número: ", (num1) => {
        rl.question("Digite o segundo número: ", (num2) => {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            if (isNaN(num1) || isNaN(num2)) {
                console.log("Por favor, insira números válidos.");
            } else {
                if (num1 > num2) {
                    console.log(`O maior número é: ${num1}`);
                } else if (num2 > num1) {
                    console.log(`O maior número é: ${num2}`);
                } else {
                    console.log("Os números são iguais.");
                }
            }

            rl.close();
        });
    });
}

maiorEntreDois();
