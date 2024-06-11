const {Schema, model} = require('mongoose');

const PostsSchema = new Schema({
    autor: {
        type: String,
        required: true
    }, 
    titulo: {
        type: String,
        required: true
    },
    texto: {
        type:String,
        required: true
    }
   }, {
        timestamps: true
   });

   // Modelo creado a partir del esquema
module.exports = model('Posts', PostsSchema, 'Posts');

