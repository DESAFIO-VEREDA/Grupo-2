import styled from "styled-components";

export const CardPokemonContainer = styled.article`

width:207px;
height:207px;
background-color:${(props) => props.color};
display:flex;
align-items: center;
border:1px solid red;
`

export const InfoPokemon = styled.aside`

align-self:flex-start;
width:120px;
height:100%;
display:flex;
flex-direction: column;
justify-content: space-evenly;
`