# NeoFeeder API - Node.js Express Sequelize

## 📌 Deskripsi
Project backend REST API menggunakan:

- Node.js
- Express.js
- Sequelize ORM
- MySQL
- JWT Authentication
- bcrypt
- UUID

Project disiapkan untuk pengembangan sistem akademik / Neo Feeder / SIAKAD.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- Sequelize
- MySQL
- JWT
- bcrypt
- dotenv
- nodemon

---

## 📂 Struktur Folder

```bash
src/
│
├── config/
│   └── database.js
│
├── controllers/
│   ├── auth.controller.js
│   └── user.controller.js
│
├── middlewares/
│   └── auth.middleware.js
│
├── models/
│   └── User.js
│
├── routes/
│   ├── auth.routes.js
│   └── user.routes.js
│
└── server.js
```

## ⚙️ Installasi

### 1. Clone Project

```bash
git clone https://github.com/username/neofeeder.git
cd neofeeder
```

### 2. Install Dependencies
```bash
npm install
```

🔑 Environment

Buat file .env
```bash
APP_PORT=3000

DB_HOST=localhost
DB_PORT=3306
DB_NAME=neofeeder
DB_USER=root
DB_PASS=

JWT_SECRET=secretkey123
```

## ▶️ Menjalankan Server
### Development
```bash
npm run dev
Production
node src/server.js
```

## 🔐 Authentication

Menggunakan:

- JWT Token
- Bearer Authentication
- bcrypt password hashing

## 📌 Endpoint API
### Register
```bash
POST /api/auth/register

Body:

{
  "username": "admin",
  "email": "admin@gmail.com",
  "password": "123456"
}
```

### Login
```bash
POST /api/auth/login

Body:

{
  "email": "admin@gmail.com",
  "password": "123456"
}
```

### Response:
```bash
{
  "message": "Login success",
  "token": "JWT_TOKEN"
}
```

### Profile (Protected Route)
```bash
GET /api/users/profile


Headers:

Authorization: Bearer JWT_TOKEN
```

## 🛡 Middleware
auth.middleware.js

Digunakan untuk:
- Validasi JWT
- Protected Route
- Authorization

## 📦 Sequelize Model

User Model

Field:

- id (UUID)
- username
- email
- password

Fitur Saat Ini
- Register User
- Login JWT
- Password Hashing
- Protected Route
- User Profile
- Sequelize ORM
- UUID Primary Key

## REST API Structure
### 📌 Struktur REST API
```bash
/api/auth/*
/api/users/*
```

Rencana selanjutnya:
```bash
/api/mahasiswa/*
/api/dosen/*
/api/krs/*
/api/khs/*
/api/pembayaran/*
```

### 🧪 Testing API

Disarankan menggunakan:

- Postman / Insomnia / Thunder Client VSCode

### 📌 Notes

Jika menggunakan ES Module:
```bash
package.json

{
  "type": "module"
}
```

Gunakan import/export:
```bash
import express from 'express'
```

📄 License

MIT License