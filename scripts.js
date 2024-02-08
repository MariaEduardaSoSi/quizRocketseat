const perguntas = [
  {
    pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
    respostas: [
      "var myVar = 10;",
      "let myVar = 10;",
      "const myVar = 10;",
    ],
    correta: 2
  },
  {
    pergunta: "Qual dos seguintes métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
    respostas: [
      "push()",
      "append()",
      "addToEnd()",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a saída do seguinte código: console.log(typeof [])?",
    respostas: [
      "array",
      "object",
      "undefined",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função usada para converter uma string em um número em JavaScript?",
    respostas: [
      "parseInt()",
      "parseNumber()",
      "convertToNumber()",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
    respostas: [
      "'==' compara apenas o valor, '===' compara o valor e o tipo de dados.",
      "'==' compara apenas o tipo de dados, '===' compara o valor e o tipo de dados.",
      "'==' e '===' são equivalentes em JavaScript.",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função usada para imprimir algo no console em JavaScript?",
    respostas: [
      "print()",
      "log()",
      "console.log()",
    ],
    correta: 2
  },
  {
    pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
    respostas: [
      "pop()",
      "removeLast()",
      "deleteLast()",
    ],
    correta: 0
  },
  {
    pergunta: "O que a função 'Math.random()' retorna?",
    respostas: [
      "Um número aleatório entre 0 (inclusive) e 1 (exclusivo).",
      "Um número inteiro aleatório.",
      "Um número aleatório entre 0 e 100.",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o operador de negação em JavaScript?",
    respostas: [
      "&",
      "!",
      "~",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o método usado para converter um objeto JavaScript em uma string JSON?",
    respostas: [
      "toJSON()",
      "stringify()",
      "parse()",
    ],
    correta: 1
  },
];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

const correta = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = correta.size + 'de' + totalDePerguntas

for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta    

  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      
      correta.delete(item)
      if(estaCorreta){
        correta.add(item)
      }

      mostrarTotal.textContent = correta.size + ' de ' + totalDePerguntas
    }
    
    quizItem.querySelector('dl').appendChild(dt)
  }  

  quizItem.querySelector('dl dt').remove()

  quiz.appendChild(quizItem)  
}