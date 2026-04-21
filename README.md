# 🚀 Event Management System (Full Stack Project)

## 📌 Project Overview

This is a fully functional **Event Management Web Application** where users can:

* Register & Login securely 🔐
* View available events 📅
* Register for events 🎟️
* Track their registrations 📊
* View real-time analytics on dashboard 📈

The system is built using a **full-stack architecture** with proper backend, database integration, and deployment.

---

## 🛠️ Tech Stack

### 🔹 Frontend

* React (Vite)
* HTML, CSS, JavaScript
* Netlify (Deployment)

### 🔹 Backend

* Spring Boot (Java)
* REST APIs
* Maven
* Railway (Deployment)

### 🔹 Database

* MySQL (Railway Cloud Database)

---

## ⚙️ Features

### ✅ Authentication

* User Signup & Login
* Email uniqueness validation
* Password validation

### ✅ Event Management

* View all available events
* Event details (date, location, capacity)

### ✅ Registration System

* Register for events
* Prevent duplicate registrations
* Auto capacity management

### ✅ Dashboard & Analytics

* Total events count
* Registered events count
* Remaining events
* Progress bar visualization
* Real-time updates

---

## 🧠 System Architecture

Frontend (React)
⬇️
Backend (Spring Boot REST API)
⬇️
Database (MySQL - Railway)

All data is dynamically fetched and updated via APIs.

---

## 🌐 Deployment Details

### 🔹 Frontend Deployment (Netlify)

* Hosted on Netlify
* Connected to GitHub repository
* Auto-deploy enabled

### 🔹 Backend Deployment (Railway)

* Spring Boot app deployed on Railway
* Uses dynamic port configuration
* REST APIs exposed publicly

### 🔹 Database (Railway MySQL)

* Cloud-hosted MySQL database
* Connected via environment variables
* Stores users, events, and registrations

---

## 🔗 Live Links

* 🌐 Frontend: [https://spontaneous-moxie-e7558a.netlify.app/login]
* ⚙️ Backend API: https://emsapp1-production.up.railway.app/api

---

## 📦 API Endpoints

### 🔹 Authentication

* POST `/api/auth/signup`
* POST `/api/auth/login`

### 🔹 Events

* GET `/api/events`
* POST `/api/events/create`

### 🔹 Registrations

* POST `/api/registrations/register`
* GET `/api/registrations/user/{userId}`

---

## 🚀 How It Works

1. User registers → data stored in MySQL
2. User logs in → verified via backend
3. Events fetched from database
4. User registers for event →

   * Registration stored
   * Capacity updated
5. Dashboard fetches real-time data → analytics updated

---

## 📊 Key Highlights

* Full-stack implementation
* Real-time database updates
* Clean UI with responsive design
* RESTful API architecture
* Cloud deployment (Netlify + Railway)

---

## 🧪 Testing

* APIs tested using Postman
* End-to-end flow verified (Signup → Login → Register → Dashboard)

---

## 📌 Future Improvements

* Admin panel for event creation
* Email notifications
* JWT authentication
* Search & filter events

---

## 🙌 Conclusion

This project demonstrates complete **full-stack development skills**, including:

* Frontend design
* Backend API development
* Database integration
* Deployment & hosting

---

⭐ This project is built to showcase real-world application development and problem-solving skills.
