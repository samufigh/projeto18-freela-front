import React, { useState, useEffect } from "react";
import { Container } from "./Styled";
import background from "../../assets/sgHeaderBackground.png";
import Header from "../../Components/Header/Header";
import { StyledTitleMain } from "../../Components/StyledTitle";
import logo from "../../assets/SGTitleCrest.png";
import logo2 from "../../assets/sgDividerIcon.png";
import { StyledLine } from "../../Components/StyledLine";
import CardModel from "../../Components/CardModel/CardModel";
import { Cards } from "../../Components/StyledCards";
import apiAuth from "../../services/ApiAuth";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [numCards, setNumCards] = useState(0);
  const [models, setModels] = useState({})

  useEffect(() => {
    const res = apiAuth.pets();
    res.then((res) => {
      console.log(res.data);
      setNumCards(res.data.length);
      setModels(res.data)
    }).catch((error) => {
      alert(error.message);
    });
  }, []);

  const cardModels = [];
  for (let i = 0; i < numCards; i++) {
    cardModels.push(<CardModel key={i} info={models[i]}/>);
  }

  return (
    <Container>
      <Header />
      <img className="background" src={background} />
      <StyledTitleMain>
        <img className="logo" src={logo} alt="Logo" />
        <h1>STAR MODELS</h1>
        <h2>DISPONÍVEIS</h2>
      </StyledTitleMain>
      <StyledLine>
        <span>.</span>
        <img className="logo2" src={logo2} alt="Logo 2" />
      </StyledLine>
      <Cards>{cardModels}</Cards>
    </Container>
  );
}