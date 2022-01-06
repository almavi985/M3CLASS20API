/*1. Importar variable de entorno */
require('dotenv').config();
//2.Importr modelos
require('./models');
//3. Instanciar express y Mongoose
const express=require('express'),
mongoose=require('mongoose'),
routes=require('./routes');
//4. Incializamos express
const app=express();
//5. Middlewares
app.use(express.json());
//6. Conexion con la bd
mongoose.connect(process.env.MONGO_URI);
//7. Definir rutas
app.use('/v1',routes);
//8. Inciar servidor
app.listen(process.env.PORT,()=>{
    console.log('Servidor corriendo en '+process.env.PORT);
}
)