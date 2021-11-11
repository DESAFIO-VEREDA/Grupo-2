import styled from 'styled-components'

export const ContainerHeader = styled.div`

width:100%;
height:60px;
border:1px solid red;
display:flex;
align-items:center;

span {
    width:50%;
    height:60px;
}

span:nth-child(1){
    background-color:red;
}
span:nth-child(2){
    background-color:blue;
}

img {
    width:50px;
    height:50px;
}
`