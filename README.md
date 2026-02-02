Sulman Shop
This is a small full-stack e-commerce application built with Laravel (backend) and React (frontend).

Tech Stack
Backend: Laravel (REST API)

Database: MySQL

Frontend: React.js

API Requests: Axios

Project Structure
backend/: Contains the Laravel REST API.

frontend/: Contains the React application.

Setup Instructions
Backend Setup (Laravel)
Navigate to the Backend Directory
In your terminal, run the following command to navigate to the backend directory:

cd backend

Install Dependencies
Ensure Composer is installed on your system. Then, install all backend dependencies by running:

composer install

Setup Environment
Copy the .env.example file to .env:

cp .env.example .env

Next, generate the application key to handle encryption:

php artisan key:generate

Create Database
Ensure you have a MySQL database named ecommerce_db created on your local machine before running migrations.

Run Migrations
Apply the database migrations to set up the required tables in your database:

php artisan migrate --seed

Start the Server
Start the Laravel development server with:

php artisan serve

The backend will be available at http://127.0.0.1:8000.

Frontend Setup (React)
Navigate to the Frontend Directory
In your terminal, run the following command to navigate to the frontend directory:

cd frontend

Install Dependencies
Ensure Node.js is installed on your system. Then, install all frontend dependencies by running:

npm install

Start the Development Server
Run the React development server with:

npm run dev

The frontend will be available at http://localhost:3000.

Environment Variables (Backend)
In the backend/ directory, copy .env.example to .env and set the following variables:

DB_CONNECTION=mysql

DB_HOST=127.0.0.1

DB_PORT=3306

DB_DATABASE=ecommerce_db

DB_USERNAME=root

DB_PASSWORD= (leave empty by default for local setups)

Assumptions
MySQL is installed and running on the default port 3306.

A database named ecommerce_db must be created before running migrations.

Node.js and Composer are installed on your machine.

Notes
This project uses Axios for making API requests between the React frontend and Laravel backend.

