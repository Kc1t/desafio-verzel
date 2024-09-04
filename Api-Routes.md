# 🎬 API Screenli - Documentação das Rotas

Esta API fornece acesso a informações sobre filmes, permite a criação e gerenciamento de listas de filmes e inclui funcionalidades de autenticação de usuários.

## 📖 Sumário

- [Endpoints de Filmes](#endpoints-de-filmes)
  - [Obter Filmes Populares](#1-obter-filmes-populares)
  - [Obter Detalhes de um Filme](#2-obter-detalhes-de-um-filme)
  - [Buscar Filmes](#3-buscar-filmes)
  - [Obter Filmes Relacionados](#4-obter-filmes-relacionados)
  - [Obter Filmes de Terror de 2024](#5-obter-filmes-de-terror-de-2024)
  - [Obter Filmes com Altas Avaliações de 2024](#6-obter-filmes-com-altas-avaliações-de-2024)
  - [Obter Próximos Lançamentos](#7-obter-próximos-lançamentos)
- [Endpoints de Listas de Filmes](#endpoints-de-listas-de-filmes)
  - [Criar Nova Lista](#1-criar-nova-lista)
  - [Obter Listas do Usuário](#2-obter-listas-do-usuário)
  - [Obter Detalhes de uma Lista](#3-obter-detalhes-de-uma-lista)
  - [Adicionar Filme à Lista](#4-adicionar-filme-à-lista)
  - [Remover Filme da Lista](#5-remover-filme-da-lista)
  - [Deletar Lista](#6-deletar-lista)
- [Endpoints de Autenticação](#endpoints-de-autenticação)
  - [Registrar Novo Usuário](#1-registrar-novo-usuário)
  - [Login de Usuário](#2-login-de-usuário)
  - [Rota Protegida](#3-rota-protegida)

---

## Endpoints de Filmes

### 1. Obter Filmes Populares

- **Rota**: `/popular-movies`
- **Método**: `GET`
- **Descrição**: Retorna uma lista dos filmes mais populares.
- **Resposta**:
  - `200 OK`: Retorna uma lista de filmes populares.
  - `500 Internal Server Error`: Em caso de erro ao buscar filmes.

### 2. Obter Detalhes de um Filme

- **Rota**: `/movies/:id`
- **Método**: `GET`
- **Descrição**: Retorna os detalhes de um filme específico pelo ID.
- **Parâmetros**:
  - `id` (obrigatório): O ID do filme.
- **Resposta**:
  - `200 OK`: Retorna os detalhes do filme.
  - `404 Not Found`: Se o filme não for encontrado.
  - `500 Internal Server Error`: Em caso de erro ao buscar detalhes do filme.

### 3. Buscar Filmes

- **Rota**: `/search`
- **Método**: `GET`
- **Descrição**: Busca por filmes com base em um termo de consulta.
- **Parâmetros**:
  - `query` (obrigatório): Termo de busca.
- **Resposta**:
  - `200 OK`: Retorna uma lista de filmes que correspondem ao termo de busca.
  - `500 Internal Server Error`: Em caso de erro ao buscar filmes.

### 4. Obter Filmes Relacionados

- **Rota**: `/movie/:id/similar`
- **Método**: `GET`
- **Descrição**: Retorna uma lista de filmes relacionados a um filme específico.
- **Parâmetros**:
  - `id` (obrigatório): O ID do filme.
- **Resposta**:
  - `200 OK`: Retorna uma lista de filmes relacionados.
  - `404 Not Found`: Se o filme não for encontrado.
  - `500 Internal Server Error`: Em caso de erro ao buscar filmes relacionados.

### 5. Obter Filmes de Terror de 2024

- **Rota**: `/horror-movies-2024`
- **Método**: `GET`
- **Descrição**: Retorna uma lista de filmes de terror lançados em 2024.
- **Resposta**:
  - `200 OK`: Retorna uma lista de filmes de terror de 2024.
  - `500 Internal Server Error`: Em caso de erro ao buscar filmes de terror.

### 6. Obter Filmes com Altas Avaliações de 2024

- **Rota**: `/high-grades-2024`
- **Método**: `GET`
- **Descrição**: Retorna uma lista de filmes com altas avaliações lançados em 2024.
- **Resposta**:
  - `200 OK`: Retorna uma lista de filmes com altas avaliações de 2024.
  - `500 Internal Server Error`: Em caso de erro ao buscar filmes de alta avaliação.

### 7. Obter Próximos Lançamentos

- **Rota**: `/upcoming`
- **Método**: `GET`
- **Descrição**: Retorna uma lista de filmes que serão lançados em breve.
- **Resposta**:
  - `200 OK`: Retorna uma lista de próximos lançamentos.
  - `500 Internal Server Error`: Em caso de erro ao buscar próximos lançamentos.

---

## Endpoints de Listas de Filmes

### 1. Criar Nova Lista

- **Rota**: `/lists`
- **Método**: `POST`
- **Descrição**: Cria uma nova lista de filmes.
- **Autenticação**: Requer token de autenticação.
- **Resposta**:
  - `201 Created`: Retorna a lista criada.
  - `401 Unauthorized`: Se o token de autenticação estiver ausente ou inválido.
  - `400 Bad Request`: Se os dados fornecidos forem inválidos.

### 2. Obter Listas do Usuário

- **Rota**: `/lists`
- **Método**: `GET`
- **Descrição**: Retorna todas as listas de filmes do usuário autenticado.
- **Autenticação**: Requer token de autenticação.
- **Resposta**:
  - `200 OK`: Retorna uma lista de listas do usuário.
  - `401 Unauthorized`: Se o token de autenticação estiver ausente ou inválido.
  - `400 Bad Request`: Em caso de erro ao buscar listas.

### 3. Obter Detalhes de uma Lista

- **Rota**: `/lists/:id`
- **Método**: `GET`
- **Descrição**: Retorna os detalhes de uma lista específica pelo ID.
- **Parâmetros**:
  - `id` (obrigatório): O ID da lista.
- **Resposta**:
  - `200 OK`: Retorna os detalhes da lista.
  - `404 Not Found`: Se a lista não for encontrada.
  - `400 Bad Request`: Em caso de erro ao buscar detalhes da lista.

### 4. Adicionar Filme à Lista

- **Rota**: `/lists/add-movie`
- **Método**: `POST`
- **Descrição**: Adiciona um filme à lista de filmes do usuário.
- **Autenticação**: Requer token de autenticação.
- **Resposta**:
  - `200 OK`: Filme adicionado com sucesso.
  - `401 Unauthorized`: Se o token de autenticação estiver ausente ou inválido.
  - `400 Bad Request`: Em caso de erro ao adicionar filme à lista.

### 5. Remover Filme da Lista

- **Rota**: `/lists/remove-movie`
- **Método**: `POST`
- **Descrição**: Remove um filme de uma lista de filmes do usuário.
- **Autenticação**: Requer token de autenticação.
- **Resposta**:
  - `200 OK`: Filme removido com sucesso.
  - `401 Unauthorized`: Se o token de autenticação estiver ausente ou inválido.
  - `400 Bad Request`: Em caso de erro ao remover filme da lista.

### 6. Deletar Lista

- **Rota**: `/lists/:id`
- **Método**: `DELETE`
- **Descrição**: Deleta uma lista de filmes pelo ID.
- **Autenticação**: Requer token de autenticação.
- **Parâmetros**:
  - `id` (obrigatório): O ID da lista.
- **Resposta**:
  - `200 OK`: Lista deletada com sucesso.
  - `404 Not Found`: Se a lista não for encontrada.
  - `401 Unauthorized`: Se o token de autenticação estiver ausente ou inválido.
  - `400 Bad Request`: Em caso de erro ao deletar lista.

---

## Endpoints de Autenticação

### 1. Registrar Novo Usuário

- **Rota**: `/register`
- **Método**: `POST`
- **Descrição**: Registra um novo usuário.
- **Resposta**:
  - `201 Created`: Usuário registrado com sucesso.
  - `400 Bad Request`: Se os dados fornecidos forem inválidos.

### 2. Login de Usuário

- **Rota**: `/login`
- **Método**: `POST`
- **Descrição**: Autentica um usuário e retorna um token JWT.
- **Resposta**:
  - `200 OK`: Retorna o token de autenticação.
  - `400 Bad Request`: Se as credenciais estiverem incorretas.

### 3. Rota Protegida

- **Rota**: `/protected`
- **Método**: `GET`
- **Descrição**: Exemplo de rota protegida que requer autenticação.
- **Autenticação**: Requer token de autenticação.
- **Resposta**:
  - `200 OK`: Retorna uma mensagem de sucesso.
  - `401 Unauthorized`: Se o token de autenticação estiver ausente ou inválido.

#### Estrutura:

```bash
   app.ts
│   server.ts
│
├───config
│       apiConfig.ts
│       db.ts
│
├───controllers
│       authController.ts
│       listController.ts
│       movieController.ts
│
├───middlewares
│       authMiddleware.ts
│
├───models
│       listModel.ts
│       User.ts
│
├───routes
│       authRoutes.ts
│       listRoutes.ts
│       movieRoutes.ts
│
└───services
        authService.ts
        listService.ts
        movieService.ts
```
