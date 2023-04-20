import { useState } from 'react';
import './Searchbar.css'

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div>
         <input type='search' onChange={handleChange} value={id} class='search'/>
         <button onClick={() =>{onSearch(id); setId('')}} class='boton'>Agregar</button>
      </div>
   );
}