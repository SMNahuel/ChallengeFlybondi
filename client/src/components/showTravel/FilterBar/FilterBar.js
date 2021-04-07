import React, {useState} from 'react';
import s from './FilterBar.module.css';

export default function FilterBar({ handleSelect, backTo}){
    const [filter, setFilter] = useState('price')
    const onSelect = () => {
        if(filter === 'price'){
            setFilter('')
        }else{
            setFilter('price')
        }
        handleSelect(filter);
    }
    return(
        <div className={s.container}>
                Ordena los vuelos
                <div>
                    <label>
                        <input 
                            onChange={onSelect} 
                            type="checkbox" 
                            name="price"
                        />
                        Precio
                    </label>
                </div>
                <button className={s.cardTravelButton} onClick={() => backTo()}>Volver atras</button>
        </div>
    );
}