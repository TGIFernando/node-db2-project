const db = require('../../data/dbConfig')



module.exports = {
    get,
    getById,
    post
}


function get() {
    return db('cars')
}

function getById(id){
    return db('cars').where('id', id).first()
}

function post(car){
    return db('cars')
        .insert(car, 'id')
        .then(([id]) => get(id))
}