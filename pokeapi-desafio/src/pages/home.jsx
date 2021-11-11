import React from 'react';
import CardPokemon from '../components/Card';
import { ContainerCard } from '../components/ContainerCard';

export default function Home() {
    return(
        <>
        <div>Main</div>
        <ContainerCard>
            <CardPokemon />
            <CardPokemon />
        </ContainerCard>
        </>
    )
}