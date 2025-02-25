// backend/route/adminRoutes.js
import express from 'express';
import { checkAdmin } from '../middleware/adminMiddleware.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authenticateToken, checkAdmin);

// Define admin routes here
router.get('/dashboard', (req, res) => {
    res.send("Welcome to the admin dashboard");
});

export default router;