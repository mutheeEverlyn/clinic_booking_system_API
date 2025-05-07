# 🏥 Clinic Management API

This is a RESTful API built with **Node.js**, **Express**, and **MySQL** to manage a simple clinic system. It supports full CRUD (Create, Read, Update, Delete) operations for managing patients, doctors, appointments, and treatments.

---

## 📌 Features

- Manage **Patients** (Add, View, Update, Delete)
- Manage **Doctors** (Add, View, Update, Delete)
- Manage **Appointments** (Schedule, View, Reschedule, Cancel)
- Manage **Treatments** (Add, View)
- Link **Treatments to Appointments**

---

## 🧱 Tech Stack

- **Backend**: Node.js + Express
- **Database**: MySQL
- **Environment Management**: dotenv

---

## 📂 Folder Structure

```
clinic_booking_system/
│
├── .env                     # Environment variables (excluded via .gitignore)
├── .gitignore               # Excludes node_modules, .env
├── app.js                   # Main Express server entry point
├── db.js                    # MySQL database connection setup
├── package.json             # Project metadata and dependencies
├── clinic_booking_system.sql # SQL schema and sample data
├── clinic booking system.svg # ERD diagram of the database
│
├── routes/                  # Route modules
│   ├── patients.js          # Patient routes
│   ├── doctors.js           # Doctor routes
│   ├── appointments.js      # Appointment routes
│   ├── treatments.js        # Treatment routes
│   └── appointmentTreatments.js # Links treatments to appointments
│
└── README.md                
```

---

## 🛠️ Setup Instructions

1. **Clone the repository:**

```bash
git clone https://github.com/mutheeEverlyn/clinic_booking_system_API.git
cd clinic_booking_system
```

2. **Install dependencies:**

```bash
pnpm install
```

3. **Configure your `.env` file:**

```
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=clinic_booking_system
PORT=3000
```

4. **Start the server:**

```bash
node server.js
```

---

## 🧪 API Endpoints

### 🔹 Patients (`/patients`)
- `GET /patients` — Get all patients  
- `POST /patients` — Create a new patient  
- `PUT /patients/:id` — Update patient details  
- `DELETE /patients/:id` — Delete a patient  

### 🔹 Doctors (`/doctors`)
- `GET /doctors` — Get all doctors  
- `POST /doctors` — Create a new doctor  
- `PUT /doctors/:id` — Update doctor details  
- `DELETE /doctors/:id` — Delete a doctor  

### 🔹 Appointments (`/appointments`)
- `GET /appointments` — Get all appointments  
- `POST /appointments` — Schedule a new appointment  
- `PUT /appointments/:id` — Reschedule an appointment  
- `DELETE /appointments/:id` — Cancel an appointment  

### 🔹 Treatments (`/treatments`)
- `GET /treatments` — Get all treatments  
- `POST /treatments` — Add a new treatment  

### 🔹 Appointment-Treatments (`/appointment-treatments`)
- `GET /appointment-treatments` — Get linked treatments for appointments  
- `POST /appointment-treatments` — Link a treatment to an appointment  

---

## 🧩 Entity Relationship Diagram (ERD)

> The following is the visual database design used for this project:

![clinic booking system database](./clinic%20booking%20system.svg)

---

## 📫 Author

- GitHub: [@mutheeEverlyn](https://github.com/mutheeEverlyn)
