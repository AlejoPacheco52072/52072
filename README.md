Tarea construcción ANALIZADOR con ANTLR4 y JavaScript 
# Tema 39568_9

Este proyecto implementa un analizador léxico y sintáctico para un subconjunto reducido del lenguaje de programación C. Utilizando ANTLR4 y Node.js, permite procesar programas escritos con sentencias if, printf y return con condiciones muy simples (0 o 1).

El sistema valida la sintaxis, genera una tabla de tokens, construye y muestra el árbol de análisis sintáctico, y finalmente traduce el código fuente a JavaScript para interpretarlo y ejecutar su lógica.

## Caracteristicas de la Gramática

- Soporta sentencias if con condiciones simples (0 o 1).

- Permite bloques de código delimitados por llaves { ... }.

- Reconoce sentencias printf para imprimir cadenas literales.

- Incluye la sentencia return; para finalizar la ejecución.

- Permite la cláusula opcional else en las estructuras if.

- Gramática escrita en ANTLR4 con tokens específicos para palabras reservadas y símbolos.

- No soporta variables, expresiones aritméticas ni estructuras complejas.
  
# Requisitos

1. Node.js (v16+)
2. npm (incluido con Node.js)
3. Java Runtime (JRE) para ANTLR4
4. Visual Studio Code

## Configuración Inicial

Estas instrucciones se pueden ejecutar en cualquiera de los siguientes entornos de línea de comandos:

- **Terminal de Linux o macOS** (Bash, Zsh, etc.)
- **Windows PowerShell**
- **Símbolo del sistema (CMD) en Windows**
- **Terminal integrada de Visual Studio Code**

### Pasos
- Primero clonamo el repositorio:
  
