import { styled } from "styled-components"

const StyledTextArea = styled.textarea`
    height: 93px;
    width: 670px;
    font-family: Roboto;
    font-size: 16px;
    margin-top: 10px;
    border: none;
    padding-left: 40px;
    padding-right: 40px;
    background-color: #4A2039;
    color: white;
    &::placeholder{
    color: #B6B6B6;
    font-family: ABeeZee;
    font-size: 16px;
    font-family: Roboto;
  }
  &:focus {
    outline: none;
  }
`

export default StyledTextArea