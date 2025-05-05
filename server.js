import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import patientsRoutes from './routes/patients.js';
import doctorsRoutes from './routes/doctors.js';
import appointmentsRoutes from './routes/appointments.js';
import treatmentRoutes from './routes/treatments.js';
import appointmentTreatmentRoutes from './routes/appointmentTreatments.js';

const app = express();

app.use(express.json());

//default routes
app.use('/patients', patientsRoutes);
app.use('/doctors', doctorsRoutes);
app.use('/appointments', appointmentsRoutes);
app.use('/treatments', treatmentRoutes);
app.use('/appointment-treatments', appointmentTreatmentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
