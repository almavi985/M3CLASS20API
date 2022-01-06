const mongoose = require('mongoose'),
    User = mongoose.model('User');
//Const user=require('mongoose').model('User');
const signup = async (req, res) => {
    try {//instancia de usuario
        const user = new User(req.body);
        //encripta pwd
        console.log(user)
        user.hashPassword(req.body.password)
        console.log(user)

        const resp = await user.save();//guarda usuario
        return res.json({
            message: 'User created successfully',
            detail: resp.generateJWT()
        })
    } catch (e) {
        return res.json({
            message: 'Error',
            detail: e.message
        })
    }
}

const getUsers = async (req, res) => {
    try {
        const resp = await User.find();

        if (resp.length === 0) {
            return res.json({
                message: 'Error',
                detail: 'No hay registros'
            })
        } else {
            return res.json({
                message: 'User got successfully',
                detail: resp
            })
        }
    } catch (e) {
        return res.json({
            message: 'Error',
            detail: e
        })
    }
}

const updateUser = async (req, res) => {
    try {
        const newData = req.body;
        const resp = await User.findByIdAndUpdate(
            newData.userId,
            { $set: newData },
            { new: true }
        )
        return res.json({
            message: 'User update successfully',
            detail: resp
        })
    } catch (e) {
        return res.json({
            message: 'Error',
            detail: e
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const resp = await User.findByIdAndDelete(req.body.id)

        return res.json({
            message: 'User deleted successfully',
            detail: resp
        })
    } catch (e) {
        return res.json({
            message: 'Error',
            detail: e
        })
    }
}

module.exports = {
    signup,
    getUsers,
    updateUser,
    deleteUser,
}
