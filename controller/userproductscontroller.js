const db = require('../models');
const userProducts = db.userproducts;

const UserProductsController = {};

UserProductsController.getAllByUserId = async (req, res) => {
    try {
        const userId = req.params.userid;

        const response = await userProducts.findAll({ where: { userId } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving all the products of the user',
        });
    }
};

module.exports = UserProductsController;