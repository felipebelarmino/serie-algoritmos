### Temporada 1 - Busca em listas (arrays).

*Capítulo 1.2*: **Ache os números com digitos pares**

Dada uma lista de números inteiros, retorne quantos destes contém quantidade de dígitos **pares**.

```
Entrada: nums = [12,345,2,6,7896]
Saída: 2
Explicação: 
13 contém 2 digitos (numero par de digitos). 
340 contém 3 digitos (numero ímpar de digitos). 
2 contém 1 digito (numero ímpar de digitos).
6 contém 1 digito (numero ímpar de digitos).
1111 contém 4 digitos (numero par de digitos).
```

------

Abaixo a função utilizando um loop for tradicional iterando a lista de números, a cada iteração o número atual é convertido em string `toString()`, separado split `split("")` e por último pegamos o tamanho `.length`deste split e comparamos o módulo `% 2 === 0` para verificarmos o resto desta operação, se o resto for **0** então temos **par**, se não temos **ímpar**, pois a sobra será **1**. Note que esta forma faz uso de uma conversão do tipo número para string, assim conseguimos separar por caracteres e contar.

```function findNumbers(*nums*) {
function findNumbers(nums) {
  let evenNums = 0;

  for (let indice = 0; indice < nums.length; indice += 1) {
    if (nums[indice].toString().split("").length % 2 === 0) {
      evenNums += 1;
    }
  }

  return evenNums;
}
```

------

Assim como no caítulo anterior, podemos refatorar esta função de diversas maneiras, como abaixo:

Aqui temos uma forma resumida de fazer a comparação utilizando higher order functions do javascript, salvamos o resultado em uma **constante** iterando com a função **filter** sobre a lista de números, novamente utilizamos a conversão para string e no final retornamos o tamanho da lista **countEven**. Desta forma será criada uma nova lista apenas com os números que contém quantidade de dígitos pares.

```function findNumbers(*nums*) {
function findNumbers(nums) {
  const countEven = nums.filter(
    (num) => num.toString().split("").length % 2 === 0
  );
  return countEven.length;
}
```

------

Agora sem utilizar conversão note que temos mais passos, temos então dois contadores e iteramos a lista nums com um loop **for of**, é feita a comparação se o **número atual é maior ou igual a 1**, logo abaixo temos um **loop while**, se o **número atual dividido por 10 for maior ou igual a 1** então **count** é acrescido em **1** e **num é dividido por 10** a cada passada no while até que não seja mais divisível por 10. Pegamos a sobra de **count módulo 2**, se for **0** quer dizer que é **par**, então **evenNums** é acrescido em 1 e o **loop for recomeça**.  Por último, basta retornar **evenNums**.

``````
function findNumbers(nums) {
  let count = 0;
  let evenNums = 0;

  for (num of nums) {
    if (num >= 1) ++count;

    while (num / 10 >= 1) {
      num /= 10;
      count += 1;
    }

    if (count % 2 === 0) evenNums += 1;
    count = 0;
  }

  return evenNums;
}
``````





Obrigado por acompanhar a saga ;D

Autor: Felipe Belarmino

Linkedin: https://www.linkedin.com/in/felipe-belarmino

Github: https://github.com/felipebelarmino/serie-algoritmos



