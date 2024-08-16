# Teste Agibank

## Descrição 

Este projeto tem como objetivo realizar o teste agibank para a vaga SOFTWARE TESTER ENGINEER SÊNIOR - TRIBO COMERCIAL (HÍBRIDO CAMPINAS/SP)

## Pré-requisitos

Para rodar o projeto é necessario ter o node.js instalado na maquina a partir da versão 18.x ou superior
. Comando para instalar as depenencias do projeto após baixar o projeto no git ``` npm install ```

## Estrutura do projeto 

O projeto contém dois cenários simples referentes a lupa um pesquisa pelo texto inteiro do título e o outro parcial, está estruturado com as seguintes pastas:
e2e: local destinado a escrita e organização dos testes
page_objects: local destinado a page objects do projeto contendo locators e métodos a serem usados no projeto.

## Execução via npm

Após rodar o comando de instalação para executar o projeto no modo interface é ``` npm run cypress:open ``` e no modo headless sem interface ``` npm run cypress:run ```
O video pode ser gerado apenas no modo headless

