// Primitivas y objetos
let s_prim = 'foo'
let s_obj = new String(s_prim)
console.log(typeof s_prim)                      // Registra "string"
console.log(typeof s_obj)                       // Registra "object"

// str.lenght
let nombre = "carlos"
console.log(nombre.length);                     // 6

// fromCharCode
console.log(String.fromCharCode(65,66,67));     //ABC

// fromCodePoint
console.log(String.fromCodePoint(65,67));       //AC

// raw
// lo que hace es `foo${2 + 3}bar${'Java' + 'Script'}baz`
console.log(
    String.raw({
        raw: ['foo', 'bar', 'baz']
      }, 2 + 3, 'Java' + 'Script')
);                                              // 'foo5barJavaScriptbaz'

// String.prototype.charAt(index)
console.log(nombre.charAt(0));                  // c

// String.prototype.charCodeAt(index)
console.log(nombre.charCodeAt(1));              // 97

// String.prototype.codePointAt(pos)
console.log(nombre.codePointAt(1));             // 97

// String.prototype.concat(str[, ...strN])
const str1 = 'Hello';
const str2 = 'World';
console.log(str1.concat(' ', str2));            // "Hello World"

// String.prototype.includes(searchString [, position])
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`); // "The word "fox" is in the sentence"

// String.prototype.endsWith(searchString[, length])
const str1endsWith = 'Cats are the best!';
console.log(str1endsWith.endsWith('best!'));    // true
console.log(str1endsWith.endsWith('best', 17)); // true

const str2endsWith = 'Is this a question?';
console.log(str2endsWith.endsWith('question')); // false

// String.prototype.indexOf(searchValue[, fromIndex])
"Blue Whale".indexOf("Blue")                    // 0
"Blue Whale".indexOf("Blute")                   // -1
"Blue Whale".indexOf("Whale",0)                 // 5
"Blue Whale".indexOf("Whale",5)                 // 5
"Blue Whale".indexOf("",9)                      // 9
"Blue Whale".indexOf("",10)                     // 10
"Blue Whale".indexOf("",11)                     // 10

// String.prototype.lastIndexOf(searchValue[, fromIndex])
"canal".lastIndexOf("a")   // returns 3
"canal".lastIndexOf("a",2) // returns 1
"canal".lastIndexOf("a",0) // returns -1
"canal".lastIndexOf("x")   // returns -1


// String.prototype.localeCompare(compareString[, locales[, options]])

// La letra "a" va antes que "c" por lo que entrega un valor negativo
'a'.localeCompare('c'); // -2 o -1 (o cualquier otro valor negativo)

// Alfabéticamente la palabra "check" va después que "against" por lo que resulta
// en un valor positivo.
'check'.localeCompare('against'); // 2 o 1 (u otro valor positivo)

// "a" y "a" son equivalentes por lo que resulta en un valor neutral de cero.
'a'.localeCompare('a'); // 0

// String.prototype.match(regexp)
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);
console.log(found);                             // Array ["T", "I"]

// String.prototype.matchAll(regexp)
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';
const array = [...str.matchAll(regexp)];
console.log(array[0]);                          // Array ["test1", "e", "st1", "1"]
console.log(array[1]);                          // Array ["test2", "e", "st2", "2"]