# CRUD User Management App

ユーザ情報を管理するためのCRUDアプリケーションです。
Node.js（Express）で構築したREST APIと、ブラウザで動作するフロントエンドUIで構成されています。

---

## Features

- ユーザ情報の**作成/取得/更新/削除（CRUD）**
- Express を用いたシンプルで拡張しやすいAPI設計
- フロントエンドからAPIを直接操作できるUI
- **XSS 対策を実装（エスケープ処理）**
- **配列管理からPostgreSQL + Prismaに移行し、永続的なデータ保存が可能に**

## Tech Stack

- **Backend**: Node.js / Express
- **Frontend**: HTML / Javascript
- **Database**: postgresql
- **ORM**: Prisma (Prisma Client / schema.prisma)

---

## Project Structure
```
project-root
├── LICENSE
├── README.md
├── package-lock.json
├── package.json
├── prisma
│   └── schema.prisma
├── public
│   ├── index.html
│   └── js
│       └── index.js
└── src
    ├── app.js
    ├── controllers
    │   └── usersController.js
    ├── models
    │   └── prisma.js
    └── routes
        └── users.js

```

---

## API Endpoints

| Method | Endpoint        | Description          |
|--------|------------------|----------------------|
| GET    | `/users`         | 全ユーザー取得       |
| GET    | `/users/:id`     | 特定ユーザー取得     |
| POST   | `/users`         | 新規ユーザー作成     |
| PUT    | `/users/:id`     | ユーザー情報更新     |
| DELETE | `/users/:id`     | ユーザー削除         |

---

## How to Run

### 1. Install dependencies
```
npm install
```
### 2. Set environment variables
Create a .env file in the project root : 
```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DBNAME"
```

### 3. Rundatabase migration (Prisma)
```
npx prisma migrate dev
```

### 4. Start server
```
node ./src/app.js
```

### 5. Access frontend
```
http://localhost:3000
```

---

# Future Improvements
- バリデーションの強化
- 認証機能を追加

---
# License
This project is licensed under the MIT License.
See the LICENSE file for details.
