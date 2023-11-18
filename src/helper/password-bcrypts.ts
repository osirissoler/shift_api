import bcrypt from 'bcrypt';
// const bcryptjs = require('bcryptjs')

bcrypt

const encrypt = async(password) => {
    const salt = bcrypt.genSaltSync();

    const pass = bcrypt.hashSync(password, salt)

    return pass 
}

export { encrypt }