const jwt=require('jsonwebtoken');
const secret='kerfjiljnelrksjfnelk';

const generarJWT=()=>{
    return jwt.sign({
        info1:'Mi info',
        info2:'Mi otra inf',
    },secret)
}

console.log(generarJWT());

const verificarJWT=(token)=>{
    return jwt.verify(token, secret)
}

console.log(verificarJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbmZvMSI6Ik1pIGluZm8iLCJpbmZvMiI6Ik1pIG90cmEgaW5mIiwiaWF0IjoxNjM5MjQwMDg4fQ.QLhuJX027chGXCWGiB2bFtKNYZCT-hT_Zddhy7q9MWQ'))