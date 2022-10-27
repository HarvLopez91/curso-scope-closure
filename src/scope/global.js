// variables

var a; // declarando
var b = 'b'; // declaramos y asignamos
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaración

// Global Scope
var fruit = 'Apple'; // global
console.log(fruit);

function bestFruit(){
    console.log(fruit);
}

bestFruit();

//Otra forma de crear una variable global
function countries(){
    country = 'Colombia'; // global //No declaramos la variable, por lo tanto sera (por defecto) global
    console.log(country);
}

countries();
console.log(country)