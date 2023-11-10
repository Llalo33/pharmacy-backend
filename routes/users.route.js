const {Router} = require('express')
const usersController = require('../controllers/user.controller')

const router = Router()

router.get('/:id', usersController.getUser)
router.post('', usersController.postUser)
router.post('/:id/user_cash', usersController.userCash)
router.post('/:id/add_medicine', usersController.addMedicine)
router.delete('/:id/delete_medicine', usersController.deleteMedicine)
router.patch('/:id/clear_basket', usersController.clearBasket)
router.get('/:id/buy_medicine', usersController.buyMedicine)

module.exports = router