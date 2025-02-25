import { Booking } from '../models/bookingmodel.js';
import multer from 'multer';
import path from 'path';

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'bookinguploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

const createBooking = async (req, res) => {
    const { packageName, userName, userEmail, bookingDate, numberOfTravelers, documentType } = req.body;
    const documentFile = req.file ? req.file.path : null;

    if (!packageName || !userName || !userEmail || !bookingDate || !numberOfTravelers || !documentType || !documentFile) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const newBooking = await Booking.create({
            packageName,
            userName,
            userEmail,
            bookingDate,
            numberOfTravelers,
            documentType,
            documentFile
        });
        res.status(201).json(newBooking);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create booking" });
    }
};

const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.findAll();
        res.status(200).json(bookings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch bookings" });
    }
};

export { getAllBookings, createBooking, upload };