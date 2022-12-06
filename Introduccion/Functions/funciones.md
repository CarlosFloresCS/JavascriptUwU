# Funciones 
- Un conjunto de instrucciones que realiza una tarea o calcula un valor.

## Definir funciones
Definirla simplemente nombre a la función y especifica qué hacer cuando se llama a la función.

### 1. Declaración de función
Consta de la palabra function seguida de:
- El nombre de la función
- Una lista de parámetros
- La definición de la función

### 2. Expresiones **function**
Esta función puede ser anónima, no tiene por qué tener un nombre.
Sin embargo, puedes proporcionarle un nombre que permita que la función se refiera a si misma. (Para casos recursivos)

¿Cúando usarlo?, son convenientes cuando se pasa una función como argumento a otra función.

Una función se puede definir en función de una condición.

## Llamar funciones
Llamar a la función en realidad lleva a cabo las acciones especificadas con los parámatros indicados.

Una función se puede llamar a sí misma.

Hay otras formas de llamar funciones. A menudo hay casos en los que una función se tiene que llamar dinámicamente, o el número de argumentos de una función varía, o en los que el contexto de la llamada a la función se tiene que establecer en un determinado objeto específico en tiempo de ejecución.

## Ámbito de function
 Una función definida en el ámbito global puede acceder a todas las variables definidas en el ámbito global. 
 
 Una función definida dentro de otra función también puede acceder a todas las variables definidas en su función principal y a cualquier otra variable a la que tenga acceso la función principal.

 ## Ámbito y la pila de funciones
 ### 1. Recursión
 Una función se puede referir y llamarse a si mismo. En cierto modo, la recursividad es análoga a un bucle.

 Se puede convertir un algoritmo recursivo en uno no recursivo, pero la lógica suele ser más complejo.

 La recursividad en sí misma usa una pila: pila de funciones.

 ### 2. Funciones anidadas y cierre
- Solo se puede acceder a la función interna desde declaraciones en la función externa.
- La función interna forma un cierre: la función interna puede usar los argumentos y variables de la función externa, mientras que la función externa no puede usar los argumentos y variables de la función interna.

## Usar el objeto **arguments**
EL arguments funcion similiar a un arreglo. Donde *i* es la cantidad de parámetros de una función.

Es útil cunado no sabemos cuantos argumentos se pasarán a la función. Ya que tenemos como método **arguments.lenght** para saber el # de argumentos que se pasan a la función y luego acceder a cada argumento.

## Parámetros de función
Los parámetros de las funciones están predeterminados en undefined. Sin embargo, en algunas situaciones puede resultar útil establecer un valor predeterminado diferente. Esto es exactamente lo que hacen los parámetros predeterminados.

## Parámetros **rest**
Permite representar un número indefinido de argumentos como un arreglo.

## Funciones flecha
Tiene un sintaxxis más corta en comparación con las expresiones de función y no tiene su propio this, arguments, super o new.target. 

Son anónimas.
### 1. Funciones más cortas
En algunos patrones funcionales, las funciones más cortas son bienvenidas.

### 2. Sin this separado
Hasta las funciones flecha, cada nueva función definía su propio valor this (un nuevo objeto en el caso de un constructor, indefinido en llamadas a funciones en modo estricto, el objeto base si la función se llama como un "método de objeto", etc.)