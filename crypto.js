//encriptacin de psw
const crypto=require('crypto');
const salt='rkjerkjrf';

const encriptar=(password)=>{
    //psw=>elemento a encriptar,salt=>palabra clave para encriptar
    //iteracion veces que se encripta,tamaño de encriptado, metodo de encriptacion
    return crypto.pbkdf2Sync(password,salt,1000,512,'sha512')
    .toString('hex')
}

console.log(encriptar('contraseña'))

const verificar=(password)=>{
    //verifica encriptacion de psw y se compara con la encriptada
    const passHasher=crypto.pbkdf2Sync(password,salt,1000,512,'sha512')
    .toString('hex')

    return passHasher==='7fe939435437467d68e0be6d1330605ee55dd0fb102bcac389446ebcc0fb04afef7331756b1f07c0ee27e7698315ea3805d1e75dcb545f373a7e0a90c861f72754ffb5148b872d4f277af297a36e038e00f0cc0cc619ec309148dcf1e888e09ef5a31e760a41e77af25f7eedf070433ddc45e1d0fdf96bb4d43d8d2e972da139e12cf5785210b74f0bab45bb073815ceea662e667e294910e796b386c07d3676959975fdbee9c4d3c2492d896aa733a8c441b76d03cdc341fe29ff62289b7d656e0078ae637f7ced4788663d16006dbb6bce1d3fa557fada52493555f8c7e0f898eadff1eda58f943bf7b8c55646bb9d890a5f024dce5cdfd076d2ae4d7ba023438ccd737a8cebceacd346e6c9481f2cd6b2f464b4a3a0a60bd382a2570ec52ae4baa126296e5eff2e30e06c4e43ffc4b62590025ec270c9fb69201731e65004b7c761d1d314b64e6748f116d9b6e571f62c8e22aa5e2641dc91fac67b6b3a76611ce111236cf89c664511ff6b408aba3e3ed811e3a480fdb8a5bbdf3dd8c38f7a5e5d633d5f79b4d483038b49434d2ad3f80095331cae28956742614024b29f2dad7e142487db837e52b4d286a9298575b085fd0a4fc3667534273145d7f9d099a2131e6efab2f74d0783cc98b7547d818db302a03a83897b03876da5a56b2cd4a9e38cb17e59a772f459b5a3a79b52bbe34c39e5e5ec666c776a76dbb1f920'
}

console.log(verificar('contraseña'));

console.log('========')

console.log(crypto.randomBytes(16).toString('hex'))