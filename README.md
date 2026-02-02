# Mini E-Commerce App

A small full-stack e-commerce application built with Laravel (backend) and React (frontend).

## Tech Stack
- Laravel
- MySQL
- React.js
- Axios

## Project Structure
- backend/  → Laravel REST API
- frontend/ → React application

## Setup Instructions
## Environment Variables
Create a `.env` file in the `backend` directory (copy from `.env.example`).
Key variables:
- `DB_CONNECTION=mysql`
- `DB_HOST=127.0.0.1`
- `DB_PORT=3306`
- `DB_DATABASE=ecommerce_db`
- `DB_USERNAME=root`
- `DB_PASSWORD=` (empty by default for local setups)

## Assumptions
- MySQL is installed and running on default port 3306.
- A database named `ecommerce_db` must be created before running migrations.
- Node.js and Composer are installed.

## Setup Instructions
### Backend
1. Navigate to `backend/`: `cd backend`
2. Install dependencies: `composer install`
3. Setup env: `cp .env.example .env`
4. Generate key: `php artisan key:generate`
5. Create database: Ensure `ecommerce_db` exists in your MySQL.
6. Run migrations: `php artisan migrate --seed`
7. Start server: `php artisan serve`

### Frontend
1. Navigate to `frontend/`: `cd frontend`
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`



<img width="1920" height="958" alt="image" src="https://github.com/user-attachments/assets/71e82310-d8f1-4e1d-b4a6-fb7637080262" />
<img width="1920" height="884" alt="image" src="https://github.com/user-attachments/assets/7cf15f24-e61e-4eb9-a9dd-eed77766e019" />
<img width="1920" height="988" alt="image" src="https://github.com/user-attachments/assets/5a90235c-4a63-4c90-aacb-1876759df328" />
