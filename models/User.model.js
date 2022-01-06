//require('dotenv').config();
const mongoose = require('mongoose');//Instanciar moongose
jwt=require('jsonwebtoken');
mongoose.connect('mongodb://localhost:27017/m3')     //conexion con la base
//Se crea Schema
const UserSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, default: 'Perez' },
    dob: { type: Date },
    mail: { type: String, required: [true, 'Se requiere email'] },
    password: { type: String, required: [true, 'Se requiere psw'] },
salt:{type:String}
});

//agrega metodo apras generar token
UserSchema.methods.generateJWT=function(){
    return jwt.sign({idUser: this._id},process.env.SECRET_JWT);
}
//metood para encpritar contraseña
UserSchema.methods.hashPassword=function(){
    this.salt=crypto.randomBytes(16).toString('hex');
    this.password=crypto.pbkdf2Sync(this.password,this.salt,1000,512
        ,'sha512').toString('hex');
}
//modelo para erificar psw
UserSchema.methods.hashPassword=function(password){
    const hashedPassword=crypto.pbkdf2Sync(this.password,this.salt,1000,512
        ,'sha512').toString('hex');
        return hashedPassword===this.password;
}

//Crear modelo
mongoose.model('User', UserSchema, 'colluser');

