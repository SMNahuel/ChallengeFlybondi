const travel = require('../dataset.json')

module.exports = {
    root : {
        travels: () => travel.map((array, id) => array && ({ id, ...array })),
        travelByOrigin: (origin) => travel.find(array => array.origin == origin)
    }
      
}