import { styled } from "styled-components"

const Container = styled.header`
  width: 100%;
  height: 70px;
  padding: 0px 18px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 1;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    img {
    height: 50px;
    cursor: pointer;
  }

    button{
      border: 0px;
      border-radius: 5px;
      width: 90px;
      height: 30px;
      color: white;
      background-image: url('src/assets/sgLandingBackground.jpg');
      background-size: cover; 
      background-repeat: no-repeat; 
      background-position: center center;
    }
`

export default Container