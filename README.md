Syoft Backend
This repository contains the backend code for the Syoft application, built using Node.js, Express.js, MongoDB with Mongoose, and JWT for authentication.

Features
User registration and authentication with JWT tokens.
CRUD operations for managing products.
Role-based access control (admin and staff).
Getting Started
To run this project locally, follow these steps:

Prerequisites
Node.js installed on your machine
MongoDB Atlas account for cloud database access (or local MongoDB instance)
API testing tool like Postman


Installation
Clone the repository:
git clone https://github.com/your-username/syoft-backend.git

Install dependencies:
cd syoft-backend
npm install

Start the server:
npm start
The server should now be running on http://localhost:5000.

API Endpoints
Authentication
POST /register: Register a new user.
POST /login: Login with existing user credentials to receive a JWT token.
Users
GET /users: Retrieve all users (requires authentication).
Products
POST /product: Create a new product (admin only).
GET /product: Retrieve all products (admin only).
PUT /update-product/
: Update a product by ID (admin only).
DELETE /delete-product/
: Delete a product by ID (admin only).
Deployment
This application can be deployed to any cloud platform that supports Node.js applications. Make sure to set up environment variables for production deployment.

Built With
Node.js
Express.js
MongoDB with Mongoose
JSON Web Tokens (JWT)
Bootstrap (for frontend layout, if applicable)
Authors
Your Name
Tharun Ganji
This project is licensed under the MIT License - see the LICENSE file for details.
