import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { SEARCH_TRAVEL } from "../../GraphQL/Queries";
import CardTravel from './cardTravel/cardTravel';

const Travels = (props) => {
    const [state, setState] = useState('')
    const { error, data } = useQuery(SEARCH_TRAVEL,{
        variables : {
            origin: props.origen, 
            date: props.date, 
            price: 200
        }
    });

    useEffect(()=>{
        if(data){
            let result = [...data.searchTravel]
            result.sort(function(a, b){
                if(a.price > b.price){
                    return 1
                }
                if(a.price < b.price){
                    return -1
                }
                return 0
            })
            setState(result)
        }
        if(error){
            setState("Upps")
        }

    }, [data, error])

    return(
        <div>
            {
                state && <CardTravel 
                    travel={state.slice(0, 5)} 
                    showTravels={props.showTravels}
                    chageToReturn={props.chageToReturn}
                    origin={props.origen}
                />
            }

        </div>
    )
}

export default Travels;