import express from 'express';
import { createBooking, getAllBookings, upload } from '../controller/bookingcontroller.js';

const router = express.Router();

router.post('/', upload.single('documentFile'), createBooking);
router.get('/', getAllBookings);

export default router;