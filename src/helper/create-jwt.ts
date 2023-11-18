import * as jwt from 'jsonwebtoken'

const generarJWT = (data) => {
    return new Promise((resolve, reject) => {
        const payload = { data };
        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '10000h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el token')

            } else {
                resolve(token);
            }
        })
    })
}

export  {
    generarJWT
}
