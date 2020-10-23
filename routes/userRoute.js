const express   = require('express')
const router    = express.Router()

const UserController = require('../controllers/userController')

router.get('/', UserController.list_users)
router.post('/show', UserController.show)
router.post('/store', UserController.store)

module.exports = router