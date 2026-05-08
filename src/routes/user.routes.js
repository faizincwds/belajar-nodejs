import express from 'express'
import authMiddleware from '../middlewares/auth.middleware.js'
import { profile } from '../controllers/user.controller.js'

const router = express.Router()

router.get('/profile', authMiddleware, profile)


export default router