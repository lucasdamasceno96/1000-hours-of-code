# 📦 Subscription Tracker API

A RESTful API para gerenciamento de assinaturas (como Netflix, Spotify, etc). Permite aos usuários cadastrarem, consultarem e receberem lembretes sobre suas assinaturas.

## 🚀 Tecnologias Utilizadas

- **Node.js**: Runtime JavaScript para construção da API.
- **MongoDB + Mongoose**: Banco de dados NoSQL com ODM para modelagem dos dados.
- **Arcjet**: Middleware de segurança para proteção da aplicação.
- **Nodemailer**: Envio de emails para lembretes de renovação.
- **Upstash Workflows**: Automação de tarefas, como envio de notificações e lembretes.
- **JWT (JsonWebToken)**: Autenticação e autorização baseada em tokens.

## 🔐 Autenticação e Autorização

A API utiliza JWT para autenticar usuários e proteger rotas. Apenas usuários autenticados podem criar ou visualizar suas próprias assinaturas.

## 📬 Funcionalidade de Lembrete

O sistema agenda lembretes automáticos de renovação de assinatura utilizando **Upstash Workflows**, que busca assinaturas próximas do vencimento e dispara um email usando o **Nodemailer**.

## ⚙️ Requisitos

- Node.js >= 18
- MongoDB em execução local ou remoto
- `.env` com as seguintes variáveis:

```env
PORT=5500
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ARCJET_API_KEY=your_arcjet_key
EMAIL_HOST=smtp.yourprovider.com
EMAIL_PORT=587
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password


# API Routes

## Base URL: `/api/v1`

### Authentication Routes (`/api/v1/auth`)

1️⃣ **POST** `/sign-up` - Sign up a new user  
2️⃣ **POST** `/sign-in` - Sign in an existing user  
3️⃣ **POST** `/sign-out` - Sign out the current user  

### User Routes (`/api/v1/users`)

1️⃣ **GET** `/` - Get all users (requires authentication)  
2️⃣ **GET** `/:id` - Get user by ID (requires authentication)  
3️⃣ **POST** `/` - Create a new user 
4️⃣ **PUT** `/:id` - Update user by ID (requires authentication)  
5️⃣ **DELETE** `/:id` - Delete user by ID (requires authentication)

### Subscription Routes (`/api/v1/subscriptions`)

1️⃣ **GET** `/` - Get all subscriptions (requires authentication)  
2️⃣ **GET** `/:id` - Get a subscription by ID (requires authentication)  
3️⃣ **POST** `/` - Create a new subscription (requires authentication)  
4️⃣ **GET** `/user/:id` - Get all subscriptions for a user (requires authentication)  
5️⃣ **PUT** `/:id` - Update subscription by ID (requires authentication)  
6️⃣ **DELETE** `/:id` - Delete a subscription by ID (requires authentication)  
7️⃣ **PUT** `/:id/cancel` - Cancel a subscription (requires authentication)  
8️⃣ **GET** `/:id/upcoming-renewals` - Get upcoming renewals for a subscription (requires authentication)

### Authentication Routes (`/api/v1/auth`)

- [x] **POST** `/sign-up` - Sign up a new user  
- [x] **POST** `/sign-in` - Sign in an existing user  
- [x] **POST** `/sign-out` - Sign out the current user  

### User Routes (`/api/v1/users`)

- [X] **GET** `/` - Get all users (requires authentication)  
- [x] **GET** `/:id` - Get user by ID (requires authentication)  
- [x] **POST** `/` - Create a new user  
- [x] **PUT** `/:id` - Update user by ID (requires authentication)  
- [x] **DELETE** `/:id` - Delete user by ID (requires authentication)  

### Subscription Routes (`/api/v1/subscriptions`)

- [x] **GET** `/` - Get all subscriptions (requires authentication)  
- [x] **GET** `/:id` - Get a subscription by ID (requires authentication)  
- [x] **POST** `/` - Create a new subscription (requires authentication)  
- [X] **GET** `/user/:id` - Get all subscriptions for a user (requires authentication)  
- [x] **PUT** `/:id` - Update subscription by ID (requires authentication)  
- [x] **DELETE** `/:id` - Delete a subscription by ID (requires authentication)  
- [x] **PUT** `/:id/cancel` - Cancel a subscription (requires authentication)  
- [x] **GET** `/:id/upcoming-renewals` - Get upcoming renewals for a subscription (requires authentication)  
