import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 3rem;

  .card {
    background: #13ef7a;
    height: 17rem;
    width: 17rem;
    border-radius: 20px;
    display: flex;
    align-items: space-between;

    .card-text {
      display: flex;
      flex-direction: column;
      margin-top: 2rem;
      color: white;
      margin-left: 1rem;

      span{
        background: #87f6bb;
        margin-top: 0.5rem;
        width: 60%;
        height: 2rem;
        border-radius: 20px; 
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .card-image{
      margin-top: 5rem;
      height: 8rem;
      width: 8rem;
    }
  } 
`