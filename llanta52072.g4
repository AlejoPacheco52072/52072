grammar llanta52072;

programa
    : instrucciones EOF
    ;

instrucciones
    : instruccion+
    ;

instruccion
    : decision
    ;

decision
    : IF LPAREN condicion RPAREN LBRACE sentencia RBRACE (ELSE LBRACE sentencia RBRACE)?
    ;

sentencia
    : salida+
    | terminar
    ;

salida
    : PRINTF LPAREN STRING RPAREN SEMI
    ;

terminar
    : RETURN SEMI
    ;

condicion
    : NUM
    ;

// === LÉXICO ===

IF      : 'if';
ELSE    : 'else';
PRINTF  : 'printf';
RETURN  : 'return';

LPAREN  : '(';
RPAREN  : ')';
LBRACE  : '{';
RBRACE  : '}';
SEMI    : ';';

NUM     : '0' | '1';

STRING  : '"' (~["\r\n])* '"';

WS      : [ \t\r\n]+ -> skip;
