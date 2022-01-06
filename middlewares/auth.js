const jwt=require('express-jwt'),
secret=process.env.SECRET_JWT

//secret, metodo de encriptacion, nom de campo, fn retorna token
const auth=jwt({
    secret:secret,
    algorithms:['HS256'],
    userProperty:'user',
    getToken: function (req) {
        let {authorization}=req.headers;
        if(authorization){
            //regresa el token
            //Beares,token 'renkglj','ejngsljngvklf'
            //token djfd,fdjigd 
            const [type,token]=authorization.split(' ')//split cadena convertids en array
            return type==='Bearer'||type==='Token'?token:null;
       
        }
        return null
    }
})

module.exports=auth;