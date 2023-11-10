const Category = require('../models/Medicine.Category.model')

const categoriesController = {
    getCategories : async (req, res) => {
        try {
            const category = await Category.find()
            res.json(category) 
        } catch (error) {
            res.json(error)
        }
    },
    getCategory : async (req, res) => {
        try {
            const category = await Category.findById(req.params.id)
            res.json(category)
        } catch (error) {
            res.json(error)
        }
    },
    postCategory : async (req, res) => {
        try {
            const category = await Category.create({
                name : req.body.name,
                description : req.body.description
            })
            res.json(category)
        } catch (error) {
            res.json(error)
        }
    },
    patchCategory : async (req, res) => {
        try {
            const category = await Category.findByIdAndUpdate(req.params.id , {
                name : req.body.name,
                description : req.body.description
            })
            res.json(category)
        } catch (error) {
            res.json(error)
        }
    },
    deleteCategory : async (req, res) => {
        try {
            const category = await Category.findByIdAndRemove(req.params.id)
            res.json(category)
        } catch (error) {
            res.json(error)
        }
    }
}

module.exports = categoriesController