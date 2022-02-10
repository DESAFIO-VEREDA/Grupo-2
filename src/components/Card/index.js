import { CardContainer } from './styles'
import pokeballImg from '../../assets/pokeball.png'

export function Card() {
  return (
    <CardContainer>
      <div className="card">
        <div className="card-text">
          <h2>Bulbasaur</h2>
          <span>Grass</span>
          <span>Poison</span>
        </div>
        <div>
          <img src={pokeballImg} className="card-image"/>
        </div>
      </div>
    </CardContainer>
  )
}