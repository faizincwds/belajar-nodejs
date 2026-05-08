import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import sequelize from './config/database.js'

import User from './models/User.js'

import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)

app.get('/', (req, res) => {
    res.json({
        message: 'SIAKAD API Running'
    })
})

async function startServer() {
    try {

        await sequelize.authenticate()

        console.log('Database connected')

        await sequelize.sync()

        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`)
        })

    } catch (error) {

        console.error(error)

    }
}

startServer()