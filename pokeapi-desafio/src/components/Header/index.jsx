import react from 'react';
import * as S from './style'
import Pokebola from '../../assets/images/pokebola.png'
export default function Header() {

    return(
        <S.ContainerHeader>
            <span></span>
            <img src={Pokebola} alt="logo do pokemon" />
            <span></span>
            <S.GreyRetangle><span></span></S.GreyRetangle>
        </S.ContainerHeader>
    )
}
