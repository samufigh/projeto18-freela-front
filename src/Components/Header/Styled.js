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
      display: ${(props) => (props.logged ? "none" : "flex")};
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 20px;
      border: 0px;
      border-radius: 5px;
      width: 90px;
      height: 30px;
      color: #011075;
      cursor: pointer;
      background-color: white;
    }
    div{
      display: ${(props) => (props.logged ? "flex" : "none")};
    }
`

export default Container