import { styled } from "styled-components"

export const Container = styled.div`
    margin-top: 40px;
    background-color: lightcoral;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url('src/assets/backgroundSignUp.png');
    background-size: cover; 
    background-repeat: no-repeat; 
    background-position: center center; 
    @media (max-width: 1200px) {
    width: 100vh;
    height: 100vh;
  }
    `