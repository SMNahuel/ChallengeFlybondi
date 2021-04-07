import React, {useState} from 'react';
import s from './FilterBar.module.css';

export default function FilterBar({ handleSelect }){
    const [filter, setFilter] = useState('')
    const onSelect = ({target}) => {
        console.log(target)
        setFilter(target.name ? 'price' : '')
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
                            checked={filter}
                        />
                        Precio
                    </label>
                </div>
        </div>
    );
}