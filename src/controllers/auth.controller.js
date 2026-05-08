import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid'

import User from '../models/User.js'

export const register = async (req, res) => {

    try {

        const { username, email, password } = req.body

        const checkUser = await User.findOne({
            where: { email }
        })

        if (checkUser) {

            return res.status(400).json({
                success: false,
                message: 'Email already exists'
            })

        }

         //////////////////////////////////////////////////////
        // VALIDATION
        //////////////////////////////////////////////////////
        if (!username || !email || !password) {

            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            })

        }

        if (password.length < 6) {

            return res.status(400).json({
                success: false,
                message: 'Password minimal 6 karakter'
            })

        }

        //////////////////////////////////////////////////////
        // CHECK EMAIL
        //////////////////////////////////////////////////////
        const checkEmail = await User.findOne({
            where: { email }
        })

        if (checkEmail) {

            return res.status(400).json({
                success: false,
                message: 'Email already exists'
            })

        }

        //////////////////////////////////////////////////////
        // CHECK USERNAME
        //////////////////////////////////////////////////////

        const checkUsername = await User.findOne({
            where: { username }
        })

        if (checkUsername) {

            return res.status(400).json({
                success: false,
                message: 'Username already exists'
            })

        }

        //////////////////////////////////////////////////////
        // HASH PASSWORD
        //////////////////////////////////////////////////////

        const hashPassword = await bcrypt.hash(password, 10)

        //////////////////////////////////////////////////////
        // HASH PASSWORD
        //////////////////////////////////////////////////////
        const user = await User.create({

            id: uuidv4(),
            username,
            email,
            password: hashPassword

        })

        //////////////////////////////////////////////////////
        // RESPONSE
        //////////////////////////////////////////////////////
        return res.status(201).json({
            success: true,
            message: 'Register success',
            data: user

        })

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        })

    }

}

export const login = async (req, res) => {

    try {

        const { email, password } = req.body

        //////////////////////////////////////////////////////
        // CHECK USER
        //////////////////////////////////////////////////////
        const user = await User.findOne({
            where: { email }
        })

        if (!user) {

            return res.status(404).json({
                success: false,
                message: 'User not found'
            })

        }

        //////////////////////////////////////////////////////
        // VERIFY PASSWORD
        //////////////////////////////////////////////////////
        const validPassword = await bcrypt.compare(
            password,
            user.password
        )

        if (!validPassword) {

            return res.status(400).json({
                success: false,
                message: 'Wrong password'
            })

        }

        //////////////////////////////////////////////////////
        // GENERATE TOKEN
        //////////////////////////////////////////////////////
        const token = jwt.sign({

            id: user.id,
            email: user.email,
            role: user.role

        },
        process.env.JWT_SECRET,
        {
            expiresIn: '1d'
        })

        //////////////////////////////////////////////////////
        // RESPONSE
        //////////////////////////////////////////////////////

        return res.status(200).json({

            success: true,
            message: 'Login success',
            token,
            // user: {
            //     id: user.id,
            //     username: user.username,
            //     email: user.email,
            //     roles_id: user.roles_id
            // }

        })

    } catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        })

    }

}

