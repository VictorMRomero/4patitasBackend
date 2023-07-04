const {Schema, model} = require('mongoose');

const VentaSchema = Schema({
    Venta:[{
        ventas:[{
            productos:[{
                producto:{
                    type:Schema.Types.ObjectId,
                    ref:'Producto'
                }
            }]
        }] 
    }]
});


module.exports = model('Categoria', CategoriaSchema);