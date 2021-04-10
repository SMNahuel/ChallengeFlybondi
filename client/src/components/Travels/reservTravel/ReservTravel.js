import React,{useEffect, useState} from 'react';
import { useQuery } from '@apollo/client';
import { SEARCH_RETURNS } from "../../../GraphQL/Queries";
import CardTravel from '../cardTravel/cardTravel';
import s from './ReservTravel.module.css'
import FormTravel from '../../showTravel/FormTravel/FormTravel';
import FilterBar from '../../showTravel/FilterBar/FilterBar';

const ReservTravel = ({travelGo, completeTravel, backTo}) =>{
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
            setState(data.searchReturn)
        }
        if(loading){
            return(
                <p>Cargando...</p>
            )
        }
    }, [data, loading])

    const handleSelect = (filter) => {
        orderBy(filter)   
    }

    const orderBy = (filter) => {
        if(filter === 'price'){
            let result = [...data.searchTravel]
            result = result.sort(function(a, b){
                if(a.price > b.price){
                    return 1
                }
                if(a.price < b.price){
                    return -1
                }
                return 0
            })
            setState({
                ...state, 
                travels: result
            })
        }
        if(filter === ''){
            setState({
                ...state,
                travels: data.searchTravel
            })
        }
    }
    return(
        <div>
                <FormTravel />
                <FilterBar handleSelect={handleSelect} backTo={backTo}/>
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
                data && <CardTravel travel={state} completeTravel={completeTravel}/>
            }

        </div>
    )

}

export default ReservTravel;