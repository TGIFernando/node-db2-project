const db = require('../../data/dbConfig')



module.exports = {
    get,
    getById,
    post,
    update,
    remove
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
        .then(([id]) => getById(id))
}

function update(id, car){
    return db('cars')
        .where('id', id)
        .update(car)
        .then((count) => (count > 0 ? getById(id) : null))
}

function remove(id){
    return db('cars').where('id', id).del()
}