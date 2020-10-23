const User = require('../models/user')

//List of users
const list_users = (req, res, next) => {
    User.find()
    .then(response => {
        res.json({ response })
    })
    .catch(error => {
        res.json({ message: 'An error ocurred' })
    })
}

//Show one user
const show = (req, res, next) => {
    let userID = req.body.userID
    User.findById(userID)
    .then(response => {
        res.json({ response })
    })
    .catch(error => {
        res.json({ message: 'An error ocurred' })
    })
}

//store an user
const store = (req, res, next) => {
    let user = new User({
        email: req.body.email
    })
    user.save()
    .then(response => {
        res.json({ message: 'User added' })
    })
    .catch(error => {
        res.json({ message: 'An error ocurred' })
    })
}

module.exports = { list_users, show, store }