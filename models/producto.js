const {Schema, model} = require('mongoose');

const ProductoSchema = Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    imagen:{
        type:String,
        default:"https://img.icons8.com/external-prettycons-flat-prettycons/47/external-404-web-and-seo-prettycons-flat-prettycons.png"
    },
    presentacion:{
        type:String
    },
    categoria:{
        type: Schema.Types.ObjectId,
        ref:'Categoria',
        required:true
    },
    marca:{
        type:String
    },
    descripcion:{
        type:String
    },
    edad:{
        type:Number
    },
    precio:{
        type:Number
    },
    stock:{
        type:Number,
        required:true
    },
    tags:{
        type:String
    },
    estado:{
        type:Boolean,
        default:true
    }

});


module.exports = model('Producto', ProductoSchema);