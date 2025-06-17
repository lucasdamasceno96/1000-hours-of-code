# 🧩 User and Product API – Spring Boot (Java 21)

This is a RESTful API developed using **Spring Boot** and **Java 21**, designed for managing **users and products**. The project is structured with a **layered architecture**, integrating **Spring Security** and **JWT (JSON Web Tokens)** for secure authentication and access control. It includes custom exception handling to ensure clean and consistent error responses.

---

## 🚀 Features

- ✅ User registration and authentication with JWT  
- ✅ CRUD operations for users and products  
- ✅ Secured endpoints with Spring Security  
- ✅ Global exception handling  
- ✅ Clean code structure using layered architecture

---

## 📐 Architecture

This project follows the **Layered Architecture** (also known as N-tier architecture), promoting separation of concerns, easier maintenance, and scalability.

### 1. **Controller Layer**
- Handles HTTP requests
- Maps endpoints to service methods
- Returns proper HTTP responses

### 2. **Service Layer**
- Contains business logic
- Coordinates repository interactions
- Throws domain-specific exceptions

### 3. **Repository Layer**
- Interfaces that extend Spring Data JPA
- Abstracts database interactions

### 4. **Model Layer**
- Defines entities like `User`, `Product`
- Used by JPA for persistence

### 5. **Security Layer**
- Manages authentication and authorization using JWT
- Contains token filters, security config, and user details service

### 6. **Exceptions Layer**
- Defines custom exception classes
- Includes global error handling (e.g., with `@ControllerAdvice`)

---

## 🔐 Authentication

The API uses **JWT (JSON Web Tokens)** with **Spring Security**:

- Users authenticate and receive a JWT.
- The token is included in the `Authorization` header (as `Bearer <token>`) for protected endpoints.
- The system validates the token on each request to secure user and product data.

---

## 🛠 Getting Started

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd my-first-spring-boot
````

2. Build the project:

   ```bash
   mvn clean install
   ```

3. Run the application:

   ```bash
   mvn spring-boot:run
   ```
---

## 📫 Contact

Feel free to open an issue or contribute to improve this API.

