import React from 'react'
import PokeCard from '../PokeCard/PokeCard'

const PokeList = ({ pokecard }) => {
    return (
        <div className="pokes">
        {pokecard.map((p) => (
          <PokeCard name={p} url={p.id} />
          ))}
      </div>
    )
}

export default PokeList