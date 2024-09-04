```sh
│   .env
│   .gitignore
│   package-lock.json
│   package.json
│   README.md
│   tsconfig.json
│
└───src
    │   app.ts
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
