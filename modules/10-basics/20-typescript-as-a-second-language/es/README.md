En nuestro proyecto, TypeScript se enseña como segundo lenguaje. Por eso, para entender mejor el curso, conviene que ya domines JavaScript u otros lenguajes de programación.

También necesitas tener una idea de los tipos de datos, las variables, las estructuras condicionales, los bucles, las funciones, las propiedades y los métodos de los objetos, así como de las funciones anónimas o lambda.

Aprender un segundo lenguaje es más fácil que aprender el primero, por eso la estructura del material cambia mucho. Aquí repasamos las construcciones básicas para conocer rápido la sintaxis. Después pasamos a las tareas para las que se aprende TypeScript.

En esta lección aprenderemos qué es TypeScript y veremos sus características, su instalación y su ejecución.

## ¿Qué es TypeScript?

TypeScript es JavaScript con una sintaxis adicional para indicar los tipos de datos. El primero es un lenguaje de tipado estático y el segundo, de tipado dinámico.

Para conocer mejor TypeScript, lo compararemos con JavaScript.

Los lenguajes de tipado dinámico como JavaScript tienen un intérprete, un programa que ejecuta el código línea por línea sin un análisis previo:

```bash
# node (Node.js) es el intérprete de JavaScript
# El código se ejecuta inmediatamente
node index.js
```

Si hay errores de tipo en este código, por ejemplo, si a una función le llega un número de tipo `BigInt` en lugar de un número normal, solo nos enteraremos del error al ejecutar el código:

```javascript
function sum(a, b) {
  return a + b;
}

sum(10n, 5); // ¡ups!
// 10n es un número de tipo BigInt, al sumarlo con un número normal se produce un error en tiempo de ejecución
// Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Los lenguajes de tipado estático como TypeScript funcionan de otra manera. Tienen varias ventajas:

- Detectan ciertos tipos de errores antes de ejecutar el código
- Facilitan la refactorización del código
- Aprovechan por completo las capacidades del editor: autocompletado, navegación por el código, entre otras

Antes de ejecutar el código en TypeScript, hay que compilarlo.

Durante la compilación se verifica que el programa sea **seguro en cuanto a tipos**, es decir, que no contenga errores como el del ejemplo anterior. Si el compilador encuentra una discrepancia de tipos, detiene la compilación y muestra advertencias sobre dónde no coinciden los tipos.

El mismo ejemplo en TypeScript:

```typescript
function sum(a: number, b: number) {
  return a + b;
}

sum(10n, 5);
// Durante la compilación se producirá un error con este texto
// Argument of type 'bigint' is not assignable to parameter of type 'number'
```

El código anterior no solo no se ejecutará, sino que tampoco pasará la compilación. El compilador de TypeScript detendrá el proceso y señalará el error de discrepancia de tipos.

Si miras la definición de la función, verás que es prácticamente el mismo JavaScript, excepto por la descripción de los tipos de las variables de entrada de la función. Ahí se indica que los parámetros `a` y `b` son de tipo `number`. De manera parecida se anota con tipos el resto del código en TypeScript. En algunos casos las descripciones de tipos pueden ser muy complejas, pero la idea sigue siendo la misma.

No se puede decir de forma definitiva qué enfoque es mejor, el tipado estático o el dinámico. Todo depende de la situación concreta, y hay proyectos exitosos en lenguajes de ambos tipos.

## ¿Cuáles son las características de TypeScript?

TypeScript se ha convertido en uno de los lenguajes tipados más populares porque:

- Lo desarrolló Microsoft
- Es casi completamente compatible con JavaScript en cuanto a capacidades y tipos; en otras palabras, es "JavaScript con descripción de tipos" o un "superconjunto de JavaScript"
- Su compilador admite la **transpilación**: puede convertir código TypeScript en código JavaScript eliminando las definiciones de tipos
- Tiene tipado estricto

Veamos con más detalle esta última característica.

### Tipado estricto

El tipado estricto no está relacionado con el estático. Indica hasta qué punto el lenguaje permite conversiones automáticas de tipos. Es decir, un lenguaje estático puede no ser estricto, y al revés.

Por ejemplo, en JavaScript podemos sumar un número y una cadena. Cuando el lenguaje encuentra esta construcción, convierte los tipos automáticamente: `10 + 'one'`. En TypeScript esto no funciona. Muestra un error:

> _The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type_

Muchos lenguajes dinámicos son de tipado estricto. Por ejemplo, Ruby y Python. El tipado estricto solo mejora el lenguaje y no complica la programación.

Hemos visto las ventajas y características de TypeScript. Ahora podemos aprender a instalarlo.

## Cómo instalar y ejecutar TypeScript

TypeScript en sí está escrito en TypeScript, que luego se transpila a JavaScript y se distribuye como un paquete npm normal. Por eso la instalación de TypeScript es muy sencilla:

```bash
# Node.js debe estar instalado
# Dentro del proyecto donde se usará TypeScript
npm install typescript
```

Luego hay que crear archivos con código TypeScript. Tienen la extensión _ts_. El compilador de TypeScript está disponible a través de la utilidad `tsc`:

```bash
npx tsc index.ts
```

El resultado es un archivo con código JavaScript que ya se puede ejecutar con Node.js:

```bash
node index.js
```

También puedes instalar el paquete [ts-node](https://github.com/TypeStrong/ts-node), que compila y ejecuta a la vez. Este paquete ofrece un REPL para experimentar con TypeScript.

En esta lección conocimos el lenguaje TypeScript. Aprendimos que es el mismo JavaScript, pero con una sintaxis adicional para indicar los tipos de datos.

Aun así, no se puede decir cuál de los dos lenguajes es mejor. Todo depende de la tarea concreta y de las características del lenguaje.

En esta lección también conocimos las características de TypeScript y aprendimos a instalarlo y ejecutarlo.
