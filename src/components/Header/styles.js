import styled from "styled-components";

export const HeaderContainer = styled.header`
  .header{
    width: 100%;
  }
  .pokeballHeader{
    height: 3.5rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    flex-direction: column;

    input {
      width: 16rem;
      height: 2rem;
      border-radius: 2rem;
      box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
      border: 1px solid #fafafa;

      transition: filter: 0.2s;
    }

    input:hover {
      filter: brightness(0.9)
    }

    h1 {
      margin-top: 2rem
    }
  }
`