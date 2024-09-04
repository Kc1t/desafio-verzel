```sh
│   .env.local
│   .eslintrc.json
│   .gitignore
│   components.json
│   next.config.js
│   package-lock.json
│   package.json
│   postcss.config.js
│   README.md
│   tailwind.config.ts
│   tsconfig.json
│
├───public
│   │   ico.png
│   │
│   └───assets
│       │   404.png
│       │   Logo.png
│       │
│       ├───background
│       │       announcement-bg.png
│       │       header-background.png
│       │       horror-bg.png
│       │       lists-bg.png
│       │       login-bg.png
│       │
│       └───svgs
│               AddSvg.tsx
│               FireSvg.tsx
│               MoviesSvg.tsx
│               PeopleSvg.tsx
│               ShareSvg.tsx
│               TrashSvg.tsx
│
└───src
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
   └───services
           auth.ts
           list.ts
           movie.ts
```
