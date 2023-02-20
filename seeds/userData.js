const {User} = require('../models');
const userData = [
    {
        "username": "johndoe",
        "email": "deerhunter@gmail.com",
        "password": "password123"
    },
    {
        "username": "johnwick",
        "email": "pewpew@yahoo.com",
        "password": "daisy4ever"
    },
    {
        "username": "longjohn",
        "email": "silverfish@aol.com",
        "password": "fr13dfish"
    },
    {
        "username": "johncena",
        "email": "theinvisibleman@optimum.net",
        "password": "nowyoucants3eme"
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true, returning: true});

module.exports = seedUsers;