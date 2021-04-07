import React, { useState } from 'react';
import s from './FormTravel.module.css';
const FormTravel = (props) =>{
    const [input, setInput] = useState({
        price: 800,
        date: props.date,
        origin: props.origin 
    })
    const onChange = (e) =>{
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    return(
        <div className={s.container}>
            <h4>Datos de salida del vuelo</h4>

            <form>
                <div className={s.container_inputs}>
                    <input 
                        type="text" 
                        name="origin" 
                        pattern="[A-Za-z0-9 ]{3,250}"
                        onChange={onChange}
                        value={input.origin}
                        autoComplete="off"
                        placeholder="Ingrese su origen"
                        title="Solo letras"
                    />
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
        </div>
    )
}

export default FormTravel;