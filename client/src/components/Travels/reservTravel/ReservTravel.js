import React,{useEffect, useState} from 'react';
import { useQuery } from '@apollo/client';
import { SEARCH_RETURNS } from "../../../GraphQL/Queries";
import CardTravel from '../cardTravel/cardTravel';
import s from './ReservTravel.module.css'

const ReservTravel = ({travelGo}) =>{
    const [request, setRequest] = useState({
        origin: travelGo.destination,
        date: travelGo.date,
        price: travelGo.price,
        destination: travelGo.origin
    })
    const [state, setState] = useState(null)
    const { data, loading } = useQuery(SEARCH_RETURNS,{
        variables : {
            origin: request.destination, 
            date: request.date, 
            destination : request.origin
        }
    });
    useEffect(() => {
        if(data){
            console.log(data.searchReturn)
            setState(data.searchReturn)
        }
    }, [data])
    return(
        <div>
            <div className={s.container}>
                <h2>Los datos de la salida del vuelvo son estas </h2>
                <h3>Sale desde</h3>
                <p>
                    {travelGo.origin === 'BRC' && 'Bariloche '}
                    {travelGo.origin === 'MDZ' && 'Mendoza '}
                    {travelGo.origin === 'COR' && 'Cordoba '}
                    {travelGo.origin === 'EPA' && 'Buenos Aires '}
                    
                    ({travelGo.origin})
                </p>
                <h3>Sale el día</h3>
                <p>{travelGo.date}</p>
                <h3>Precio del ticket</h3>
                <p>$ {travelGo.price}</p>
                <h3>Llega a </h3>
                <p>
                    
                    {travelGo.destination === 'BRC' && 'Bariloche '}
                    {travelGo.destination === 'MDZ' && 'Mendoza '}
                    {travelGo.destination === 'COR' && 'Cordoba '}
                    {travelGo.destination === 'EPA' && 'Buenos Aires '}
                    ({travelGo.destination})
                </p>
                
            </div>
            <h2>Vuelos para volver</h2>
            {
                state !== null && <CardTravel travel={state}/>
            }

        </div>
    )

}

export default ReservTravel;