import express from 'express'
import authMiddleware from '../middlewares/auth.middleware.js'
import { register, login } from '../controllers/auth.controller.js'
import { profile } from '../controllers/user.controller.js'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)

router.get('/profile', authMiddleware, profile)


export default router