import Header from "../../Components/Header/Header";
import { StyledTitle, StyledTitleLogin, StyledTitleMain } from "../../Components/StyledTitle";
import { Container } from "./Styled";
import logo from "../../assets/SGTitleCrest.png"
import { StyledProfiles } from "../../Components/StyledProfiles";
import { StyledInfoPicture } from "../../Components/StyledInfoPicture";
import picture from "../../assets/Neeko_10.jpg";

export default function InfoModel(){
    return(
        <Container>
            <Header/>
            <StyledTitle>
                <img className="logo" src={logo}/>
                <h1>STAR MODELS</h1>
            </StyledTitle>
            <StyledProfiles>
            </StyledProfiles>
            <StyledInfoPicture>
                <img src={picture}/>
                <div>
                    <span>AHRI</span>
                    <p>
                        <h1>
                            <h2>
                                Telephone
                            </h2>
                            <h3>
                                (19)99433-0867
                            </h3>
                        </h1>
                        <h1>
                            <h2>
                                Email
                            </h2>
                            <h3>
                                fiddlesticks@gmail.com
                            </h3>
                        </h1>
                        <h1>
                            <h2>
                                CPF
                            </h2>
                            <h3>
                                483.747.288-50
                            </h3>
                        </h1>
                    </p>
                </div>
                <ul className="linha1">.</ul>
                <ul className="linha2">.</ul>
            </StyledInfoPicture>

        </Container>
    )
}