const {Router} = require('express')
const mediciniesController = require('../controllers/medicine.controller')

const router = Router()

router.get('', mediciniesController.getMedicinies)
router.get('/:id', mediciniesController.getMedicine)

module.exports = router