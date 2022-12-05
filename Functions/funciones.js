// Declaración de función
function square(number) {
    return number * number;
}

// Expresiones function
const squareExp = function (number) {
    return number * number;
}

// Expresiones function con un nombre
const factorial = function f(n) {
    return n < 2 ? 1 : n * f(n-1);
} //console.log(factorial(3));

// Expresiones function con argumento a otra función
function map(f,a) {
    let result = [];
    let i;
    for (i = 0; i != a.length; i++) result[i] = f(a[i]);
    return result;
}

const f = function (x) {
    return x * x * x;
};
//let numbers = [0,1,2,5,10];
//let cube = map(f,numbers);
//console.log(cube);


// Ámbito función
//      Ámbito global
var num1 = 20, num2 = 3, name = "Carlos";
function multiply() {
    return num1 * num2;
}

//      Función anidada
function getScore() {
    var num1 = 2, num2 = 3;

    function add() {
        return name + " anoto " + (num1 + num2);
    }
    return add();
} // console.log(getScore());

// Recursividad
var x = 0;
// no recursivo
while (x < 10) {
    x++;
}
// si recursivo 
function loop(x){
    if (x >= 10) return;
    loop(x+1);
} // loop(0);

// Funciones anidadas
function addSquares(a,b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
} //a = addSquares(2,3);

// Funciones cierre
function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}
fn_inside = outside(3); // console.log(fn_inside()) NaN
result = fn_inside(5); // 8
result1 = outside(3)(5); // 8

// Uso de Arguments
function myConcat(separator) {
    var result = "";
    var i;
    for (i = 1; i < arguments.length; i++) {
        result += arguments[i] + separator;
    }
    return result;
} // myConcat(", ", "red", "orange", "blue")

// Sin parámetros predeterminados
function multiply(a, b) {
    b = typeof b !== "undefined" ? b : 1;
    return a * b;
} //console.log(multiply(5));

// Con parámetros predeterminados
function multiply(a, b = 1) {
    return a * b;
  } //multiply(5); // 5

// Parámetros rest
function multiplyRest(multiplier, ...theArgs){
    return theArgs.map((x) => multiplier * x);
}
var arr = multiply(2,1,2,3); //console.log(arr);

// Funciones flecha
// Funciones más cortas
var a = ["hidrogeno", "helio", "litio", "berilio"];
var a2 = a.map(function(s) {
    return s.length;
});//console.log(a2);
var a3 = a.map((s) => s.length); //console.log(a3);

// This
function Person() {
    this.age = 0;  
    setInterval(() => {
      this.age++; // |this| propiamente se refiere al objeto person
    }, 1000);
  }
var p = new Person();
  