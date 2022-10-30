# nest-sveltekit-auto
Mini project using NestJS, Prisma &amp; SvelteKit.
## Скрипты - server

### `npm run start:dev`

Запуск приложения в dev mode.

### `npm run db:dev:restart`

Последовательное выполнение команд: docker compose rm dev-db -s -f -v && docker compose up dev-db -d && prisma migrate deploy

### `npm run prisma:dev:deploy`

Выполнение команды: prisma migrate deploy

### `npm run db:dev:up`

Выполнение команды: docker compose rm dev-db -s -f -v

### `npm run db:dev:rm`

Выполнение команды: docker compose rm dev-db -s -f -v
## Скрипты - client

### `yarn dev`

Запуск приложения в dev mode.

### Имеются управляющие методы для создания, редактирования и удаления Автомобиля.
##
![nsa1](https://user-images.githubusercontent.com/101070701/198872516-71bed318-0937-4bb3-85e8-c473281a9674.png)
