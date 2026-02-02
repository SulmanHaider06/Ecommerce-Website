Sulman Shop
A small full-stack e-commerce application built with Laravel (backend) and React (frontend).

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
Navigate to the Backend Directory:

cd backend
Install Dependencies:

composer install
Setup Environment:

cp .env.example .env
php artisan key:generate
Create Database:
Ensure you have a MySQL database named ecommerce_db created locally.

Run Migrations:

php artisan migrate --seed
Start the Server:

php artisan serve
The backend will be available at http://127.0.0.1:8000.

Frontend Setup (React)
Navigate to the Frontend Directory:

cd frontend
Install Dependencies:

npm install
Start the Development Server:

npm run dev
The frontend will be available at http://localhost:3000.

Environment Variables (Backend)
In the backend/ directory, copy .env.example to .env and set the following variables:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=ecommerce_db
DB_USERNAME=root
DB_PASSWORD=
Assumptions
MySQL is installed and running on port 3306.

Node.js and Composer are installed.

Notes
The project uses Axios for API requests between the React frontend and Laravel backend.

If you encounter issues, ensure your environment is set up correctly (MySQL, Node.js, Composer).

