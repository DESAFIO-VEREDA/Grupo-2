import * as S from './style'

export default function CardPokemon(name, type01, type02){

    return(
        <S.CardPokemonContainer>
            <S.InfoPokemon>
                <h2>Pikachu</h2>
                
                <p>tipo 01</p>
                <p>tipo 02</p>
            </S.InfoPokemon>
        </S.CardPokemonContainer>
    )
}