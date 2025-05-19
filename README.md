Tarea construcción ANALIZADOR con ANTLR4 y JavaScript (Tema 39568_9)

Este proyecto implementa un analizador léxico y sintáctico para un subconjunto reducido del lenguaje de programación C. Utilizando ANTLR4 y Node.js, permite procesar programas escritos con sentencias if, printf y return con condiciones muy simples (0 o 1).

El sistema valida la sintaxis, genera una tabla de tokens, construye y muestra el árbol de análisis sintáctico, y finalmente traduce el código fuente a JavaScript para interpretarlo y ejecutar su lógica.

Caracteristicas de la Gramática

. Soporta sentencias if con condiciones simples (0 o 1).

. Permite bloques de código delimitados por llaves { ... }.

. Reconoce sentencias printf para imprimir cadenas literales.

. Incluye la sentencia return; para finalizar la ejecución.

. Permite la cláusula opcional else en las estructuras if.

. Gramática escrita en ANTLR4 con tokens específicos para palabras reservadas y símbolos.

. No soporta variables, expresiones aritméticas ni estructuras complejas.
