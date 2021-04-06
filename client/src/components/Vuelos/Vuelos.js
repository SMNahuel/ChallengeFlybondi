import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { SEARCH_TRAVEL } from "../../GraphQL/Queries";
import CardTravel from './cardTravel/cardTravel';

const Vuelos = (props) => {
    const [state, setState] = useState('')
    const { error, loading, data } = useQuery(SEARCH_TRAVEL,{
        variables : {
            origin: props.origen, 
            date: '2021-01-01', 
            price: 200
        }
    });

    useEffect(()=>{
        if(data){
            let result = [...data.searchTravel]
            result. sort(function(a, b){
                if(a.price > b.price){
                    return 1
                }
                if(a.price < b.price){
                    return -1
                }

            })
            console.log(result)
            setState(result)
        }
        if(error){
            setState("Upps")
        }
        if(loading){
            <p>Cargando ...</p>
        }
    }, [data, error])

    return(
        <div>
            {
                state && <CardTravel travel={state.slice(0, 10)}/>
            }
            
        </div>
    )
}

export default Vuelos;