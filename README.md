# Sulman Shop

A small full-stack e-commerce application built with **Laravel** (backend) and **React** (frontend).

## Tech Stack

- **Backend**: Laravel (REST API)
- **Database**: MySQL
- **Frontend**: React.js
- **API Requests**: Axios

## Project Structure

- **`backend/`**: Contains the Laravel REST API.
- **`frontend/`**: Contains the React application.

---

## Setup Instructions

### 1. Backend Setup (Laravel)

To set up the backend (Laravel), follow these steps:

1. **Navigate to the Backend Directory**:
   ```bash
   cd backend
Install Dependencies: Make sure Composer is installed, then run:

composer install
Setup Environment: Copy the environment configuration file:

cp .env.example .env
Then, generate the application key:

php artisan key:generate
Create Database:
Ensure you have a MySQL database named ecommerce_db created locally.

Run Migrations: Apply the database migrations to set up the required tables:

php artisan migrate --seed
Start the Server: Run the Laravel development server:

php artisan serve
The backend will be available at http://127.0.0.1:8000.

2. Frontend Setup (React)
To set up the frontend (React), follow these steps:

Navigate to the Frontend Directory:

cd frontend
Install Dependencies: Make sure Node.js is installed, then run:

npm install
Start the Development Server: Run the React development server:

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

A database named ecommerce_db must be created before running migrations.

Node.js and Composer are installed on your machine.

Notes
The project uses Axios for making API requests between the React frontend and Laravel backend.

If you encounter issues, ensure your environment is set up correctly (MySQL, Node.js, Composer).

