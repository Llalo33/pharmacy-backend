const {Router} = require('express')
const usersController = require('../controllers/user.controller')
const mediciniesController = require('../controllers/medicine.controller')
const categoriesController = require('../controllers/medicine.category.controller')

const router = Router()

router.get('/users', usersController.getUsers)
router.patch('/users/:id', usersController.patchUser)
router.delete('/users/:id', usersController.deleteUser)

router.post('', mediciniesController.postMedicine)
router.patch('/:id', mediciniesController.patchMedicine)
router.delete('/:id', mediciniesController.deleteMedicine)

router.post('', categoriesController.postCategory)
router.patch('/:id', categoriesController.patchCategory)
router.delete('/:id', categoriesController.deleteCategory)

module.exports = router