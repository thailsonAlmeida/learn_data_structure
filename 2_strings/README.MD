# Objetivo
- Treinar resolução de problemas envolvendo strings.

# O que é necessário saber sobre string?
- As strings são sequências de caracteres que representam texto
- É a base através da qual a informação é transmitida, armazenada e manipulada em quase todos os sistemas computacionais
- São aplicadas em:
    - Validação de dados de formulários
    - Exibição de mensagens customizadas
    - Comunicação entre sistemas
        - Protocolo HTTP
        - JSON
        - XML
        - CSV
    - Compiladores
	- Processamento de linguagem natural

## O que é necessário saber sobre string em JavaScript
- As string são imutáveis. Não é possivel alterar seus caracteres individuais.
- Para alterar um caracter numa string é necessario converter a string para um array de caracteres.

``` Javascript
let str = "Hello, world!";
let arr = str.split(""); // Converte a string em um array de caracteres*
arr[7] = 'W'; // Modifica um caracter* específico
str = arr.join(""); // Converte o array de volta para string
```

**Nota: em Javascript na verdade não existe o tipo caractere (como existe em Java e C# por exemplo). O array criado pela chamada do método .split("") na verdade será um array de strings, onde cada string será um string contendo um único caractere.**

- Funções de string são
    - **concat** Combina o texto de duas ou mais strings e retorna uma nova string.
    - **indexOf** Retorna o índice da primeira ocorrência de um valor especificado em uma string, ou -1 se não for encontrado.
    - **lastIndexOf** Retorna o índice da última ocorrência de um valor especificado em uma string, ou -1 se não for encontrado.
    - **match** Procura uma string por uma correspondência contra uma expressão regular e retorna as correspondências como um array de objetos.
    - **matchAll** Retorna um iterador com todas as correspondências de uma string contra uma expressão regular.
    - **replace** Substitui algumas ou todas as ocorrências de um padrão por uma substituição.
    - **replaceAll** Similar ao replace(), mas substitui todas as ocorrências do padrão.
    - **search** Procura uma string por uma correspondência contra uma expressão regular e retorna o índice da correspondência.
    - **split** Divide uma string em um array de strings usando um separador especificado.
    - **slice** Extrai uma parte de uma string e retorna uma nova string.
    - **substring** Retorna uma parte da string entre os índices de início e fim.
    - **toLowerCase** Converte uma string para letras minúsculas.
    - **toUpperCase** Converte uma string para letras maiúsculas.
    - **trim** Remove espaços em branco do início e do fim de uma string.
    - **trimStart** Remove espaços em branco do início de uma string.
    - **trimEnd** Remove espaços em branco do final de uma string.
    - **charAt** Retorna o caractere em um índice específico.
    - **charCodeAt** Retorna um número indicando o valor Unicode do caractere em um determinado índice.
    - **startsWith** Verifica se uma string começa com os caracteres de uma string especificada, retornando true ou false.
    - **endsWith** Verifica se uma string termina com os caracteres de uma string especificada, retornando true ou false.
    - **includes** Verifica se uma string contém os caracteres de uma string especificada, retornando true ou false.
    - **padStart** Preenche a string original com um determinado caractere (ou conjunto de caracteres) no início da string até alcançar o comprimento desejado.
    - **padEnd** Preenche a string original com um determinado caractere (ou conjunto de caracteres) no final da string até alcançar o comprimento desejado.

# Referência sobre regex
## Caracteres Especiais
- **.** Corresponde a qualquer caractere, exceto quebra de linha. Por exemplo, /.at/ corresponde a "cat", "bat", e "rat".

- **\d** Corresponde a qualquer dígito de 0 a 9.

- **\D** Corresponde a qualquer caractere que não seja um dígito de 0 a 9.

- **\w** Corresponde a qualquer caractere alfanumérico, incluindo o sublinhado (_). Equivalente a ``[A-Za-z0-9_]``.

- **\W** Corresponde a qualquer caractere que não seja alfanumérico.

- **\s** Corresponde a qualquer caractere de espaço em branco, incluindo espaço, tabulação, alimentação de formulário e quebras de linha.

- **\S** Corresponde a qualquer caractere que não seja de espaço em branco.

- **\b** Corresponde a uma fronteira de palavra, como o espaço entre duas palavras.

- **\B** Corresponde a uma posição que não é uma fronteira de palavra.

- **^** Corresponde ao início de uma string, ou ao início de uma linha se a flag m for utilizada.

- **$** Corresponde ao final de uma string, ou ao final de uma linha se a flag m for utilizada.

- **[]** Usado para especificar um conjunto de caracteres. Por exemplo, ``[abc]`` corresponde a qualquer um dos caracteres "a", "b" ou "c".

## Quantificadores
- ***'*'** Corresponde a zero ou mais ocorrências do elemento anterior.

- **+** Corresponde a uma ou mais ocorrências do elemento anterior.

- **?** Corresponde a zero ou uma ocorrência do elemento anterior.

- **{n}** Corresponde exatamente a n ocorrências do elemento anterior.

- **{n,}** Corresponde a n ou mais ocorrências do elemento anterior.

- **{n,m}** Corresponde de n a m ocorrências do elemento anterior, sendo ambas inclusivas.

## Caracteres de Escape
- **'\'** É usado para escapar um metacaractere, permitindo que você corresponda ao próprio caractere, como '\'. para corresponder a um ponto literal, ou '\/' para corresponder a uma barra, ou '\\'para corresponder a uma barra invertida.

## Grupos e Intervalos
- **()** Usado para agrupar caracteres e capturar o texto correspondente.

- **(?:)** Agrupa caracteres sem capturar o texto correspondente.

**|** Operador OR, corresponde a qualquer um dos padrões separados por ele.

## Flags
- **g** Realiza uma correspondência global, ou seja, encontra todas as correspondências, em vez de parar após a primeira correspondência.

- **i** Torna a correspondência insensível a maiúsculas e minúsculas.

- **m** Multilinha, faz com que ^ e $ correspondam ao início e ao fim de cada linha, em vez de apenas o início e o fim de toda a string.

- **s** Permite que o . corresponda também a quebras de linha.

- **u** Trata o padrão como uma sequência Unicode.

- **y** Realiza uma correspondência "sticky", buscando correspondências apenas a partir do índice indicado pela propriedade lastIndex do objeto RegExp.

## Algumas regex comuns

Atenção: repare que todas as regex a seguir começam e terminam com ^ e $ respectivamente. Isso significa que a string toda deverá ser verificada para o padrão da regex, não podendo conter outros conteúdos antes e depois do padrão.

```javascript
//Email (simplificada)
/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

//URL (simplificada)
/^((https?|ftp):\/\/)?(([a-z0-9-]+\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:(\d{2,5}))?(\/[a-z0-9-\.\/?#@&%;=~_|]*)?$/

//Telefone brasileiro
/^(?:\+55\s?)?(?:\([1-9]{2}\)|[1-9]{2})\s?(?:9\s?)?[6789][0-9]{3}\s?-?\s?[0-9]{4}$/

//CEP brasileiro
/^\d{5}-?\d{3}$/

//Data no formato aaaa-mm-dd (simplificada)
/^\d{4}-\d{2}-\d{2}$/

//Data no formato dd/mm/aaaa (com validação de dia entre 1 e 31, e mês de 1 a 12, podendo ou não ter zero à esquerda dos valores menores que 10)
/^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/(19|20)\d\d$/

//Senha “forte” (pelo menos 8 caracteres, com pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial)
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

//Número inteiro
/^[-+]?\d+$/

//Número de ponto flutuante
/^[-+]?\d*\.?\d+$/

//IPv4
/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
```