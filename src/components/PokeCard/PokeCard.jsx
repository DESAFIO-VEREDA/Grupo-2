import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PokeCard({name, url}) {
    const [dataPokemon, setDataPokemon ] = useState('');
    
    useEffect(() => {
        const urlPokemon = url
        console.log(urlPokemon)
        async function fetchData() {
          const request = await fetch(urlPokemon);
          const results = await request.json();
    
          setDataPokemon(results);
        }
        fetchData();
        
      }, []);

    return(
        
        <div>
            <h2> {name} </h2>
            {dataPokemon.types.map((item) => <p>{item.type.name} </p>)}
        </div>
        

    )
}
  