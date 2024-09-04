<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Kc1t/desafio-verzel">
    <img src="https://ik.imagekit.io/z3fr9lhps/Screenli/Logo.png?updatedAt=1725388235318" alt="Logo" width="280" height="80">
  </a>

  <h3 align="center">Desafio Técnico - Verzel</h3>

  <p align="center">
    Documentação para projeto do desafio da empresa Verzel.
    <br />
    <a href="https://ik.imagekit.io/z3fr9lhps/Screenli/ScreenLi.pdf?updatedAt=1725418505471" target="_blank">Ver Documentação Completa</a>
    ·
    <a href="https://kc1t.com" target="_blank">Reportar Erro</a>
    ·
    <a href="https://kc1t.com" target="_blank">Solicitar Features</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o Projeto</a>
      <ul>
        <li><a href="#funcionalidades">Funcionalidades</a></li>
        <li><a href="#feito-com">Tecnologias Utilizadas</a></li>
      </ul>
    </li>
    <li>
      <a href="#começando">Começando</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#tutorial-do-sistema">Tutorial do Sistema</a></li>
    <li><a href="#a-fazer">A Fazer</a></li>
    <li><a href="#licença">Licença</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

<div id="sobre-o-projeto"></div>

![Header](https://github.com/user-attachments/assets/1b7ebfaa-0b0d-4865-be89-4a39956705e3)

Este projeto começou a ser desenvolvido no dia 28/08 a partir do recebimento das instruções do desafio da empresa Verzel, com um mapeamento inicial das necessidades do sistema, seguido pela criação do design no Figma e, finalmente, a implementação utilizando Node.js e Next.js. Embora fosse possível desenvolver todo o fullstack em Next.js, optei por usar um backend separado para demonstrar meu conhecimento em diferentes tecnologias.

### Hospedagem

<div align="center">
  
![Readme - Domains](https://github.com/user-attachments/assets/bbe97b61-33e6-471b-b777-8e1fd5fbd4a6)

</div>

A Hospedagem do frontend desse projeto está sendo feita via [Vercel](https://vercel.com), está disponível nos domínios

- [screenli.kc1t.com](https://screenli.kc1t.com)
- [screenli.vercel.app](https://screenli.vercel.app)

A Hospedagem da API está no [Render](https://render.com),

> [!IMPORTANT]
> Por se tratar de um serviço de hospedagem gratuito, a API pode enfrentar alguns problemas ocasionais. Se você acessar o link e ele não carregar corretamente, aguarde alguns instantes e tente atualizar a página.

<div id="funcionalidades"></div>

### Funcionalidades

**Obrigatórias**

- Pesquisa de filmes utilizando a API do The Movie Database (TMDb).
- Exibição de detalhes dos filmes, incluindo a nota (rating).
- Gerenciamento de uma lista de filmes favoritos (adicionar/remover).
- Compartilhamento da lista de favoritos via link.

**Adicionadas Extras**

- Cadastro de Usuário.
- Criação de Listas.

<div id="feito-com"></div>

### Feito com

Esta seção aponta as tecnologias utilizadas no desenvolvimento do sistema.

**Frontend:**
[Abra para ler mais sobre o frontend e seu funcionamento](./Frontend.md)

- ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

**Backend:**

- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

**Rotas de API:**
[Abra para ler a documentação das rotas da API](./Api-Routes.md)

**Banco de Dados:**
O banco de dados utilizado no sistema é o [MongoDB](https://www.mongodb.com)
. A integração com o MongoDB é simples: você apenas precisa acessar o Atlas e gerenciar as credenciais para ambientes Node.js e inserir as chaves de segurança no arquivo `.env`. O backend cuida automaticamente do restante, criando a coleção de usuários e, posteriormente, as listas associadas a cada usuário.

Exemplo:
```js
mongodb+srv://[usuário]:[senha]@[cluster]/[database]?retryWrites=true&w=majority&appName=[nome_do_cluster]
```


<p align="right">(<a href="#readme-top">Voltar ao Topo</a>)</p>

<!-- GETTING STARTED -->

<div id="començando"></div>

## Começando

A utilização do sistema é fácil e intuitiva. Você pode seguir o passo a passo para instalação e configuração local ou, se preferir, acessar o projeto diretamente na Vercel através dos links abaixo:

- [screenli.kc1t.com](https://screenli.kc1t.com)
- [screenli.vercel.app](https://screenli.vercel.app)

<div id="pré-requisitos"></div>

### Pré-requisitos

Para executar os códigos no seu sistema é necessário ter uma versão recente do Node, também é necessário possuir credenciais das APIs (Todas Gratuitas), mas para o projeto eu disponibilizo as chaves para teste.

```sh
npm install npm@latest -g
```

<div id="instalação"></div>

### Instalação

Este repositório possui backend e frontend nele, para testar e instalar basta seguir as instruções a seguir para iniciar ambos.

1. Gere sua chave gratuita do TMBD em [TMDB API](https://developer.themoviedb.org/reference/intro/getting-started) ou utilize as credenciais testes desse documento.

2. Clone o repositório ou baixe manualmente:
   ```sh
   git clone https://github.com/kc1t/desafio-verzel.git
   ```
3. Instale os pacotes NPM:
   ```sh
   npm install
   ```

#### Frontend

1. Acesse a pasta com os arquivos do frontend:

   ```sh
   cd screenli-cli
   ```

2. Instale os pacotes NPM:

   ```sh
   npm install
   ```

3. Coloque as chaves de API dentro do arquivo `.env.local`
   (Chaves Disponíveis para Teste):

   ```js
    NEXT_PUBLIC_API_URL= https://sua-api:5000
    NEXT_PUBLIC_TMDB_API= sua-chave-secreta
   ```

4. Execute o servidor:

   ```bash
   npm run dev
   ```

#### Backend

1. Acesse o a pasta com os arquivos do backend:

   ```sh
   cd screenli-api
   ```

2. Instale os pacotes NPM:

   ```sh
   npm install
   ```

3. Coloque as chaves de API dentro do arquivo `.env`
   (Chaves Disponíveis para Teste):

   ```js
    MONGO_URI= mongodb+srv://[usuário]:[senha]@[cluster]/[database]?retryWrites=true&w=majority&appName=[nome_do_cluster]
    JWT_SECRET= sua-chave-secreta
    TMDB_API= sua-chave-secreta
   ```

4. Execute o servidor:

   ```bash
   npm run dev
   ```

> [!IMPORTANT]
> Para conseguir as chaves do projeto, mandar mensagem no privado.

<p align="right">(<a href="#readme-top">Voltar ao Topo</a>)</p>

<!-- USAGE EXAMPLES -->

<div id="tutorial-do-sistema"></div>

## Tutorial do Sistema

Nesta seção você verá como usar o sistema através de vídeos e screenshots do sistema.

Para ver mais sobre o sistema acesse: [Documentação](https://ik.imagekit.io/z3fr9lhps/Screenli/ScreenLi.pdf?updatedAt=1725418505471)

**Vídeo**
[Caso o vídeo não esteja disponível, aperte aqui!](./assets/Preview%20Screenli.mp4)

https://github.com/user-attachments/assets/8185b38b-9ede-456c-9314-eb71a6855e6d

<div align="center">

![Listagem](https://github.com/user-attachments/assets/947ffa97-973e-4345-9726-e72fb48de647)
![Infos do Filme](https://github.com/user-attachments/assets/0f790fb4-ea04-4a72-8a75-c9be345b7ae5)
![Listas](https://github.com/user-attachments/assets/a2c2f4f5-5937-42e4-a927-4a8eb2d3fabf)
![Lista](https://github.com/user-attachments/assets/5d988b00-64b1-47a1-910b-f2689502bca3)

</div>

Link para o Design:

- [Design/Prototipagem](https://www.figma.com/design/xBa74zYVbqvcbneeWrxH6l/Desafio-Verzel?node-id=115-563&t=uE5qkUl7bSAUSKjK-1)

<p align="right">(<a href="#readme-top">Voltar ao Topo</a>)</p>

<!-- ROADMAP -->

<div id="a-fazer"></div>

## A Fazer

- [x] Requisitos Funcionais
- [x] Requisitos Não Funcionais
- [ ] Melhorar Registro e Login no Front com bibliotecas
- [ ] Melhorar Autenticação
- [ ] Refatorar Backend
- [ ] DarkMode/LightMode

<p align="right">(<a href="#readme-top">Voltar ao Topo</a>)</p>

<!-- LICENSE -->

<div id="licença"></div>

## Licença

Distribuído sob a licença MIT. Consulte `LICENSE.txt` para obter mais informações.

<p align="right">(<a href="#readme-top">Voltar ao Topo</a>)</p>

<!-- CONTACT -->

<div id="contato"></div>

<div align="center">
  
![verzel 1](https://github.com/user-attachments/assets/05d119ef-3f1e-4681-9f74-735d45b850a9)  &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://github.com/Kc1t/desafio-verzel"> 
<img src="https://ik.imagekit.io/z3fr9lhps/Screenli/Logo.png?updatedAt=1725388235318" alt="Logo"  width="280" height="80">
</a>
</div>

## Contato

Kauã Miguel - [Portfólio](https://kc1t.com) - (11) 98468-1739

Link do Projeto: [https://github.com/Kc1t/desafio-verzel](https://github.com/Kc1t/desafio-verzel)

<p align="right">(<a href="#readme-top">Voltar ao Topo</a>)</p>
