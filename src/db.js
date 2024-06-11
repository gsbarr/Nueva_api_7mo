
const mongoose = require('mongoose');
usuario = "DaniMongoDb";
contra = "1234";
bd = "RedSocial";

console.log(`Usuario BD: ${usuario}, contraseña: ${contra}`);

const MONGODB_URI = `mongodb+srv://${usuario}:${contra}@cluster0.v86wlk7.mongodb.net/${bd}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(MONGODB_URI)
.then(db => console.log("BD Conectada"))
.catch(err => console.log(err));
