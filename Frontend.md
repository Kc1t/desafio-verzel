# Frontend/CLI

## 1. Acesso à Tela Inicial (`/`)
- **Usuário não logado:**
  - Ao acessar a tela inicial, o usuário pode visualizar uma lista de filmes disponíveis.
  - O usuário pode pesquisar por filmes usando a barra de pesquisa.
  - Ao clicar em um filme, o usuário é redirecionado para a página de detalhes do filme (`/movies/[id]`).
  - Não há opção para adicionar filmes a listas, pois isso requer que o usuário esteja logado.

- **Usuário logado:**
  - Além de visualizar e pesquisar filmes, o usuário pode adicionar filmes a suas listas pessoais.
  - Ao clicar em um filme, o usuário é redirecionado para a página de detalhes do filme (`/movies/[id]`), onde pode adicionar o filme a uma lista.
  - O usuário tem acesso à funcionalidade de criação de novas listas e pode gerenciar suas listas existentes.

## 2. Registro e Login
- **Registro (`/register`):**
  - O usuário pode se registrar através da tela de login.
  - Após o registro bem-sucedido, o usuário pode fazer login.

- **Login (`/login`):**
  - O usuário faz login com suas credenciais.
  - Após o login, a lista padrão chamada **"Favoritos"** é criada automaticamente.
  - O usuário é redirecionado à tela inicial, agora com a capacidade de adicionar filmes às suas listas.

## 3. Gerenciamento de Listas
- **Criação de Listas:**
  - O usuário pode acessar a tela de listas (`/lists`) e criar novas listas personalizadas.
  - A lista **"Favoritos"** já está disponível após o login.

- **Visualização de uma Lista:**
  - O usuário pode acessar uma lista específica através de `/list/[id]`, onde pode visualizar os filmes adicionados.

- **Adição de Filmes às Listas:**
  - O usuário pode pesquisar por filmes na tela inicial (`/`) ou na página de detalhes do filme (`/movies/[id]`).
  - Ao encontrar um filme desejado, o usuário pode adicioná-lo a uma das suas listas, incluindo a lista **"Favoritos"**.

- **Compartilhamento de Listas:**
  - Para compartilhar uma lista, o usuário pode copiar o link `/list/[id]` ou apertar o botão para compartilhar que copia o link ele pode enviá-lo para outras pessoas.

## 4. Detalhes de Filmes
- **Página de Detalhes (`/movies/[id]`):**
  - Ao clicar em um filme na tela inicial, o usuário é redirecionado para `/movies/[id]`, onde pode visualizar detalhes do filme.
  - Nesta tela, o usuário também pode pesquisar por outros filmes.

## 5. Logout
- **Deslogar:**
  - O usuário pode deslogar a qualquer momento através de um botão disponível no sistema atualmente disponível na tela de listas.
  - Após deslogar, o usuário perde o acesso às funcionalidades de listas, mas ainda pode visualizar e pesquisar filmes.

## 6. Comunicação com a API
- Todas as interações do usuário, incluindo login, registro, adição de filmes, criação de listas e logout, comunicam-se com uma API backend, que gerencia a autenticação e o armazenamento de dados.


#### Estrutura:

```bash
├───app
│   │   globals.css
│   │   ico.png
│   │   layout.tsx
│   │   not-found.tsx
│   │   page.tsx
│   │
│   ├───lists
│   │   │   CreateListBtn.tsx
│   │   │   page.tsx
│   │   │
│   │   ├───create
│   │   │       page.tsx
│   │   │
│   │   └───[id]
│   │           page.tsx
│   │
│   ├───loading
│   │       page.tsx
│   │
│   ├───login
│   │       page.tsx
│   │
│   ├───movies
│   │   └───[id]
│   │           page.tsx
│   │
│   └───register
│           page.tsx
│
├───components
│   │   Footer.tsx
│   │   Loading.tsx
│   │   Navbar.tsx
│   │   ShareLinkBtn.tsx
│   │
│   ├───home
│   │       Announcement.tsx
│   │       Header.tsx
│   │       HighGrades2024.tsx
│   │       HorrorContainer.tsx
│   │       HorrorMovies.tsx
│   │       PopularMovies.tsx
│   │       SearchInput.tsx
│   │       UpcomingMovies.tsx
│   │
│   ├───lists
│   │       CreateListModal.tsx
│   │
│   ├───loadings
│   │       SearchLoader.tsx
│   │
│   ├───movie
│   │       HorrorCard.tsx
│   │       MovieCard.tsx
│   │       SearchMovieCard.tsx
│   │
│   ├───movies
│   │       MovieAddList.tsx
│   │       MovieAnnouncement.tsx
│   │       MovieCast.tsx
│   │       MovieRelated.tsx
│   │       MoviesInfoHeader.tsx
│   │       MoviesSearchBar.tsx
│   │       MoviesTopBar.tsx
│   │
│   └───ui
│           button.tsx
│           card.tsx
│           dialog.tsx
│           input.tsx
│           label.tsx
│           radio-group.tsx
│           scroll-area.tsx
│           sheet.tsx
│           textarea.tsx
│           toast.tsx
│           toaster.tsx
│           use-toast.tsx
│
├───hooks
│       use-toast.ts
│
├───lib
│       formatDate.ts
│       utils.ts
│
├───schemas
│       validationSchema.ts
│
└───services
        auth.ts
        list.ts
        movie.ts

```
