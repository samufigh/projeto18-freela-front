import { Container } from "./Styled"
import background from "../../assets/sgHeaderBackground.png"
import Header from "../../Components/Header/Header"
import { StyledTitleMain } from "../../Components/StyledTitle"
import logo from "../../assets/SGTitleCrest.png"
import logo2 from "../../assets/sgDividerIcon.png"
import { StyledLine } from "../../Components/StyledLine"
import CardModel from "../../Components/CardModel/CardModel"
import { Cards } from "../../Components/StyledCards"

export default function Home(){
    return(
        <Container>
            <Header/>
            <img className="background" src={background}/>
            <StyledTitleMain>
                <img className="logo" src={logo}/>
                <h1>STAR MODELS</h1>
                <h2>DISPONÍVEIS</h2>
            </StyledTitleMain>
            <StyledLine>
            <span>.</span>
            <img classname="logo2" src={logo2}/>
            </StyledLine>
            <Cards>
                <CardModel/>
                <CardModel/>
                <CardModel/> 
                <CardModel/>
                <CardModel/>
                <CardModel/> 
                <CardModel/>
                <CardModel/>
                <CardModel/> 
            </Cards>   

        </Container>
    )
}