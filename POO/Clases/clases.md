# Clases
Las clases son funciones especiales, son una mejora sintáctica sobre la herencia basada en prototipos de JavaScript.

## Declaración de clases
Usamos la palabra reservada class y un nombre.

## Alojamiento
- La diferencia entre declaración de funciones y clases es que en funciones son alojadas y en claes no lo son.
- Necesitas declarar tu clase y luego acceder a ella.

## Expresiones de clases
- Es otra manera de definir una clase. Pueden ser nombradas o anónimas.
- El nombre dado a la expresión de clase es local dentro del cuerpo de la misma.

## Cuerpo de la clase
### 1. Modo estricto
- El cuerpo de las declaraciones de clase **{}** y expresiones de clase son ejecutadas en modo estricto.
- EL código escrito aqui esta sujeto a una sintaxis más estricta para aumentar el rendimiento.

### 2. Constructor
- Es un método especial para crear e inicializar un objeto  creado con una clase.
- Usa la palabra reservada **super** para llamar al constructor de una superclase.

### 3. Métodos prototipo
- Uso de this.

### 4. Métodos estáticos
- Usa palabra reservada static.
- Son llamados sin instanciar su clase y no pueden ser llamados mediante una instancia de clase.
- Se usan a menudo para crear funciones de utilidad para una aplicación.

## Subclases con **extends**
- Usa palabra reservada extends para crear una clase hija.
- Debes usar Object.setPrototipeOf cuando quieres extender objetos literales.

## Especies
- Permite sobreescribir constructores por defecto.

## Superclases con **super**
Es usada para llamar funciones del objeto padre.

## Mix-ins
- Subclases abstractas
- Puede heredar métodos adicionales sin heredar de una clase.
- más info con este [video](https://www.youtube.com/watch?v=h4m-SIw9nEg)
