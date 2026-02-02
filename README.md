Mini E-Commerce App
A small full-stack e-commerce application built with Laravel (backend) and React (frontend).

🚀 Tech Stack
Backend: Laravel

Database: MySQL

Frontend: React.js

HTTP Requests: Axios

📂 Project Structure
- backend/  → Laravel REST API
- frontend/ → React application
📝 Setup Instructions
1. Backend Setup
Navigate to the backend directory:

cd backend
Install backend dependencies:

composer install
Set up environment variables:

cp .env.example .env
Generate the application key:

php artisan key:generate
Create a database in MySQL named ecommerce_db (make sure MySQL is running).

Run database migrations and seed data:

php artisan migrate --seed
Start the backend server:

php artisan serve
2. Frontend Setup
Navigate to the frontend directory:

cd frontend
Install frontend dependencies:

npm install
Start the frontend development server:

npm run dev
🌱 Assumptions
MySQL is installed and running on the default port (3306).

The ecommerce_db database must be created manually before running migrations.

Node.js and Composer are installed.

💡 Environment Variables
Create a .env file in the backend/ directory (copy from .env.example), and add the following configuration for the MySQL connection:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=ecommerce_db
DB_USERNAME=root
DB_PASSWORD=
