import React, {useState} from 'react';
import s from './style.module.css';
import { useQuery } from '@apollo/client';
import { SEARCH_ORIGIN } from "../../GraphQL/Queries";
import CardOrigen from './cardOrigen/cardOrigen';
import Vuelos from '../Vuelos/Vuelos';
import ShowTravel from '../showTravel/showTravel';

const Origenes = () => {
    const { error, loading, data } = useQuery(SEARCH_ORIGIN);
    const [showAll, setShowAll] = useState(false)
    const [origin, setOrigin] = useState('')
    var date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    
    if(month < 10 && day < 10){
      date = `${year}-0${month}-0${day}`
    }else{
        date = `${year}-${month}-${day}`
    }


    const changeToAll = (abc) => {
        setShowAll(true)
        setOrigin(abc)
    }
    return(
        <div className={s.contenedor}>

           {
            !showAll && 
            <div>
                {
                    loading && <p>Cargando</p>
                }
                {
                    data && data.searchOrigin.map(origen => (
                        <div key={origen}>
                            <CardOrigen key={origen} origen={origen}/>
                            <Vuelos origen={origen} showTravels={changeToAll} date={date}/>
                        </div>
                        
                    ))
                }
                {
                    error && <p>Upps errores</p>
                }
            </div>
           } 
            {
                showAll && <ShowTravel origin={origin} date={date}/>
            }
        </div>
    )
}

export default Origenes;