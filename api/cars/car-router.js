const express = require('express')
const db = require('./car-model')
const { validateID, validateCar } = require('./cae-middleware')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const cars = await db.get()
        res.status(200).json(cars)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})

router.get('/:id', validateID, async (req, res) => {
    res.status(200).json(req.car)
})

router.post('/', validateCar, async (req, res) => {
    try {
        const newCar = await db.post(req.body)
        res.status(201).json(newCar)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})



module.exports = router