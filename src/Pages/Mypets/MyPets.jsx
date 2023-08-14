import { Container } from "./Styled"
import background from "../../assets/sgHeaderBackground.png"
import Header from "../../Components/Header/Header"
import { StyledTitleMain } from "../../Components/StyledTitle"
import logo from "../../assets/SGTitleCrest.png"
import logo2 from "../../assets/sgDividerIcon.png"
import { StyledLine } from "../../Components/StyledLine"
import { Cards } from "../../Components/StyledCards"
import CardMyModel from "../../Components/CardMyModel/CardMyModel"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import apiAuth from "../../services/ApiAuth"

export default function MyPets() {
  const [numCards, setNumCards] = useState(0);
  const [models, setModels] = useState({})

  const token = localStorage.token
  const navigate = useNavigate()
  useEffect(() => {
    if (!token) {
      localStorage.removeItem("token");
      navigate("/");
      return;
    }
    console.log(token)
    const authentication = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = apiAuth.getMyPets(authentication);
    res.then((res) => {
      console.log(res.data)
      setNumCards(res.data.length);
      setModels(res.data)
    })
      .catch((error) => {
        alert(error.message);
      });

  }, []);

  const cardModels = [];
  for (let i = 0; i < numCards; i++) {
    cardModels.push(<CardMyModel key={i} info={models[i]} />);
  }
  return (
    <Container>
      <Header />
      <img className="background" src={background} />
      <StyledTitleMain>
        <img className="logo" src={logo} />
        <h2>MY</h2>
        <h1>STAR MODELS</h1>
      </StyledTitleMain>
      <StyledLine>
        <span>.</span>
        <img className="logo2" src={logo2} />
      </StyledLine>
      <Cards>{cardModels}</Cards>

    </Container>
  )
}