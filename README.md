# Contact Management System API

A robust REST API built with Node.js, Express, and MongoDB for managing contacts with user authentication.

## 📋 Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Database Schema](#database-schema)
- [API Endpoints](#api-endpoints)
- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)

## ✨ Features
- User authentication (Register, Login, Logout)
- Secure password handling
- CRUD operations for contacts
- User-specific contact management
- JWT-based authentication
- Error handling
- MongoDB integration

## 📁 Project Structure
```sh
project-root/
├── controllers/
│ ├── authControllers.js # Authentication related controllers
│ └── userControllers.js # Contact management controllers
├── models/
│ ├── user.js # User schema definition
│ └── contact.js # Contact schema definition
├── index.js # Application entry point
└── .env # Environment variables
```


## 🛠 Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt (for password hashing)
- dotenv (for environment variables)

## 💾 Database Schema

### User Schema
```javascript
{
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}
```
### Contact Schema
```javascript
{
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
}
```
## 🔌 API Endpoints
### Authentication Endpoints
* POST `/api/auth/register` - Register a new user

* POST `/api/auth/login`- User login

* GET `/api/auth/user` - Get user details
 
* POST `/api/auth/logout` - User logout

## Contact Management Endpoints
* POST `/api/contacts` - Add a new contact

* GET `/api/contacts` - Get all contacts for logged-in user

* PUT `/api/contacts/:id` - Update a specific contact

* DELETE `/api/contacts/:id` - Delete a specific contact

## 🚀 Setup Instructions
#### 1. Clone the repository
```bash
git clone <repository-url>
cd <project-directory>
```
#### 2. Install dependencies

```bash
npm install
```
#### 3. **Set up environment variables** 
Create a .env file in the root directory and add the following:
```env
PORT=<your-port>
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
ORIGIN=<allowed-origin-for-cors>
```
#### 4. Start the server
```bash
npm start
```
## ⚙️ Environment Variables

* `PORT`: Server port number

* `MONGODB_URI`: MongoDB connection string

* `JWT_SECRET`: Secret key for JWT token generation

* `ORIGIN`: Allowed origin for CORS

## 🔐 Authentication
The API uses JWT (JSON Web Tokens) for authentication. To access protected routes:

1.  First login/register to get the JWT token

2. Include the token in the Authorization header: `Authorization: Bearer <your-token>`

## 🛡️ Security Features
* Password hashing

* JWT authentication

* User-specific data access

* CORS protection

* Environment variable usage for sensitive data

## 📝 Error Handling
The API implements proper error handling with appropriate HTTP status codes and error messages in the following format:
```json
{
       success: false,
    message: "Error message details"
}
```
## 🔄 Response Format
Successful responses follow the format:

```json
{
       success: true,
    message: "Success message",
    data: {} // Optional data object
}
```
## Note
This project uses a MongoDB database to store data. You will need to have a MongoDB instance running on your local machine or a remote server to use this project. Additionally, you will need to update the db.js file to point to your MongoDB instance.

## 📬 Contact & Support

### Project Maintainer
- **Name**: Loordhu Jeyakumar
- **Email**: loordhujeyakumar@gmail.com
- **LinkedIn**: [linkedin.com/in/loordhujeyakumar](https://linkedin.com/in/loordhujeyakumar)
- **GitHub**: [@loordhujeyakumar](https://github.com/loordhujeyakumar)

### Repository
- **GitHub**: [Contact-Management-System](https://github.com/LoordhuJeyakumar/Contact-Manager-backend)
- **Issues**: [Report a Bug](https://github.com/LoordhuJeyakumar/Contact-Manager-backend/issues)
- **Discussions**: [Join the conversation](https://github.com/LoordhuJeyakumar/Contact-Manager-backend/discussions)

### License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
<div align="center">
    Made with ❤️ by Loordhu Jeyakumar<br>
    Copyright © 2024 Contact Management System
</div>
