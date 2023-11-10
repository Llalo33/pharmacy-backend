const {Router} = require('express')
const categoriesController = require('../controllers/medicine.category.controller')

const router = Router()

router.get('', categoriesController.getCategories)

module.exports = router