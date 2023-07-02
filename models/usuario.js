
const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema ({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    apellido: {
        type: String,
        required:[true, 'El apellido es obligatorio']
    },
    telefono: {
        type: Number,
        required:[true, 'El numero de telefono es obligatorio']
    },
    correo: {
        type: String,
        required:[true, 'El correo es obligatorio'],
        unique: true
    },
    password:{
        type:String,
        required:[true, 'La contraseña es obligatoria']
    },
    rol:{
        type:String,
        required:true,
        enum:['ADMIN_ROLE', 'USER_ROLE']
    },

});

module.exports = model('Usuario', UsuarioSchema);