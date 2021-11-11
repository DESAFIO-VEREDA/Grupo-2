import react from 'react';
import * as S from './style'
import Pokebola from '../../assets/images/pokebola.png'
export default function Header() {

    return(
        <S.ContainerHeader>
            <S.RedRetangle><span></span></S.RedRetangle>
            <img src={Pokebola} alt="logo do pokemon" />
            <S.GreyRetangle><span></span></S.GreyRetangle>

        </S.ContainerHeader>
    )
}
