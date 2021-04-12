import React, {useState} from 'react';
import s from './style.module.css';
import { useQuery } from '@apollo/client';
import { SEARCH_ORIGIN } from "../../GraphQL/Queries";
import CardOrigen from './cardOrigen/cardOrigen';
import Travels from '../Travels/Travel';
import ShowTravel from '../showTravel/showTravel';
import ReservTravel from '../Travels/reservTravel/ReservTravel';
import CompleteTravel from '../Travels/completeTravel/completeTravel';


const Origins = () => {
    const { error, loading, data } = useQuery(SEARCH_ORIGIN);
    const [show, setShow] = useState({
        showAll: false,
        showReturn: false,
        showHome: true,
        showComplete: false
    })

    
    const [origin, setOrigin] = useState('')
    const [travelGo, setTravelGo] = useState({
        origin: '',
        destination: '',
        price: '',
        date: ''
    })
    const [infoTravel, setInfoTravel] = useState({
        travelGo: null,
        travelBack: null
    })
    var date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    
    if(month < 10){
      month = `0${month}`
    }
    if(day < 10){
        day = `0${day}`
    }
    date = `${year}-${month}-${day}`


    const changeToAll = (origin) => {
        setShow({
            ...show,
            showAll: true,
            showHome: false
        })

        setOrigin(origin)
    }
    const backTo = () =>{
        if(show.showReturn === true){
            infoTravel.travelGo = null
        }
        setShow({
            ...show,
            showAll: false,
            showHome: true,
            showReturn : false
        })
    }
    const chageToReturn = (travel) => {
        setShow({
            ...show,
            showReturn: true,
            showHome: false
        })
        setTravelGo({
            origin: travel.origin,
            destination : travel.destination,
            price: travel.price,
            date: travel.data
        })
        setInfoTravel({
            ...infoTravel,
            travelGo: travel
        })

        if(show.showAll){
            setShow({
                ...show,
                showAll:false,
                showReturn: true,
            })
        }
    }
    const completeTravel = (travel) =>{
        if(show.showAll){
            setShow({
                ...show,
                showAll: false,
                showReturn: false,
                showComplete: true
            })
        }
        setShow({
            ...show,
            showReturn: false,
            showComplete: true
        })
        setInfoTravel({
            ...infoTravel,
            travelBack: travel ? travel : ''
        })
    }
    return(

        <div className={s.contenedor}>
        
           {
            show.showHome && 
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
                show.showAll && <ShowTravel origin={origin} date={date} backTo={backTo} chageToReturn={chageToReturn}/>
           }
           {
               show.showReturn && <ReservTravel travelGo={travelGo} completeTravel={completeTravel} backTo={backTo}/>
           }
           {
               show.showComplete && <CompleteTravel travelGo={infoTravel.travelGo} travelBack={infoTravel.travelBack} />
           }
        </div>
    )
}

export default Origins;