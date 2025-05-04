# 🏥 Clinic Management API

This is a RESTful API built with **Node.js**, **Express**, and **MySQL** to manage a simple clinic system. It supports full CRUD (Create, Read, Update, Delete) operations for managing patients, doctors, and appointments.

---

## 📌 Features

- Manage **Patients** (Add, View, Update, Delete)
- Manage **Doctors** (Add, View, Update, Delete)
- Manage **Appointments** (Schedule, View, Reschedule, Cancel)

---

## 🧱 Tech Stack

- **Backend**: Node.js + Express
- **Database**: MySQL
- **Environment Management**: dotenv

---

## 📂 Folder Structure

clinic_booking_system/
│ ├── .env # Environment variables (excluded via .gitignore)
│ ├── .gitignore # Excludes node_modules and env
│ ├── app.js # Main Express server entry point
│ ├── db.js # MySQL database connection setup
│ ├── routes/
│ │ ├── patients.js # Patient routes
│ │ ├── doctors.js # Doctor routes
│ │ └── appointments.js # Appointment routes
│ ├── package.json # Project metadata and dependencies
│ └── README.md # This README file
| |__clinic_booking_system.sql

# 🛠️ Setup Instructions
1.Clone the repository:
  git clone 
  cd 

2.Install dependencies:
  pnpm install

3.Configure .env file with your details in the setup below:
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=clinic_booking_system
PORT=3000

4.Start the server:
  node app.js

# clinic booking system ERD
  ![clinic booking system database](./clinic%20booking%20system.svg)