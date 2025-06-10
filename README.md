# MERN CRUD App

This is a full-stack **CRUD application** built using the **MERN stack** (MongoDB, Express, React, Node.js). It allows users to create, read, update, and delete user records. This app is built with clean architecture, modular routing, and supports API-based communication between frontend and backend.

## 🛠 Technologies Used

### Frontend:
- React (with Vite for fast builds)
- Axios or Fetch API
- Tailwind CSS (optional for styling)

### Backend:
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose (ODM)
- CORS, Dotenv

## ⚙️ How to Run Locally

### 1. Clone the repo

```bash
git clone https://github.com/manoj2244/mern-crud-app.git
cd mern-crud-app
2. Backend Setup

cd backend
yarn install         # or npm install
yarn run dev         # uses nodemon

.env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/dbname
3. Frontend Setup


cd frontend
yarn install         # or npm install
yarn dev
frontend/.env

.env

VITE_API_URL=http://localhost:5000/api

