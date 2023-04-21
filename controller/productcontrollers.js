const { Op } = require('sequelize');
const db = require('../models');
const product = db.product;

const ProductController = {};

ProductController.getAll = async (req, res) => {
    try {
        const response = await product.findAll();

        req.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving the products',
        });
    }
};

ProductController.getOneById = async (req, res) => {
    try {
        const id = req.params.id;

        const response = await product.findByPk(id);

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving the product',
        });
    }
};

ProductController.getAllByName = async (req, res) => {
    try {
        const name = req.query.name;

        const response = await product.findAll({
            where: { name: { [Op.substring]: name } },
        });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving the products',
        });
    }
};

module.exports = ProductController;