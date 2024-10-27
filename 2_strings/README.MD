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

