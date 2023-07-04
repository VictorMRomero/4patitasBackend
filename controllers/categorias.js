const {response} = require('express');
const Categoria = require('../models/categoria');


const categoriasGet = async(req, res = response) => {
    const {limite = 5, desde = 0} = req.query;
    
    const categorias = await Categoria.find()
        .skip(Number(desde))
        .limit(Number(limite));

    const total = await Categoria.find().countDocuments();

    res.json({
        total,
        categorias
    });
}


module.exports = {
    categoriasGet
}