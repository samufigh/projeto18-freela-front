import { styled } from "styled-components"

export const StyledInput = styled.input`
    height: 43px;
    width: 670px;
    font-family: Roboto;
    font-size: 16px;
    margin-top: 10px;
    border: none;
    padding-left: 40px;
    padding-right: 40px;
    &::placeholder{
    color: #666;
    font-family: ABeeZee;
    font-size: 16px;
    font-family: Roboto;
  }
  &:focus {
    outline: none;
  }
`

export const StyledInputForm = styled.input`
    height: 43px;
    width: 670px;
    font-family: Roboto;
    font-size: 16px;
    margin-top: 0px;
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



