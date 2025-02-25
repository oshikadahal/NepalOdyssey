import express from 'express';
import { packageController } from '../controller/packagescontroller.js';
import { authenticateToken } from '../middleware/authMiddleware.js'; // Import auth middleware
import upload from '../middleware/uploadMiddleware.js'; // Import upload middleware

const router = express.Router();

// Define routes
router.get('/', packageController.getAllPackages); // Protect route with middleware
router.get('/:id', authenticateToken, packageController.getPackageById); // Protect route with middleware
router.post('/', authenticateToken, upload.array('images', 6), packageController.createPackage); // Protect route with middleware
router.put('/:id', authenticateToken, upload.array('images', 6), packageController.updatePackage); // Protect route with middleware
router.delete('/:id', authenticateToken, packageController.deletePackage); // Protect route with middleware

export default router;