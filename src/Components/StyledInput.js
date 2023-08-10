import { styled } from "styled-components"

const StyledInput = styled.input`
    height: 43px;
    width: 202px;
    font-family: Roboto;
    font-size: 16px;
    margin-top: 10px;
    background-color: white;
    border: none;
    padding-left: 50px;
    &::placeholder{
    color: #666;
    font-family: ABeeZee;
    font-size: 16px;
    font-family: Roboto;
  }
  &:focus {
    outline: none;
    background-color: whites;
  }
`

export default StyledInput