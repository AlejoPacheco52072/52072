// Generated from c:/Users/alejo/ssl-antlr-52072/llanta52072.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import llanta52072Listener from './llanta52072Listener.js';
import llanta52072Visitor from './llanta52072Visitor.js';

const serializedATN = [4,1,12,60,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,1,1,4,1,21,8,1,11,1,12,1,22,1,2,1,2,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,39,8,3,1,4,4,4,42,8,
4,11,4,12,4,43,1,4,3,4,47,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,
7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,0,55,0,16,1,0,0,0,2,20,1,0,0,0,4,24,1,0,
0,0,6,26,1,0,0,0,8,46,1,0,0,0,10,48,1,0,0,0,12,54,1,0,0,0,14,57,1,0,0,0,
16,17,3,2,1,0,17,18,5,0,0,1,18,1,1,0,0,0,19,21,3,4,2,0,20,19,1,0,0,0,21,
22,1,0,0,0,22,20,1,0,0,0,22,23,1,0,0,0,23,3,1,0,0,0,24,25,3,6,3,0,25,5,1,
0,0,0,26,27,5,1,0,0,27,28,5,5,0,0,28,29,3,14,7,0,29,30,5,6,0,0,30,31,5,7,
0,0,31,32,3,8,4,0,32,38,5,8,0,0,33,34,5,2,0,0,34,35,5,7,0,0,35,36,3,8,4,
0,36,37,5,8,0,0,37,39,1,0,0,0,38,33,1,0,0,0,38,39,1,0,0,0,39,7,1,0,0,0,40,
42,3,10,5,0,41,40,1,0,0,0,42,43,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,47,
1,0,0,0,45,47,3,12,6,0,46,41,1,0,0,0,46,45,1,0,0,0,47,9,1,0,0,0,48,49,5,
3,0,0,49,50,5,5,0,0,50,51,5,11,0,0,51,52,5,6,0,0,52,53,5,9,0,0,53,11,1,0,
0,0,54,55,5,4,0,0,55,56,5,9,0,0,56,13,1,0,0,0,57,58,5,10,0,0,58,15,1,0,0,
0,4,22,38,43,46];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class llanta52072Parser extends antlr4.Parser {

    static grammarFileName = "llanta52072.g4";
    static literalNames = [ null, "'if'", "'else'", "'printf'", "'return'", 
                            "'('", "')'", "'{'", "'}'", "';'" ];
    static symbolicNames = [ null, "IF", "ELSE", "PRINTF", "RETURN", "LPAREN", 
                             "RPAREN", "LBRACE", "RBRACE", "SEMI", "NUM", 
                             "STRING", "WS" ];
    static ruleNames = [ "programa", "instrucciones", "instruccion", "decision", 
                         "sentencia", "salida", "terminar", "condicion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = llanta52072Parser.ruleNames;
        this.literalNames = llanta52072Parser.literalNames;
        this.symbolicNames = llanta52072Parser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, llanta52072Parser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.instrucciones();
	        this.state = 17;
	        this.match(llanta52072Parser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, llanta52072Parser.RULE_instrucciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 19;
	            this.instruccion();
	            this.state = 22; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, llanta52072Parser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.decision();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	decision() {
	    let localctx = new DecisionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, llanta52072Parser.RULE_decision);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(llanta52072Parser.IF);
	        this.state = 27;
	        this.match(llanta52072Parser.LPAREN);
	        this.state = 28;
	        this.condicion();
	        this.state = 29;
	        this.match(llanta52072Parser.RPAREN);
	        this.state = 30;
	        this.match(llanta52072Parser.LBRACE);
	        this.state = 31;
	        this.sentencia();
	        this.state = 32;
	        this.match(llanta52072Parser.RBRACE);
	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 33;
	            this.match(llanta52072Parser.ELSE);
	            this.state = 34;
	            this.match(llanta52072Parser.LBRACE);
	            this.state = 35;
	            this.sentencia();
	            this.state = 36;
	            this.match(llanta52072Parser.RBRACE);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, llanta52072Parser.RULE_sentencia);
	    var _la = 0;
	    try {
	        this.state = 46;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 41; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 40;
	                this.salida();
	                this.state = 43; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===3);
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 45;
	            this.terminar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, llanta52072Parser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(llanta52072Parser.PRINTF);
	        this.state = 49;
	        this.match(llanta52072Parser.LPAREN);
	        this.state = 50;
	        this.match(llanta52072Parser.STRING);
	        this.state = 51;
	        this.match(llanta52072Parser.RPAREN);
	        this.state = 52;
	        this.match(llanta52072Parser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, llanta52072Parser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(llanta52072Parser.RETURN);
	        this.state = 55;
	        this.match(llanta52072Parser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, llanta52072Parser.RULE_condicion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(llanta52072Parser.NUM);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

llanta52072Parser.EOF = antlr4.Token.EOF;
llanta52072Parser.IF = 1;
llanta52072Parser.ELSE = 2;
llanta52072Parser.PRINTF = 3;
llanta52072Parser.RETURN = 4;
llanta52072Parser.LPAREN = 5;
llanta52072Parser.RPAREN = 6;
llanta52072Parser.LBRACE = 7;
llanta52072Parser.RBRACE = 8;
llanta52072Parser.SEMI = 9;
llanta52072Parser.NUM = 10;
llanta52072Parser.STRING = 11;
llanta52072Parser.WS = 12;

llanta52072Parser.RULE_programa = 0;
llanta52072Parser.RULE_instrucciones = 1;
llanta52072Parser.RULE_instruccion = 2;
llanta52072Parser.RULE_decision = 3;
llanta52072Parser.RULE_sentencia = 4;
llanta52072Parser.RULE_salida = 5;
llanta52072Parser.RULE_terminar = 6;
llanta52072Parser.RULE_condicion = 7;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = llanta52072Parser.RULE_programa;
    }

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	EOF() {
	    return this.getToken(llanta52072Parser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof llanta52072Listener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof llanta52072Listener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof llanta52072Visitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = llanta52072Parser.RULE_instrucciones;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof llanta52072Listener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof llanta52072Listener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof llanta52072Visitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = llanta52072Parser.RULE_instruccion;
    }

	decision() {
	    return this.getTypedRuleContext(DecisionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof llanta52072Listener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof llanta52072Listener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof llanta52072Visitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DecisionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = llanta52072Parser.RULE_decision;
    }

	IF() {
	    return this.getToken(llanta52072Parser.IF, 0);
	};

	LPAREN() {
	    return this.getToken(llanta52072Parser.LPAREN, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	RPAREN() {
	    return this.getToken(llanta52072Parser.RPAREN, 0);
	};

	LBRACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(llanta52072Parser.LBRACE);
	    } else {
	        return this.getToken(llanta52072Parser.LBRACE, i);
	    }
	};


	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	RBRACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(llanta52072Parser.RBRACE);
	    } else {
	        return this.getToken(llanta52072Parser.RBRACE, i);
	    }
	};


	ELSE() {
	    return this.getToken(llanta52072Parser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof llanta52072Listener ) {
	        listener.enterDecision(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof llanta52072Listener ) {
	        listener.exitDecision(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof llanta52072Visitor ) {
	        return visitor.visitDecision(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = llanta52072Parser.RULE_sentencia;
    }

	salida = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SalidaContext);
	    } else {
	        return this.getTypedRuleContext(SalidaContext,i);
	    }
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof llanta52072Listener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof llanta52072Listener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof llanta52072Visitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = llanta52072Parser.RULE_salida;
    }

	PRINTF() {
	    return this.getToken(llanta52072Parser.PRINTF, 0);
	};

	LPAREN() {
	    return this.getToken(llanta52072Parser.LPAREN, 0);
	};

	STRING() {
	    return this.getToken(llanta52072Parser.STRING, 0);
	};

	RPAREN() {
	    return this.getToken(llanta52072Parser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(llanta52072Parser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof llanta52072Listener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof llanta52072Listener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof llanta52072Visitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = llanta52072Parser.RULE_terminar;
    }

	RETURN() {
	    return this.getToken(llanta52072Parser.RETURN, 0);
	};

	SEMI() {
	    return this.getToken(llanta52072Parser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof llanta52072Listener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof llanta52072Listener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof llanta52072Visitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = llanta52072Parser.RULE_condicion;
    }

	NUM() {
	    return this.getToken(llanta52072Parser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof llanta52072Listener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof llanta52072Listener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof llanta52072Visitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




llanta52072Parser.ProgramaContext = ProgramaContext; 
llanta52072Parser.InstruccionesContext = InstruccionesContext; 
llanta52072Parser.InstruccionContext = InstruccionContext; 
llanta52072Parser.DecisionContext = DecisionContext; 
llanta52072Parser.SentenciaContext = SentenciaContext; 
llanta52072Parser.SalidaContext = SalidaContext; 
llanta52072Parser.TerminarContext = TerminarContext; 
llanta52072Parser.CondicionContext = CondicionContext; 
