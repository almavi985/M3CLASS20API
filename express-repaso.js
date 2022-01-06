require('dotenv').config() //iniciar dotenv

/* 1. Instanciar express */
const express = require('express');
/* 2. Iniciar express  */
const app = express();
/* 3. Agregar middlewares */
app.use(express.json()); //reciben obj jason en el body
/* 4. Defninir las rutas */
const funcion = (req, res) => {
    res.json({
        mensaje: 'Se agregó el elemento'
    })
}

//localhost:3000
app.post('/', funcion);
//recibe ruta, fn de la ruta
app.get('/',(req,res)=>{
    res.json({
        msj:'Se obtuvo contenido',
    })
});
app.put('/',(req,res)=>{//fn que se ejecuta en la ruta peticion, respuesa
    res.json({
        msj:'Se actualizo contenido',
    })
});
app.delete('/',(req,res)=>{
    res.json({
        msj:'Se elimino contenido',
    })
});
/* 5. Inciar el servidor */
app.listen(process.env.PORT,()=>{
    console.log('Se inicio el servidor: '+process.env.PORT)
})