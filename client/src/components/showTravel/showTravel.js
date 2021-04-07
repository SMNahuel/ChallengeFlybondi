import React, { useEffect } from 'react'
import { SEARCH_TRAVEL } from "../../GraphQL/Queries";
import s from './ShowTravel.module.css';
const ShowTravel = ({origin}) =>{
    const { error, data, loading } = useQuery(SEARCH_TRAVEL,{
        variables : {
            origin: props.origen, 
            date: props.date, 
            price: 200
        }
    });
    useEffect(()=>{
        if(data){
            console.log(data);
        }
        if(loading){
            return(
                <div className={s.container}>
                    <h1>
                        a
                    </h1>
                </div>
            )
        }
    },[data,loading]) 
    return(
        <div>
            Holaaa {origin}
        </div>
    )
}

export default ShowTravel;