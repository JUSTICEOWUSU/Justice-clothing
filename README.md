# E-Commerce React App

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a full-stack e-commerce web application built with React for the front end and Node.js for the back end. It includes user authentication, product browsing, shopping cart functionality, order management, and an admin dashboard for managing products and orders.

## Features

- User authentication (sign up, login, logout)
- Product listing and details
- Shopping cart functionality
- Order processing and management
- Admin dashboard for product and order management
- Responsive design for mobile and desktop

## Tech Stack

**Front End:**

- React
- Redux (@toolkit)
- React Router
- css module
- js-cookie
- react-stripe-checkout
- react-icons

**Back End:**

- Node.js
- Express
- MongoDB
- Mongoose
- JWT and passportJS for authentication
- JWT for password hashing

**Others:**

- ESLint and Prettier for code quality
- Postman for API testing
- Vite

## Installation

  ### Prerequisites
  
  Make sure you have the following installed:
  
  - Node.js (v14.x or higher)
  - npm (v6.x or higher)
  - MongoDB (v4.x or higher)
  
  ### Clone the repository
  
      git clone https://github.com/yourusername/ecommerce-react-app.git
      cd ecommerce-react-app
  
### Install dependencies
  1. Install server dependencies
        ```sh
        cd server
        npm install
    
  2. Install client dependencies
        ```sh
        cd ../client
        npm install

## Usage
  1. Start the development server
        ```sh
        npm run start-server
  
  2. Open your browser and navigate to http://localhost:7000.
  
  ### Environment Variables
  Create a .env file in the server directory and add the following:  
    ```sh
    
    MONGODB_KEY=<your_MongoDB_connection_Key>
    JWT_KEY=<your_JWT_key>
    FACEBOOK_SECRET_KEY=<your_Facebook_secret_key>
    FACEBOOK_CLIENT_ID=<your_facebook_client_key>
    GOOGLE_SECRET_KEY=<your_Google_Secret_key>
    GOOGLE_CLIENT_ID=<your_Google_Client_ID_key>


## Project Structure
    ```sh
    ecommerce-react-app/
    │
    ├── client/                  # Front-end code (React)
    │   ├── public/              # Static files
    │   └── src/                 # React components and logic
    │       ├── components/      # Reusable components
    │       ├── pages/           # Page components
    │       ├── redux/           # Redux store, actions, reducers
    |       ├── Types/           # Reusable typescript Types
    │       ├── App.tsx          # Main App component
    │       └── main.tsx         # Entry point
    │
    ├── server/
        ├── dist               # Already built Client Code
        ├── src                # Back-end code (Node.js)
    │     ├── database/        # Mongoose models and Mongoose connections
    │     ├── routes/          # Express routes
    │     ├── mongoDb_Data/    # App Data
    │     ├── public/          # Static files
    │     ├── app.ts           # Main server Components
    │     ├── index.ts         # Entry point
    │   └── .env               # Environment variables
    │
    ├── .gitignore               # Git ignore file
    ├── README.md                # Project documentation
    └── package.json             # Project metadata

## API Documentation

  ### Authentication
   1. POST /api/auth/register: Register a new user
   2. POST /api/auth/login: Authenticate a user
  
  ### Products
  1. GET /api/products: Get all products
  2.GET /api/products/
     : Get product by ID
  3. POST /api/products: Create a new product (admin only)
  4. PUT /api/products/
     : Update a product (admin only)


## Contributing
Contributions are welcome! Please submit a pull request or open an issue to discuss your changes.

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

