### Temporada 1 - Busca em listas (arrays).

*Capítulo 1.1*: **Máximo número consecutivo**



Dada uma lista (array), retorne o máximo de vezes consecutivas que o número **1** aparece.

Exemplo:

`lista = [0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0]`

Saída = 4

Explicação: O número 1 se repetiu 4 vezes consecutivas.

***Usando loop for tradicional.***

`const findMaxConsecutiveOnes = (nums) => {`
  `let acc = 0, max = 0;`

  `for (let indice = 0; indice < nums.length; indice += 1) {`
    `if (nums[indice] === 1) {`
      `acc += 1;`
    `} else {`
      `acc = 0;`
    `}`
    `if(acc > max) max = acc;`
  `}`
  `return max;`
`};`

***Tempo de resposta: 83ms***

------

**Obs.:** Ao se criar um código é interessante se atentar ao desempenho em tempo de resposta pois, caso venha a se receber uma lista muito grande certamente fará diferença. Além disso, também é bom escrevermos o código de forma que seja legível e de fácil compreensão por humanos, não adianta escrever tudo em uma linha se isto ficar de difícil compreensão.

*Esta função pode ser escrita de diversas formas, abaixo temos um exemplo utilizando-se loop **for of**:*

`const findMaxConsecutiveOnes = (nums) => {`
  `let acc = 0, max = 0;`
  `for (num of nums) {`
    `num === 1 ? acc += 1 : acc = 0;`
    `if(acc > max) max = acc;`
  `}`
  `return max;`
`};`

***Explicação:***

O funcionamento desta função é bastante simples, as variáveis **acc** e **max** são contadores e começam com valor **0**. 

Logo entramos em um loop **for of** (itera uma lista pegando o valor, contrário do **for in** que pega o indice), então cada valor é comparado com 1, se verdadeiro o **acc** recebe **acc + 1**, se não, acc recebe **0**. Retorna então o **acc**, depois comparando se **acc** é maior que **max**, então **max** recebe o valor de acc, no final retorna-se **max** com resultado.

***Tempo de resposta: 79ms***

------

Agora podemos pensar em uma refatoração deste código para usar outros valores como filtro, assim será uma função reutilizável em diversos cenários, basta fazer com que a função receba um segundo parâmetro que será o número desejado a se buscar e fazer a comparação com este novo valor.

`const findMaxConsecutiveNumbers = (nums, numBuscado) => {`

 `let acc = 0, max = 0;`

 `for (num of nums) {`

  `num === numBuscado ? acc += 1 : acc = 0;`

  `if(acc > max) max = acc;`

 `}`

 `return max;`

`};`



Obrigado por acompanhar a saga ;D
Autor: Felipe Belarmino
Linkedin: https://www.linkedin.com/in/felipe-belarmino

https://www.linkedin.com/pulse/m%25C3%25A1ximo-n%25C3%25BAmero-consecutivo-felipe-belarmino



