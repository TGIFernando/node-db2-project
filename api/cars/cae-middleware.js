const db = require('./car-model')
async function validateID(req, res, next){
    try {
        const { id } = req.params
        const car = await db.getById(id)
        if (car) {
            req.car = car
            req.id = id
            next()
        } else {
            res.status(404).json({ message: `car with id ${id} does not exist`})
        }
    } catch (error) {
        req.status(500).json({ message: error.message})
    }
}

async function validateCar(req, res, next){
    if(!req.body){
        res.status(400).json({ message: 'required fields are blank'})
    } else if (!req.body.make || !req.body.model) {
        res.status(400).json({message : 'missing project id, description, or notes'})
    } else {
        next()
    }
}


module.exports = {
    validateID,
    validateCar
}