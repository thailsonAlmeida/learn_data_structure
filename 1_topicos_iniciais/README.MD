# Objetivo
- Esclarecer questões sobre estrutura de dados e algoritmos

# O que é estrutura de dados?
- É sobre organização e armazenamento de dados na memória de um computador.
- É implementar métodos para ornizar e gerenciar dados de maneira que permite recuperação e modificação eficiente.

# Quais tipos de estrutura de dados
- Array: Coleção de elementos ocupando uma **porção contígua** de memória.
- Lista: Coleção de elementos armazenados em **nós sequenciais**.
- Arvores: Coleção de elementos armazenados em nós de forma **hierárquica**.
- Grafos: Coleção de elementos armazenados em nós com **livre conexão** entre eles.
- Tabela hash: Coleção de elementos que usa uma função de hash para mapear chaves aos elementos.

# Classes são tipos referências
- Variaveis cujo tipo são classes devem ser entendidas como ponteiros. "Tentáculos"

# Tipos referencias x Tipos valor

## Classe
- Vatagem: usurui de todos recursos OO
- Variaveis são ponteiros
- Objetos precisam ser instanciadas usando new, ou apontar para um objeto já existente.
- Aceita valor null
- Suporta a herança
- Y = X; "Y passa apontar para onde X aponta"
- Objetos instanciado no HEA
- Objetos não utilizados são desalocados em um momento próximo pelo garbage collector

## Struct
- Vantagem: é mais simples e mais performatico
- Váriaveis são caixas
- Não é preciso instanciar, mas é possivel.
- Não aceita valor null
- Não tem suporte a herança, mas pode implementar interfaces.
- Y = X; "Y recebe uma cópia de X"
- Objetos instanciados no stack
- "Objetos" São desalocado imediatamente quando o escopo de inicialização é finalizado

# O que é necessario saber sobre o Garbage collector?
- É um processo que automatiza o gerenciamento de memória de um programa em execução
- Monitora objetos alocados dinamicamente pelo programa no hrap
- Desaloca objetos sem utilização
