const {response} = require('express');
const Producto = require('../models/producto');


const productosGet = async(req, res = response) => {
    const {limite = 5, desde = 0} = req.query;
    
    const productos = await Producto.find()
        .skip(Number(desde))
        .limit(Number(limite));

    const total = await Producto.find().countDocuments();

    res.json({
        total,
        productos
    });
}

//actualizar Prducto
const productosPut = async(req, res = response) => {

    const {id} = req.params;
    const {_id, ...resto} = req.body;


    const producto = await Producto.findByIdAndUpdate(id, resto);

    res.json({
        msg:'put api- usuarios put',
        id,
        producto
    })
    


}


const productosPost = async(req, res) => {

    const {nombre, imagen, presentacion, categoria, marca, descripcion, edad, precio, stock, tags} = req.body;
    const producto = new Producto({nombre, imagen, presentacion, categoria, marca, descripcion, edad, precio, stock, tags});


    //Guardar en DB
    await producto.save();


    res.json({
        msg:'Post api - controller',
        producto
    });
}



const productosDelete = async(req, res) => {

    const {id} = req.params;
    
    //Fisicamente
    //const usuario = await Usuario.findByIdAndDelete(id);
    //estado
    const producto = await Producto.findByIdAndUpdate(id, {estado:false})


    res.json({producto});


}







module.exports = {
    productosGet,
    productosPost,
    productosPut,
    productosDelete
}