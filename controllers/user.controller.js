const User = require('../models/User.model')
const Basket = require('../models/Basket.model')
const Medicine = require('../models/Medicine.model')

const usersController = {
    getUsers : async (req, res) => {
        try {
            const user = await User.find()
            res.json(user)
        } catch (error) {
            res.json(error)
        }
    },
    getUser : async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            res.json(user)
        } catch (error) {
            res.json(error)
        }
    },
    postUser : async (req, res) => {
        try {
            const user = await User.create({
                name : req.body.name,
                email : req.body.email,
                userMedicineId : req.body.userMedicineId,
                check : req.body.check
            })
            res.json(user)
        } catch (error) {
            res.json(error)
        }
    },
    patchUser : async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id , {
                name : req.body.name,
                email : req.body.email,
                userMedicineId : req.body.userMedicineId,
                check : req.body.check
            })
            res.json(user)
        } catch (error) {
            res.json(error)
        }
    },
    deleteUser : async (req, res) => {
        try {
            const user = await User.findByIdAndRemove(req.params.id)
            res.json(user)
        } catch (error) {
            res.json(error)
        }
    },
    addMedicine : async (req, res) => {
        try {
            const medicineDocument = await Medicine.findById(req.body.medicine)
            if (!medicineDocument.recipe) {
                const user = await User.findById(req.params.id)
                await Basket.findByIdAndUpdate(user._id, {$addToSet:{medicineId : req.body.medicine}})
                res.json(`Лекарство с таким рецептом найдено и добавлено`)
            }
            res.json(`Чувак , нужен рецепт`)
        } catch (error) {
            res.json(error)
        }
    },
    deleteMedicine : async (req, res) => {
        try {
            await Basket.findByIdAndUpdate(req.params.id, {
                $pull:{medicineId : req.body.medicine}
            })
            res.json(`Лекарство успешно удалено`)
        } catch (error) {
            res.json(error)
        }
    },
    clearBasket : async (req, res) => {
        try {
            await Basket.findByIdAndUpdate(req.params.id, {
                medicineId : []
            })
            res.json(`Корзинка пуста`)
        } catch (error) {
            res.json(error)
        }
    },
    buyMedicine : async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            const basket = await Basket.findById({user : req.params.id})
            const allCash = basket.medicine.reduce((res, item) => res + item.price, 0)

            if (user.check >= allCash) {
                user.check -= allCash
                basket.medicine = []
                res.json(`Всё прошло не успешно`)
            }else{
                res.json(`недостаточно денег идиот`)
            }
        } catch (error) {
            res.json(error)
        }
    },
    userCash : async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id , {
                check: check + req.body.check
           })
           res.json(user)
        } catch (error) {
           res.json(error)
        }
    }
}

module.exports = usersController