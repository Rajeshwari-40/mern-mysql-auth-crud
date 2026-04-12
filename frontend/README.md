# MERN MySQL Auth CRUD Project

## Project Description

This project is a full-stack web application built using **React (Frontend), Node.js + Express (Backend), and MySQL (Database)**.

It includes:

* User Authentication (Register & Login)
* Forgot & Reset Password (UI)
* Dashboard Page
* Basic CRUD operations (Add, Edit, Delete items)
* REST API integration between frontend and backend

---

##  MySQL Database Setup

### 1. Create Database

Open MySQL / phpMyAdmin and create a database:

```sql
CREATE DATABASE auth_db;
```

---

### 2. Create Users Table

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  phone VARCHAR(15),
  password VARCHAR(255)
);
```

---

### 3. Insert Sample Data

```sql
INSERT INTO users (name, email, phone, password)
VALUES ('test', 'test@gmail.com', '1234567890', '123456');
```

---

##  Backend Installation

### 1. Go to backend folder

```bash
cd backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Required packages

* express
* cors
* mysql2
* dotenv
* nodemon

---



---

### 5. Run Backend

```bash
npm run dev
```

Backend runs at:

```
http://localhost:5000
```

---

##  Frontend Installation

### 1. Go to frontend folder

```bash
cd frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install required packages

```bash
npm install axios react-router-dom
```

### 4. Install Tailwind CSS

```bash
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

---

### 5. Configure Tailwind

#### tailwind.config.js

#### index.css

---

### 6. Run Frontend

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

##  How to Run Project

1. Start Backend:

```bash
cd backend
npm run dev
```

2. Start Frontend:

```bash
cd frontend
npm run dev
```

3. Open browser:

```
http://localhost:5173
```

---

##  API Endpoints

### Auth APIs

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| POST   | /api/auth/register | Register new user |
| POST   | /api/auth/login    | Login user        |
| GET    | /api/auth/me       | Get logged user   |

---

### Item APIs

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/items     | Get all items |
| POST   | /api/items     | Add item      |
| PUT    | /api/items/:id | Update item   |
| DELETE | /api/items/:id | Delete item   |

---

## 📸 Screenshots

### 🔐 Login Page

* User enters email and password
* Styled using Tailwind CSS

### 📝 Register Page

* User registration form
* Validations included

### 📊 Dashboard

* Displays items
* Add / Edit / Delete functionality

###  Add Item

* Form to add new item

###  Edit Item

* Update existing data

###  Delete Confirmation

* Delete item with confirmation

###  Database Screenshot

* MySQL `users` table with stored data

---

##  Features

* Responsive UI using Tailwind CSS
* REST API integration
* Authentication system
* CRUD operations
* Clean folder structure

---

##  Author

* Name: Rajeshwari MB
* Project: MERN Stack Assignment

---
