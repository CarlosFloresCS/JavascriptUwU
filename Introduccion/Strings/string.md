# Strings
- El objeto **String** se utiliza para representar y manipular una secuencia de caracteres.

## Primitivas y objetos
- Las cadenas literales, denotadas por comillas simples o dobles, son primitivas.
- Las cadenas que son devueltas de llamadas a String en un contexto de constructor, usando el *new*, son objetos.

## Constructor
### 1. **String()**: Crea un nuevo objeto *String*.
## Propiedades de la instancia
### 1. **str.lenght**: Devuelve la longitud de una cadena en unidades UTF-16.
## Métodos estáticos
### 1. **String.fromCharCode(num1, ..., numN)** 
    Donde num1, ...., numN es una secuencia de números con los valores Unicode.
    Devuelve una cadena.

### 2.**String.fromCodePoint()**
    Donde num1, ..., numN es una secuencia de puntos de código.
    Devuelve una cadena.

### 3.**String.raw()**
    Devuelve una cadena creada a partir de una platilla literal sin formato.

## Métodos de instancia
### 1. **String.prototype.charAt(index)**
    Devuelve el caracter en el index especificado.
### 2. **String.prototype.charCodeAt(index)**
    Devuelve el número que es el valor ASCII en el index dado.
### 3. **String.prototype.codePointAt(pos)**
    Devuelve un número entero no negativo que es el valor del punto de código del punto de código codificado en UTF-16 que comienza en la pos especificada.
### 4. **String.prototype.concat(str[, ...strN])**
    Combina el texto de dos o más cadenas y devuelve una nueva cadena.
### 5. **String.prototype.includes(searchString [, position])**
    Determina si la cadena de la llamada contiene a searchString.
    Donde la posicion es opcional.
    Devuelve un booleano.
### 6. **String.prototype.endsWith(searchString[, length])**
    Determina si una cadena termina con los caracteres de la cadena searchString.
    Donde length es opcional.
    Devuelve un booleano.
### 7. **String.prototype.indexOf(searchValue[, fromIndex])**
    Devuelve el índice dentro del objeto String llamador de la primera aparición de searchValue o, -1 si no lo encontró.
    Donde fromIndex es opcional y seria el índice desde donde puede empezar a buscar.
### 8. **String.prototype.lastIndexOf(searchValue[, fromIndex])**
    Devuelve el índice dentro del objeto String llamador de la última aparición de searchValue, o -1 si no lo encontró.
    Donde fromIndex es opcional y seria el índice desde donde puede empezar a buscar.
### 9. **String.prototype.localeCompare(compareString[, locales[, options]])**
    Devuelve un número que indica si la cadena de referencia compareString viene antes, después o es equivalente a la cadena dada en el orden de clasificación.
    Los argumentos locales y options permiten a las aplicaciones especificar el idioma cuyo orden alfabético se debe usar y configurar el comportamiento de la función.

    Retornara: 
    Negativo cuando referenceStr ocurre antes que compareString.
    Positivo cuando referenceStr ocurre después que compareString.
    Retorna 0 si son equivalentes.

### 10. **String.prototype.match(regexp)**
    Se utiliza para hacer coincidir la expresión regular regexp con una cadena.
### 11. **String.prototype.matchAll(regexp)**
    Devuelve un iterador de todas las coincidencias de regexp.