# Hub Local Backend

Este é o backend do projeto **Hub Local**, desenvolvido com [NestJS](https://nestjs.com/) e [TypeORM](https://typeorm.io/) com suporte a PostgreSQL.

## 📆 Requisitos

- Node.js (versão compatível com o NestJS)
- pnpm (utilizado como gerenciador de pacotes)
- Banco de dados PostgreSQL

## 🚀 Scripts disponíveis

### Rodar o projeto

### Docker Compose

```bash 
docker-compose up -d
```

#### Ambiente de desenvolvimento
```bash
pnpm install
pnpm start:dev
```

#### Ambiente de produção
```bash
pnpm build
pnpm start:prod
```

### Build do projeto
```bash
pnpm build
```

---

## Migrations (TypeORM)

### Gerar uma nova migration

> Substitua `MigrationName` pelo nome da sua migration (sem espaços):

```bash
pnpm migration:generate --name=MigrationName
```

### Rodar as migrations
```bash
pnpm migration:run
```

### Reverter a última migration
```bash
pnpm migration:revert
```

### Listar migrations pendentes
```bash
pnpm migration:show
```

## Lint e formatação

### Verificar e corrigir problemas de lint
```bash
pnpm lint
```






