import headerImg from '../../assets/header.png'
import pokeballImg from '../../assets/pokeball.png'
import searchImg from '../../assets/search.png'

import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={headerImg} alt="Header" className="header" />
      <div>
        <input type="text">
        </input>
        <h1>Pokédex</h1>
      </div>


    </HeaderContainer>
  )
}