import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { SEARCH_TRAVEL } from "../../GraphQL/Queries";

const Vuelos = (props) => {
    const { error, loading, data } = useQuery(SEARCH_TRAVEL,{
        variables : {
            origen: 'BRC', 
            date: '2021-01-01', 
            price: 200
        }
    });

    useEffect(()=>{
        if(data){
            console.log(data)
        }
        if(error){
            console.log(error)
        }
    }, [data, error])
    return(
        <div>
            
        </div>
    )
}

export default Vuelos;