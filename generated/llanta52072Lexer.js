// Generated from c:/Users/alejo/ssl-antlr-52072/llanta52072.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,12,75,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,
0,1,0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,
3,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,5,10,
62,8,10,10,10,12,10,65,9,10,1,10,1,10,1,11,4,11,70,8,11,11,11,12,11,71,1,
11,1,11,0,0,12,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,
1,0,2,3,0,10,10,13,13,34,34,3,0,9,10,13,13,32,32,76,0,1,1,0,0,0,0,3,1,0,
0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,
0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,1,25,1,0,0,0,3,
28,1,0,0,0,5,33,1,0,0,0,7,40,1,0,0,0,9,47,1,0,0,0,11,49,1,0,0,0,13,51,1,
0,0,0,15,53,1,0,0,0,17,55,1,0,0,0,19,57,1,0,0,0,21,59,1,0,0,0,23,69,1,0,
0,0,25,26,5,105,0,0,26,27,5,102,0,0,27,2,1,0,0,0,28,29,5,101,0,0,29,30,5,
108,0,0,30,31,5,115,0,0,31,32,5,101,0,0,32,4,1,0,0,0,33,34,5,112,0,0,34,
35,5,114,0,0,35,36,5,105,0,0,36,37,5,110,0,0,37,38,5,116,0,0,38,39,5,102,
0,0,39,6,1,0,0,0,40,41,5,114,0,0,41,42,5,101,0,0,42,43,5,116,0,0,43,44,5,
117,0,0,44,45,5,114,0,0,45,46,5,110,0,0,46,8,1,0,0,0,47,48,5,40,0,0,48,10,
1,0,0,0,49,50,5,41,0,0,50,12,1,0,0,0,51,52,5,123,0,0,52,14,1,0,0,0,53,54,
5,125,0,0,54,16,1,0,0,0,55,56,5,59,0,0,56,18,1,0,0,0,57,58,2,48,49,0,58,
20,1,0,0,0,59,63,5,34,0,0,60,62,8,0,0,0,61,60,1,0,0,0,62,65,1,0,0,0,63,61,
1,0,0,0,63,64,1,0,0,0,64,66,1,0,0,0,65,63,1,0,0,0,66,67,5,34,0,0,67,22,1,
0,0,0,68,70,7,1,0,0,69,68,1,0,0,0,70,71,1,0,0,0,71,69,1,0,0,0,71,72,1,0,
0,0,72,73,1,0,0,0,73,74,6,11,0,0,74,24,1,0,0,0,3,0,63,71,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class llanta52072Lexer extends antlr4.Lexer {

    static grammarFileName = "llanta52072.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'if'", "'else'", "'printf'", "'return'", 
                         "'('", "')'", "'{'", "'}'", "';'" ];
	static symbolicNames = [ null, "IF", "ELSE", "PRINTF", "RETURN", "LPAREN", 
                          "RPAREN", "LBRACE", "RBRACE", "SEMI", "NUM", "STRING", 
                          "WS" ];
	static ruleNames = [ "IF", "ELSE", "PRINTF", "RETURN", "LPAREN", "RPAREN", 
                      "LBRACE", "RBRACE", "SEMI", "NUM", "STRING", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

llanta52072Lexer.EOF = antlr4.Token.EOF;
llanta52072Lexer.IF = 1;
llanta52072Lexer.ELSE = 2;
llanta52072Lexer.PRINTF = 3;
llanta52072Lexer.RETURN = 4;
llanta52072Lexer.LPAREN = 5;
llanta52072Lexer.RPAREN = 6;
llanta52072Lexer.LBRACE = 7;
llanta52072Lexer.RBRACE = 8;
llanta52072Lexer.SEMI = 9;
llanta52072Lexer.NUM = 10;
llanta52072Lexer.STRING = 11;
llanta52072Lexer.WS = 12;



