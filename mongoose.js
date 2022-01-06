const  mongoose =require('mongoose');/*Instanciar moongose*/
mongoose.connect('mongodb://localhost:27017/m3')     //conexion con la base

/*Crear modelo*/
const User=mongoose.model('User',{
    firstname:String,
    lastname:String,
},'user');

/*Instanciar un obj del modelo*/
const ramon=new User({
    firstname:"Ramon",
    lastname:"Martinez",
});

ramon.save().then(()=>console.log('Se guardo el elemento'));

