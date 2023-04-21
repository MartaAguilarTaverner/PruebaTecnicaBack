const db = require('../models');
const AuthController = require('./auth.controllers');
const user = db.user;

const UserController = {};

UserController.getOneById = async (req, res) => {
    try {
        const id = req.params.id;

        const response = await user.findByPk(id);

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving the user',
        });
    }
};

//Login
UserController.login = async (req, res) => {
    try {
        const body = req.body;
        const email = body.email;
        const password = body.password;

        const result = await user.findOne({ where: { email } });

        if (result && password === result.password) {
            const token = AuthController.generateAccessToken(email);

            const userInfo = {
                id: result.id,
                name: result.name,
                email: result.email,
                token,
            };

            res.send(userInfo);
        } else {
            throw new Error('No user registered with those credentials');
        }
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while trying to access, please try again after few minutes',
        });
    }
};

//Register
UserController.register = async (req, res) => {
    try {
        const body = req.body;
        const userObj = {
            name: body.name,
            surname: body.surname,
            email: body.email,
            DNI: body.DNI,
            phone: body.phone,
            direction: body.direction,
            city: body.city,
            postalCode: body.postalCode,
            age: body.age,
            password: body.password,
        };

        const result = await user.create(userObj);

        res.send(result);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred while trying to make the registration, please check everything is alright or try again after few minutes',
        });
    }
};

module.exports = UserController;