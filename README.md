# CRUD User Management App

ユーザ情報を管理するためのCRUDアプリケーションです。
Node.js（Express）で構築したREST APIと、ブラウザで動作するフロントエンドUIで構成されています。

---

## Features

-ユーザ情報の**作成/取得/更新/削除（CRUD）**
-Express を用いたシンプルで拡張しやすいAPI設計
-フロントエンドからAPIを直接操作できるUI

## Tech Stack

- **Backend**: Node.js / Express
- **Frontend**: HTML / Javascript
- **Database**: JSONファイル（簡易データストア）

---

## Project Structure
```
project-root
├── LICENSE
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── index.html
│   └── js
│       └── index.js
└── src
    ├── app.js
    ├── controllers
    │   └── usersController.js
    ├── models
    │   └── users.js
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

### 2. Start server
```
node ./src/app.js
```

### 3. Access frontend
```
http://localhost:3000
```

---

# Future Improvements
- バリデーションの強化
- 認証機能を追加
- データ帆損をJSONからデータベース（MySQL/PostgreSQLなど）へ移行

---
# License
This project is licensed under the MIT License.
See the LICENSE file for details.