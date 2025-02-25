import bcrypt from 'bcrypt'

const usuarios = [
    {
        nombre: 'Jose Varela',
        email: 'joservc@mail.com',
        confirmado: 1,
        password: bcrypt.hashSync('password', 10)
    }
]

export default usuarios