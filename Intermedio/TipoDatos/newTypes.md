# Symbol
- Su init no utiliza new().
- Permite crear un identificador único.
- Se usa a menudo para identificar propiedades de objetos y asi evitar colisiones entre propiedades que pudieramos sobreescribir.
- Se comportan como propiedad privada

# Sets 
- Estructura de datos que permite solo valores únicos.
- Almacena valores únicos de cualquier tipo.

# Maps
- Estructura de datos que contiene pares clave-valor.
- Una clave solo puede ocurrir una vez.
- Bucle for devuelve una matriz de dos pares [clave,valor] por cada iteración.

# Weak
- Solo pueden almacenar referencias débiles osea que las keys deben ser objetos.
- No son iterables, no podemos usar for, foreach, forin.
- No tienen clear, solo se puede eliminar uno por uno.
- No tienen size.
- Si algunas de sus propiedades se vuelve nula, automaticamente los elimina.
## WeakSet
- add
- has
- delete
## WeakMap
- get
- set
- has
- delete

# Iterables
Es el elemento el cual su contenido se puede recorrer.

# Iterators
Es un apuntador que esta recorriendo los elementos.
1. Tiene dos elementos {value, done}, donde value es el valor donde esta apuntado y done es un booleano que nos indica si ya se acabo los elementos.

# Proxies
- Mecanismo que permite crear un objeto basado en un objeto literal inicial.
- Similar a las instancias de clases, pero usamos un objeto literal.
- Recibe objeto literal, realiza una copia y va permitir que realices ciertas operaciones.

