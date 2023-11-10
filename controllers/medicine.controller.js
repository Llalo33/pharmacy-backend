const Medicine = require('../models/Medicine.model')

const mediciniesController = {
    getMedicinies : async (req, res) => {
        try {
            const medicine = await Medicine.find()
            res.json(medicine)
        } catch (error) {
            res.json(error)
        }
    },
    getMedicineCategory : async (req, res) => {
        try {
            const medicine = await Medicine.findById({categoryId : req.params.id}).populate('Category')
            res.json(medicine)
        } catch (error) {
            res.json(error)
        }
    },
    getMedicine : async (req, res) => {
        try {
            const medicine = await Medicine.findById(req.params.id)
            res.json(medicine)
        } catch (error) {
            res.json(error)
        }
    },
    postMedicine : async (req, res) => {
        try {
            const medicine = await Medicine.create({
                name : req.body.name,
                description : req.body.description,
                price : req.body.price,
                categoryId : req.body.categoryId,
                recipe : req.body.recipe
            })
            res.json(medicine)
        } catch (error) {
            res.json(error)
        }
    },
    patchMedicine : async (req, res) => {
        try {
            const medicine = await Medicine.findByIdAndUpdate(req.params.id , {
                name : req.body.name,
                description : req.body.description,
                price : req.body.price,
                categoryId : req.body.categoryId,
                recipe : req.body.recipe
            })
            res.json(medicine)
        } catch (error) {
            res.json(error)
        }
    },
    deleteMedicine : async (req, res) => {
        try {
            const medicine = await Medicine.findByIdAndRemove(req.params.id) 
            res.json(medicine)
        } catch (error) {
            res.json(error)
        }
    }
}

module.exports = mediciniesController