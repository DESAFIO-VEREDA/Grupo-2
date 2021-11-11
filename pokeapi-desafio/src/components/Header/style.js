import styled from 'styled-components'

export const ContainerHeader = styled.div`

border:1px solid red;
display:flex;
align-items:center;
position:relative;

span {
    width:58%;
    height:100px;
}

img {
    width:80px;
    height:80px;
    left: 50%;
    margin-left: -50px;
    position:absolute;
    z-index:2;
    margin-top:4px;
}
`

export const RedRetangle = styled.div`

width:50%;
height:100px;
transform: translateX(-10px);

background-color: red;

span {
    background-color:red;
    clip-path: polygon(0 0, 100% 0%, 94% 100%, 0% 100%);
    transform: translateX(18px);
}
`

export const GreyRetangle = styled.div`

background-color: #39363c;
width:50%;
height:100px;
transform: translateX(-2px);
`