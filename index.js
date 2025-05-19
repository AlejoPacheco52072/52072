import llanta52072Lexer from "./generated/llanta52072Lexer.js";
import llanta52072Parser from "./generated/llanta52072Parser.js";
import llanta52072Visitor from "./generated/llanta52072Visitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from "readline";
import fs from "fs";

class ErrorListener extends antlr4.error.ErrorListener {
  syntaxError(recognizer, offendingSymbol, line, column, msg) {
    console.error(`Error sintáctico en línea ${line}:${column} - ${msg}`);
  }
}

class Translator extends llanta52072Visitor {
  constructor() {
    super();
    this.js = "";
  }

  visitPrograma(ctx) {
    ctx.instrucciones().accept(this);
    return this.js;
  }

  visitInstrucciones(ctx) {
    ctx.instruccion().forEach(inst => inst.accept(this));
  }

  visitDecision(ctx) {
    const cond = ctx.condicion().getText();
    this.js += `if (${cond}) {`;
    ctx.sentencia(0).accept(this);
    this.js += "}";
    if (ctx.getChildCount() === 9) {
      this.js += " else {";
      ctx.sentencia(1).accept(this);
      this.js += "}";
    }
    this.js += "\n";
  }

  visitSentencia(ctx) {
    if (ctx.salida) {
      ctx.salida().forEach(s => s.accept(this));
    } else if (ctx.terminar()) {
      ctx.terminar().accept(this);
    }
  }

  visitSalida(ctx) {
    const str = ctx.STRING().getText();
    this.js += `console.log(${str});\n`;
  }

  visitTerminar(ctx) {
    this.js += `return;\n`;
  }
}

async function main() {
  let input;
  try {
    input = fs.readFileSync('./inputs/input.txt', 'utf8');
  } catch (err) {
    input = await leerCadena();
    console.log(input);
  }

  // === TOKEN TABLA ===
  const inputStream = CharStreams.fromString(input);
  const lexer = new llanta52072Lexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  tokenStream.fill();
  const tokens = tokenStream.tokens;
  const symbolicNames = lexer.constructor.symbolicNames;

  console.log("\nTabla de lexemas y tokens:");
  console.table(
    tokens
      .filter(t => t.type !== antlr4.Token.EOF)
      .map(t => ({
        lexema: t.text,
        token: symbolicNames[t.type] || `Token ${t.type}`
      }))
  );

  // === PARSEO ===
  const parser = new llanta52072Parser(tokenStream);
  parser.removeErrorListeners();
  parser.addErrorListener(new ErrorListener());
  const tree = parser.programa();

  if (parser._syntaxErrors > 0) {
    console.error("\nSe encontraron errores de sintaxis.");
    process.exit(1);
  }

  // === ÁRBOL DE ANÁLISIS SINTÁCTICO ===
  console.log("\nÁrbol de derivación:");
  console.log(tree.toStringTree(parser.ruleNames));

  // === INTERPRETACIÓN ===
  console.log("\nTraducción a JavaScript e interpretación:");
  const translator = new Translator();
  const jsCode = translator.visit(tree);
  console.log(jsCode);
  eval(jsCode);
}

// Esta función permite ingresar código manualmente por consola en caso de que no se encuentre el archivo de entrada (input.txt).
// EJ: "Ingrese código: if (1) { printf("Hola"); } else { return; }", deberia ejecutarlo al igual que como si lo hubieramos puesto en el (input.txt)
function leerCadena() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise(resolve => {
    rl.question("Ingrese código: ", ans => {
      rl.close();
      resolve(ans);
    });
  });
}

main();
