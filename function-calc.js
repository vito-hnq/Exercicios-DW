function calculadora(a, b, operador) {
    if (operador === "+") {
        return a + b;
    } else if (operador === "-") {
        return a - b;
    } else if (operador === "*") {
        return a * b;
    } else if (operador === "/") {
        if (b !== 0) {
            return a / b;
        } else {
            return "Erro: Divisão por zero!";
        }
    } else {
        return "Operador inválido!";
    }
}

let numero1 = 2;
let numero2 = 3;
let operador = "+"; 

console.log("Resultado:", calculadora(numero1, numero2, operador));
