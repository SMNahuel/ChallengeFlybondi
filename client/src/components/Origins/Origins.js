import React, {useState} from 'react';
import s from './style.module.css';
import { useQuery } from '@apollo/client';
import { SEARCH_ORIGIN } from "../../GraphQL/Queries";
import CardOrigen from './cardOrigen/cardOrigen';
import Travels from '../Travels/Travel';
import ShowTravel from '../showTravel/showTravel';
import ReservTravel from '../Travels/reservTravel/ReservTravel';

const Origins = () => {
    const { error, loading, data } = useQuery(SEARCH_ORIGIN);
    const [showAll, setShowAll] = useState(false)
    const [showReturn, setShowReturn] = useState(false)
    const [travelGo, setTravelGo] = useState({
        origin: '',
        destination: '',
        price: '',
        date: ''
    })
    const [travelBack, setTravelBack] = useState({
        originGo: '',
        destinationBack: '',
        price: '',
        date: ''
    })
    const [showHome, setHome] = useState(true)
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


    const changeToAll = (origin) => {
        setShowAll(true)
        setHome(false)
        setOrigin(origin)
    }
    const backTo = () =>{
        setShowAll(false)
    }
    const chageToReturn = (travel) => {
        console.log(travel)
        setShowReturn(true)
        setHome(false)
        setTravelGo({
            origin: travel.origin,
            destination : travel.destination,
            price: travel.price,
            date: travel.data
        })
        if(showAll){
            setShowAll(false)
        }
        
    }
    return(
        <div className={s.contenedor}>

           {
            showHome && 
            <div>
                {
                    loading && <p>Cargando</p>
                }
                {
                    data && data.searchOrigin.map(origen => (
                        <div key={origen}>
                            <CardOrigen key={origen} origen={origen}/>
                            <Travels origen={origen} showTravels={changeToAll} chageToReturn={chageToReturn} date={date}/>
                        </div>
                        
                    ))
                }
                {
                    error && <p>Upps errores</p>
                }
            </div>
           } 
           {
                showAll && <ShowTravel origin={origin} date={date} backTo={backTo} chageToReturn={chageToReturn}/>
           }
           {
               showReturn && <ReservTravel travelGo={travelGo} />
           }
        </div>
    )
}

export default Origins;