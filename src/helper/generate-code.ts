import bcrypt from 'bcrypt';
// const bcryptjs = require('bcryptjs')

bcrypt

const crypto = require('crypto');
const generateCode = async () => {
    const caracteresPermitidos = 'AEIOU0123456789';
    const longitud = 5;
    let code = '';

    const arrayAleatorio = crypto.randomBytes(longitud);

    for (let i = 0; i < longitud; i++) {
        const indice = arrayAleatorio[i] % caracteresPermitidos.length;
        code += caracteresPermitidos.charAt(indice);
    }

    return code
}

export { generateCode }