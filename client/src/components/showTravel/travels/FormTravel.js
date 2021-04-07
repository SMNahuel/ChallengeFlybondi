import React, { useEffect, useState } from 'react';
import s from './FormTravel.module.css';
import { useQuery } from '@apollo/client';
import { SEARCH_ORIGIN } from "../../../GraphQL/Queries";

const FormTravel = (props) =>{
    const { data } = useQuery(SEARCH_ORIGIN);
    
    const [input, setInput] = useState({
        price: props.price,
        date: props.date,
        origin: props.origin 
    })
    useEffect(() =>{
        if(data){
            console.log(data)
        }
    },[data])
    const onChange = (e) =>{
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const handleChange = (e) =>{
        setInput({
            ...input,
            origin: e.target.value
        })
    }
    return(
        <div className={s.container}>
            <h4>Datos de salida del vuelo</h4>

            <form>
                <div className={s.container_inputs}>
                    <select value={input.origin} onChange={handleChange}>
                        {
                            data.searchOrigin.map(origin => 
                                <option key={origin} value={origin}>
                                    {origin=== 'BRC' && 'Bariloche (BRC)'}
                                    {origin=== 'MDZ' && 'Mendoza (MDZ)'}
                                    {origin=== 'COR' && 'Cordoba (COR)'}
                                    {origin=== 'EPA' && 'Buenos Aires (EPA)'}
                                </option>
                            )
                        }
                    </select>
                    <label>Aeropuerto</label>
                </div>
                <div className={s.container_inputs}>
                    <input                        
                        type="date"
                        name="date"
                        autoComplete="off"
                        title="Only Numbers"
                        onChange={onChange}
                        value={input.date}
                        min={props.date}
                        placeholder="Ingrese la fecha"
                        pattern="\d{2}-\d{2}-\d{4}"
                        required    
                    />
                    <label> Su fecha de salida</label>
                </div>
                <div className={s.container_inputs}>
                    <input                        
                        type="range"
                        name="price"
                        onChange={onChange}
                        value={input.price}
                        pattern="[0-9,]{1,10}"
                        placeholder="Ingrese el monto"
                        title="Solo numeros"
                        autoComplete="off"
                        step="0.01"
                        min="100"
                        max="800"
                        required   
                    />
                    <label> Rango de precios {input.price} </label>
                </div>           
            </form>
                <button className={s.cardTravelButton} onClick={() => props.newRequest(input)}>Enviar</button>     
        </div>
    )
}

export default FormTravel;