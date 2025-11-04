// Boas práticas
/*
Usa const e let, evita var.

Dá nomes claros e descritivos às variáveis e funções.

Mantém funções curtas e com uma só responsabilidade.

Evita código duplicado — reutiliza funções e módulos.

Prefere métodos como map, filter, reduce.

Trata erros com try/catch e logs úteis.

Usa ESLint + Prettier para padronizar o código.

Não expõe dados sensíveis nem usa innerHTML com dados do usuário.

Comenta apenas o necessário — o código deve ser autoexplicativo.
*/


// Case sensitive
/*
JavaScript é **case sensitive**, ou seja, diferencia **maiúsculas e minúsculas**.
Exemplo: `nome`, `Nome` e `NOME` são variáveis diferentes.
👉 Usa sempre o mesmo padrão (ex: *camelCase*: `userName`) para evitar erros.
*/
console.log("Olá Mundo")

// Sintaxe básica e comentário
/*
Sintaxe básica: usa let ou const para variáveis e termina instruções com ;.
Exemplo: let nome = "Ana";
Comentários: // para uma linha e /* para várias linhas. */ 



// Declaração de variáveis(var, let, const)
/*
var é antiga e deve ser evitada.
let permite mudar o valor.
const é fixa (não pode ser alterada).
*/
let nome = "Jorge"
console.log("Meu nome é",nome)

const idade = 18
console.log("Tenho",idade,"anos")

// Console e Debug
/*
Usa console.log() para ver valores e testar o código.
Para depurar, usa debugger; ou o console do navegador.
*/

//Tipos de dados
/*
Primitivos: String, Number, Boolean, Undefined, Null, Symbol, BigInt

Objetos: Object, Array, Function
JavaScript é dinamicamente tipado, ou seja, o tipo de uma variável pode mudar.
*/

//string
let cidade = "Americana"

//number
let salario = 2000

//bool
let fumante = false

console.log(typeof cidade)
console.log(typeof salario)
console.log(typeof fumante)

// Operadores
//     Operador Atribuição
/*
+=, -=, *=, /=, %= modificam o valor da variável de forma resumida.
Ex: x += 2 é igual a x = x + 2.
*/

//     Operadores aritméticos
/*
+ - * / % ** são para cálculos (soma, subtração, multiplicação, divisão, resto e potência).
++ e -- aumentam ou diminuem 1.
*/

//     Operadores relacionais
/*
==, ===, !=, !==, >, <, >=, <= comparam valores e retornam true ou false.
=== e !== comparam valor e tipo, os outros só o valor.
*/

//     Operadores lógicos
/*
&& = E, || = OU, ! = NÃO.
Usados para combinar ou inverter condições que retornam true ou false.
*/

// Estrutura
//     Estrutura de controle/decisão
/*
if, else if, else e switch controlam o fluxo do código, executando blocos diferentes conforme condições.
*/

//     Laços de repetição

// Arrays --> vetor
/*
Arrays são listas de valores ([1, 2, 3]) com índices começando em 0.
Ex: frutas[0] acessa o primeiro item.
Métodos comuns: push(), pop(), shift(), unshift(), length.
*/

// Funções personalizadas
/*
Funções são blocos de código reutilizáveis que podem receber parâmetros e retornar valores.
Ex: function saudacao(nome) { return "Olá, " + nome; }
*/
 