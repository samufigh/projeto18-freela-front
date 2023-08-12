import { styled } from "styled-components";

export const Cards = styled.div`
    max-width: 1800px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
    padding-bottom: 50px;
    /* Estiliza o scrollbar */
    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent; /* Cor do "polegar" do scrollbar */
      border: 1px solid white;
      border-radius: 5px;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent; /* Cor da trilha do scrollbar */
      border: none;
    }

    &::-webkit-scrollbar-thumb:active {
      background-color: #888; /* Cor do "polegar" quando clicado */
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #FEB7FF; /* Cor do "polegar" ao passar o mouse */
      border-radius: 5px;
    }
`;