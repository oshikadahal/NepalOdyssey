import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./route/usersroute.js";
import packageRoutes from "./route/packagesroute.js";
import contactRoutes from "./route/contactroute.js";
import bookingRoutes from "./route/bookingroute.js";
import authRoutes from "./route/authRoutes.js"; // Import auth routes
import reviewRoutes from './route/reviewroute.js';

import { sequelize, testConnection } from './database/db.js';
import { authenticateToken } from './middleware/authMiddleware.js';

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

// Middleware
app.use(cors({
    origin: [`http://localhost:5173`, `http://localhost:5174`, `http://localhost:5175`],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Test route
app.get('/login', (req, res) => {
    res.send("Welcome to the web page");
});

app.use('/uploads', express.static('uploads'));
app.use('/bookinguploads', express.static('bookinguploads'));

// Correct the API route prefix
app.use('/api/bookings', bookingRoutes);

// Review routes
app.use('/reviews', reviewRoutes);

// Set up routes for users
app.use('/users', authenticateToken, userRoutes);

// Set up routes for packages
app.use('/packages', packageRoutes); // Ensure no authenticateToken middleware here

// Set up routes for contact
app.use('/contact', contactRoutes);

// Set up routes for auth
app.use('/auth', authRoutes); // Use auth routes with the prefix '/auth'

// Handle booking creation
app.post('/booking/create', (req, res) => {
  // Handle the booking creation logic here
  res.json({ message: 'Booking created successfully' });
});

// Test database connection
sequelize.authenticate()
    .then(() => {
        console.log('Database connected...');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// Sync database
sequelize.sync()
    .then(() => {
        console.log('Database synced...');
    })
    .catch(err => {
        console.error('Unable to sync the database:', err);
    });

// Start the server
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Server is shutting down...');
  server.close(() => {
    process.exit(0);
  });
});

export default app;