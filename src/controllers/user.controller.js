import User from '../models/User.js'

export const profile = async (req, res) => {

    try {

        const user = await User.findByPk(req.user.id, {
            attributes: {
                exclude: ['password']
            }
        })

        if (!user) {

            return res.status(404).json({
                success: false,
                message: 'User not found'
            })

        }

        return res.status(200).json({
            success: true,
            message: 'Profile data',
            data: user
        })

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        })

    }

}