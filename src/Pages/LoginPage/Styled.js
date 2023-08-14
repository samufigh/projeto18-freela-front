import { styled } from "styled-components"

export const Container = styled.div`   
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-image: url('https://universe.leagueoflegends.com/images/sgLandingBackground.jpg');
    background-size: cover; 
    background-repeat: no-repeat; 
    background-position: center center; 
    @media (max-width: 1200px) {
    width: 100vh;
    height: 100vh;
  }
`