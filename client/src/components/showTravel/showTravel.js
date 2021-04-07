import React, { useEffect, useState } from 'react'
import { SEARCH_TRAVEL } from "../../GraphQL/Queries";
import { useQuery } from '@apollo/client';
import s from './showTravel.module.css';
import CardOrigen from '../Origenes/cardOrigen/cardOrigen';
import FormTravel from './travels/FormTravel';
import CardTravel from '../Vuelos/cardTravel/cardTravel';
import FilterBar from './FilterBar/FilterBar';

const ShowTravel = (props) =>{
    const { data, loading } = useQuery(SEARCH_TRAVEL,{
        variables : {
            origin: props.origin, 
            date: props.date, 
            price: 1000
        }
    });
    const [state, setState] = useState({
        travels: null,
        price: false,
        date: false
    })
    useEffect(()=>{
        if(data){
            console.log('Recibimos los datos')
        }
        if(loading){
            return(
                <div className={s.container}>
                    <h1>
                        Cargando ...
                    </h1>
                </div>
            )
        }
    },[data,loading]) 


    const handleSelect = (filter) => {
        console.log(filter)
        orderBy(filter)   
    }
    const orderBy = (filter) => {
        console.log(filter)
        if(filter.name === 'price'){
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
            console.log(data.searchTravel)
        }

        if(filter.name === 'none'){
            setState({
                ...state,
                travels: data.searchTravel
            })
        }
    }
    return(
        <div>
            <div >
                <CardOrigen origen={props.origin}/>
                <FormTravel origin={props.origin} date={props.date}/>
                <FilterBar handleSelect={handleSelect}/>
            </div>
            {
                data && 

                    <CardTravel 
                        travel={state.travels || data.searchTravel} 
                        origin={props.origin}
                    />
            }
            
        </div>
    )
}

export default ShowTravel;