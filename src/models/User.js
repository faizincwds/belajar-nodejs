import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const User = sequelize.define('users', {

    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },

    username: {
        type: DataTypes.STRING,
        unique: true
    },

    email: {
        type: DataTypes.STRING,
        unique: true
    },

    password: {
        type: DataTypes.STRING
    },

    role: {
        type: DataTypes.STRING,
        defaultValue: 'mahasiswa'
    },

    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },

}, {
    tableName: 'users',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

export default User