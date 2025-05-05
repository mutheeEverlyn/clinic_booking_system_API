
-- clinic booking system
CREATE DATABASE IF NOT EXISTS clinic_booking_system;

USE clinic_booking_system;

-- Patients table
CREATE TABLE patients (
    patient_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    dob DATE NOT NULL,
    gender ENUM('Male', 'Female', 'Other') NOT NULL,
    contact_info VARCHAR(255) UNIQUE NOT NULL
);

-- Doctors table
CREATE TABLE doctors (
    doctor_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    specialty VARCHAR(100) NOT NULL,
    contact_info VARCHAR(255) UNIQUE NOT NULL
);

-- Appointments table
CREATE TABLE appointments (
    appointment_id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT NOT NULL,
    doctor_id INT NOT NULL,
    appointment_date DATETIME NOT NULL,
    status ENUM('Scheduled', 'Completed', 'Cancelled') DEFAULT 'Scheduled',
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
    FOREIGN KEY (doctor_id) REFERENCES doctors(doctor_id)
);

-- Treatments table
CREATE TABLE treatments (
    treatment_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT
);

-- Appointment_Treatments junction table (Many-to-Many)
CREATE TABLE appointment_treatments (
    appointment_id INT,
    treatment_id INT,
    PRIMARY KEY (appointment_id, treatment_id),
    FOREIGN KEY (appointment_id) REFERENCES appointments(appointment_id),
    FOREIGN KEY (treatment_id) REFERENCES treatments(treatment_id)
);

-- Sample data insertion
INSERT INTO patients (name, dob, gender, contact_info) VALUES
('Ann Nyawira ', '1990-05-12', 'Female', 'ann@gmail.com'),
('Brian Kiptoo', '1985-03-23', 'Male', 'brian@gmail.com');

INSERT INTO doctors (name, specialty, contact_info) VALUES
('Dr. Sarah', 'Cardiologist', 'sarah@gmail.com'),
('Dr. James', 'Dermatologist', 'james@gmail.com');

INSERT INTO appointments (patient_id, doctor_id, appointment_date, status) VALUES
(1, 1, '2025-05-05 10:00:00', 'Scheduled'),
(2, 2, '2025-05-06 11:30:00', 'Completed');

INSERT INTO treatments (name, description) VALUES
('ECG', 'Electrocardiogram test for heart activity'),
('Skin Biopsy', 'Removal of skin sample for examination');

INSERT INTO appointment_treatments (appointment_id, treatment_id) VALUES
(1, 1),
(2, 2);
