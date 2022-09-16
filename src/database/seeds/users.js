import bcrypt from 'bcryptjs'

const users = [
    {
        username: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        name: 'Admin User',
        email: 'admin@example.com',
        isAdmin: true,
    },
]

export default users
