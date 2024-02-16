//bloco de perguntas e opções de respostas
const perguntas = [
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "var x;",
        "variable x;",
        "v x;"
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      respostas: [
        "Seleciona todos os elementos com a classe especificada",
        "Seleciona o primeiro elemento com o seletor CSS especificado",
        "Seleciona todos os elementos filhos de um elemento especificado"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de escrever um comentário em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "# Este é um comentário"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Atribuição",
        "Comparação estrita",
        "Concatenação"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado de 5 + '5' em JavaScript?",
      respostas: [
        "10",
        "55",
        "Erro"
      ],
      correta: 1
    },
    {
      pergunta: "Como você declara uma função em JavaScript?",
      respostas: [
        "função myFunction() {}",
        "def myFunction() {}",
        "function:myFunction() {}"
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'push()' faz em um array em JavaScript?",
      respostas: [
        "Remove o último elemento do array",
        "Adiciona um novo elemento ao final do array",
        "Inverte a ordem dos elementos do array"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o método correto para remover um elemento de um array em JavaScript?",
      respostas: [
        "deleteElement()",
        "removeElement()",
        "splice()"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador lógico 'OU' em JavaScript?",
      respostas: [
        "&&",
        "||",
        "!"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a saída do código: console.log(typeof [])?",
      respostas: [
        "array",
        "object",
        "undefined"
      ],
      correta: 1
    }
  ];
  
  //pegar o que está no HTML pelo ID
  const quiz = document.querySelector("#quiz")
  const template = document.querySelector("template")
  
  const corretas = new Set ()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector ('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
  quizItem.querySelector("h3").textContent = item.pergunta
  
  //item para pegar as opções de respostas (as três alternativas)
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta
    
    corretas.delete(item)
    if (estaCorreta) {
      corretas.add(item)
    }
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  }
  
  
  
  //item para aparecer as respotas na tela
  quizItem.querySelector('dl').appendChild(dt)
  
  }
  
  
  //remover o 'Resposta A que aparecia nas opções
  quizItem.querySelector('dl dt').remove()
  
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }