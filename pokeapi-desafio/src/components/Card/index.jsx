import { useEffect, useState } from 'react'
import * as S from './style'

export default function CardPokemon({name, url}){

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
        <S.CardPokemonContainer>
            <S.InfoPokemon>
                <h2>{name}</h2>
                <div>
                {dataPokemon.types.map((item) => <p>{item.type.name}</p>)}
                </div>
                <p>tipo 01</p>
                <p>tipo 02</p>
            </S.InfoPokemon>
        </S.CardPokemonContainer>
    )
}