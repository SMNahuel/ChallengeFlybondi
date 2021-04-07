const travels = require('../dataset.json')

module.exports = {
    root : {
        travels: () => {return travels},

        /* Buscamos todos los viajes discrimando por origin, fecha y precio */
        searchTravel: (data) => {
            const travelsOrigin = []
            for(var i = 0; i< travels.length; i++){
                if(travels[i].price <= data.price){
                    if(travels[i].data >= data.date){
                        if(travels[i].origin === data.origin){
                            travelsOrigin.push(travels[i])
                        }
                    }
                }
            }
            return travelsOrigin;
        },
        /* search origins avality */
        searchOrigin: () => {
            const origin = []
            for(var i = 0; i< travels.length; i++){
                if(!origin.includes(travels[i].origin)){
                    origin.push(travels[i].origin)
                }
            }
            return origin
        },
    }
}