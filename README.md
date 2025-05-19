Tarea construcción ANALIZADOR con ANTLR4 y JavaScript 
# Tema 39568_9

Este proyecto implementa un analizador léxico y sintáctico para un subconjunto reducido del lenguaje de programación C. Utilizando ANTLR4 y Node.js, permite procesar programas escritos con sentencias if, printf y return con condiciones muy simples (0 o 1).

## Caracteristicas de la Gramática

- Soporta sentencias if con condiciones simples (0 o 1).

- Permite bloques de código delimitados por llaves { ... }.

- Reconoce sentencias printf para imprimir cadenas literales.

- Incluye la sentencia return; para finalizar la ejecución.

- Permite la cláusula opcional else en las estructuras if.

- Gramática escrita en ANTLR4 con tokens específicos para palabras reservadas y símbolos.

- No soporta variables, expresiones aritméticas ni estructuras complejas.

# Requisitos

1. Node.js (v16+) desde la página oficial https://nodejs.org/es
   
2. Java Runtime (JRE) para ANTLR4, la version utilizada para el desarrolo de este proyecto es "java version "24.0.1" 2025-04-15" (recomendada para su ejecuccion)
   
3. Descargar Visual Studio Code https://code.visualstudio.com/
   
4. Descargar e instalar Git desde la página oficial https://git-scm.com/downloads
   
## Configuración Inicial

Estas instrucciones se pueden ejecutar en cualquiera de los siguientes entornos de línea de comandos:

- **Terminal de Linux o macOS** (Bash, Zsh, etc.)
- **Windows PowerShell**
- **Símbolo del sistema (CMD) en Windows**
- **Terminal integrada de Visual Studio Code**
- **GitBash**
  
### Pasos

1. Primero clonamos el repositorio dentro de una carpeta cualquiera (en el caso del ejemplo una llamada "prueba"):

    git clone https://github.com/AlejoPacheco52072/52072.git

2. Después nos dirigimos al directorio del proyecto:

     cd 52072

3. Y por ultimo abrimos el visual studio para trabajar con el comando:

    code . (<---- no olvidar el punto, es importante sin el nos abrira visual studio sin los archivos clonados)

![image](https://github.com/user-attachments/assets/40b5439b-9087-4492-ae48-5ba85b56ed58) (ejemplo en GITBASH)

En caso de no seleccionar una carpeta nueva y clonar el repositorio dentro de la misma como en el ejemplo, normalmente el proyecto se encontrara dentro de la carpeta "C:\Users\(usuario en cuestión)" del usuario que lo este ejecutando.

EJ: 

![image](https://github.com/user-attachments/assets/8b5e164f-fd41-46a3-ae41-c5cd52802d82) (ejemplo en CMD)

si bien es "distinto" el proceso es el mismo

 ---
## Uso Básico del proyecto

Una vez configurado el proyecto, podemos ejecutar el analizador de la siguiente forma:

1. Asegurarnos de tener los archivos de entrada en la carpeta `inputs/`. Dentro del input.txt (`inputs/input.txt`). (El programa cuenta tambien con La función leerCadena() pensada para que se pueda ingresar código manualmente por consola si no existe el archivo `inputs/input.txt`, para entender su funcionamiento revisar los comentarios dentro del `index.js`)


![image](https://github.com/user-attachments/assets/c14844e6-a00d-4595-82c7-5d05e7add80a)

Dentro de el input ya se encuentra un ejemplo por default pero también contamos con otros 4, (2 correctos, 2 incorrectos dentro de la misma carpeta) que podemos reemplazar dentro del `inputs/input.txt` para poder probar

![image](https://github.com/user-attachments/assets/38707c11-3717-4b00-86ed-3a3d6013fa6b) (ejemplos en cuestión)


2. Una vez ya tenemos el `input.txt` con el ejemplo deseado ejecutamos el programa con Node.js desde la terminal de vs code (Ir a **Terminal > Nuevo terminal** en la barra superior) dentro de la terminal colocamos:

   node index.js

![image](https://github.com/user-attachments/assets/8cc9a777-f4e6-41ae-bbb3-f1cc46e6abde)

El resultado en un ejemplo correcto deberia ser

![image](https://github.com/user-attachments/assets/d67944e0-4b33-4f0a-992d-927004f12a98)

En caso de tener algun error por ej el `inputs/EJEMPLOINPUTINCORRECTO1.txt` se nos mostrara como:

![image](https://github.com/user-attachments/assets/8d21a516-d737-4ddc-8e74-01cd154b9091)

![image](https://github.com/user-attachments/assets/061b3b11-7be4-49c6-ab7e-25e2510e293f)

mostrandonos el error al final

## El programa muestra:

-  Una tabla con los lexemas y sus respectivos tokens.
  
-  Errores de sintaxis, si los hubiera, con línea y descripción.
  
-  El árbol de análisis sintáctico en formato textual.
  
-  La traducción del código fuente a JavaScript.
  
-  La ejecución del código traducido en consola.
  
 (El sistema valida la sintaxis, genera una tabla de tokens, construye y muestra el árbol de análisis sintáctico, y finalmente traduce el código fuente a JavaScript para interpretarlo y ejecutar su lógica.)


  ---

## Comentarios Finales

Este proyecto fue desarrollado para la materia de Sintaxis y Semántica de los Lenguajes por el alumno Alejo Pacheco (legajo 52072)

El repositorio contiene los archivos necesarios para compilar y ejecutar el proyecto, junto con pasos que nos permiten la correcta ejeccucion del mismo.

Gracias por su tiempo. 🙂









