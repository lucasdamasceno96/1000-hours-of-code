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

- [ ] **GET** `/` - Get all subscriptions (requires authentication)  
- [ ] **GET** `/:id` - Get a subscription by ID (requires authentication)  
- [x] **POST** `/` - Create a new subscription (requires authentication)  
- [ ] **GET** `/user/:id` - Get all subscriptions for a user (requires authentication)  
- [ ] **PUT** `/:id` - Update subscription by ID (requires authentication)  
- [ ] **DELETE** `/:id` - Delete a subscription by ID (requires authentication)  
- [ ] **PUT** `/:id/cancel` - Cancel a subscription (requires authentication)  
- [ ] **GET** `/:id/upcoming-renewals` - Get upcoming renewals for a subscription (requires authentication)  
