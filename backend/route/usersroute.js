import express from 'express';
import { authenticateToken, checkAdmin } from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMiddleware.js';
import { makeUserAdmin } from '../controller/userscontroller.js';
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    updateUserProfile,
    getUserProfile
} from '../controller/userscontroller.js';

const router = express.Router();

router.get('/', authenticateToken, getAllUsers);
router.get('/profile', authenticateToken, getUserProfile);
router.get('/:id', authenticateToken, getUserById);
router.post('/', authenticateToken, createUser);
router.put('/profile', authenticateToken, upload.single('profilePic'), updateUserProfile); // Use upload middleware correctly
router.put('/:id', authenticateToken, updateUser);
router.delete('/:id', authenticateToken, deleteUser);
router.put('/:id/admin', authenticateToken, checkAdmin, makeUserAdmin);


export default router;