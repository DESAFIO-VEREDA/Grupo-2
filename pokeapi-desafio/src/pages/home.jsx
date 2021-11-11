import React, { useState, useEffect } from 'react';
import CardPokemon from '../components/Card';
import { ContainerCard } from '../components/ContainerCard';

export default function Home() {
    const [pokemonList, setPokemonList] = useState([]);
    useEffect(() => {
        const API = 'https://pokeapi.co/api/v2/pokemon/?offset=151&limit=161';
        async function fetchData() {
          const request = await fetch(API);
          const json = await request.json();
          const results = json.results;
          setPokemonList(results);
        }
        fetchData();
      }, []);


    return(
        <>
        <div>Main</div>
        <ContainerCard>
            {
                pokemonList.map((item) => <CardPokemon url={item.url} name={item.name} />)
            }
        </ContainerCard>
        </>
    )
}