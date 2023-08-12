import { Container } from "./Styled"
import background from "../../assets/sgHeaderBackground.png"
import Header from "../../Components/Header/Header"
import { StyledTitleMain } from "../../Components/StyledTitle"
import logo from "../../assets/SGTitleCrest.png"
import logo2 from "../../assets/sgDividerIcon.png"
import { StyledLine } from "../../Components/StyledLine"
import { Cards } from "../../Components/StyledCards"
import CardMyModel from "../../Components/CardMyModel/CardMyModel"

export default function MyPets(){
    return(
        <Container>
            <Header/>
            <img className="background" src={background}/>
            <StyledTitleMain>
                <img className="logo" src={logo}/>
                <h2>MY</h2>
                <h1>STAR MODELS</h1>
            </StyledTitleMain>
            <StyledLine>
            <span>.</span>
            <img classname="logo2" src={logo2}/>
            </StyledLine>
            <Cards>
                <CardMyModel/>
                <CardMyModel/>
                <CardMyModel/> 
                <CardMyModel/>
                <CardMyModel/>
                <CardMyModel/> 
                <CardMyModel/>
                <CardMyModel/>
                <CardMyModel/> 
            </Cards>   

        </Container>
    )
}