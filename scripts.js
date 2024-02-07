const perguntas = [
  {
    pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
    resposta: [
      "var myVar = 10;",
      "let myVar = 10;",
      "const myVar = 10;",
    ],
    correta: 2
  },
  {
    pergunta: "Qual dos seguintes métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
    resposta: [
      "push()",
      "append()",
      "addToEnd()",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a saída do seguinte código: console.log(typeof [])?",
    resposta: [
      "array",
      "object",
      "undefined",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função usada para converter uma string em um número em JavaScript?",
    resposta: [
      "parseInt()",
      "parseNumber()",
      "convertToNumber()",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
    resposta: [
      "'==' compara apenas o valor, '===' compara o valor e o tipo de dados.",
      "'==' compara apenas o tipo de dados, '===' compara o valor e o tipo de dados.",
      "'==' e '===' são equivalentes em JavaScript.",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função usada para imprimir algo no console em JavaScript?",
    resposta: [
      "print()",
      "log()",
      "console.log()",
    ],
    correta: 2
  },
  {
    pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
    resposta: [
      "pop()",
      "removeLast()",
      "deleteLast()",
    ],
    correta: 0
  },
  {
    pergunta: "O que a função 'Math.random()' retorna?",
    resposta: [
      "Um número aleatório entre 0 (inclusive) e 1 (exclusivo).",
      "Um número inteiro aleatório.",
      "Um número aleatório entre 0 e 100.",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o operador de negação em JavaScript?",
    resposta: [
      "&",
      "!",
      "~",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o método usado para converter um objeto JavaScript em uma string JSON?",
    resposta: [
      "toJSON()",
      "stringify()",
      "parse()",
    ],
    correta: 1
  },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

 
for(const item of perguntas){
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  quiz.appendChild(quizItem)

  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta

    quizItem.querySelector('dl').appendChild(dt)
  }
}