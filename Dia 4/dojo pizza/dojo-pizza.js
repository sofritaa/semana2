function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}

var pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(pizza1);

var pizza2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(pizza2);

var pizza3 = pizzaOven("harina", "blanca", ["feta"], ["tomate", "pepino"]);
console.log(pizza3);

var pizza4 = pizzaOven("integral", "bbq", ["chanco"], ["pepperoni", "salchicha"]);
console.log(pizza4);

var tipoCortezas = [
    "estilo Chicago",
    "lanzada a mano",
    "harina",
    "integral",
    "coliflor"
];
var tipoSalsa = [
    "tradicional",
    "marinara",
    "blanca",
    "bbq"
];
var quesos = [
    "feta",
    "mozzarella",
    "chanco",
    "azul",
    "parmesano"
];

var salsas = [
    "pepino",
    "salchicha",
    "champiñones",
    "aceitunas",
    "cebollas",
    "aceitunas",
    "peperoni"
];
function randomRange(max, min) {
    var aleatoria = Math.floor(Math.random() * max - min) + min;
    return aleatoria;
}

function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}
function randomPizza() {
    var pizza = {};
    pizza.tipoCorteza = randomPick(tipoCortezas);
    pizza.tipoSalsa = randomPick(tipoSalsa);
    pizza.quesos = [];
    pizza.salsas = [];
    for (var i = 0; i < randomRange(5, 1); i++) {
        pizza.quesos.push(randomPick(quesos));
    }
    for (var i = 0; i < randomRange(4, 0); i++) {
        pizza.salsas.push(randomPick(salsas));
    }
    return pizza;
}

console.log(randomPizza());