import React, { useState, useEffect } from 'react';

export default function Home() {
    const [pokemonList, setPokemonList] = useState([]);
    useEffect(() => {
        const API = 'https://pokeapi.co/api/v2/pokemon/?offset=151&limit=302';
        async function fetchData() {
          const request = await fetch(API);
          const json = await request.json();
          const results = json.results;
          console.log(results)
          setPokemonList(results);
        }
        fetchData();
      }, []);

    return(
        <div>Main</div>
    )
}