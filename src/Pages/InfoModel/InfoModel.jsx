import Header from "../../Components/Header/Header";
import { StyledTitle, StyledTitleLogin, StyledTitleMain } from "../../Components/StyledTitle";
import { Container } from "./Styled";
import logo from "../../assets/SGTitleCrest.png"
import { StyledProfiles } from "../../Components/StyledProfiles";
import { StyledInfoPicture } from "../../Components/StyledInfoPicture";
import { StyledInfoText } from "../../Components/StyledInfoText";
import { useEffect, useState } from "react";
import apiAuth from "../../services/ApiAuth";
import { useParams } from "react-router-dom";

export default function InfoModel(){
    const token = localStorage.token
    const [model, setModel] = useState("")
    const {id} = useParams()
    useEffect(() => {
    const res = apiAuth.pet(id)
    res.then((res) => {
        setModel(res.data)
      })
      .catch((error) => {
        alert(error.message);
      });

    }, []);
    
    console.log(model)
    return(
        <Container>
            <Header/>
            <StyledTitle>
            <img className="logo" src={logo} />
            <div>
                <h1>STAR MODEL</h1>
            </div>
            </StyledTitle>
            <StyledProfiles>
            </StyledProfiles>
            <StyledInfoPicture>
                <img src={model.pictureUserPet}/>
                <div>
                    <span>{model.userName}</span>
                    <ul>
                        <div className="container">
                            <h2>
                                Telephone
                            </h2>
                            <h3>
                                {model.telephone}
                            </h3>
                        </div>
                        <div className="container">
                            <h2>
                                Email
                            </h2>
                            <h3>
                                {model.email}
                            </h3>
                        </div>
                        <div className="container">
                            <h2>
                                CPF
                            </h2>
                            <h3>
                                {model.cpf}
                            </h3>
                        </div>
                    </ul>
                </div>
                <ul className="linha1">.</ul>
                <ul className="linha2">.</ul>
            </StyledInfoPicture>
            <StyledInfoText>
                <div>
                    <h2>ABOUT STAR GUARDIAN {model.userName}</h2>
                    <h3>{model.userDescription}</h3>
                </div>
                <img className="userImg" src={model.userPicture}/>
            </StyledInfoText>
            <StyledInfoText>
                <img className="petImg" src={model.picture}/>
                <div className="pet">
                    <h2>MEET THE MAGICAL PET</h2>
                    <h1>{model.name}</h1>
                    <h3>{model.description}</h3>
                </div>
            </StyledInfoText>

        </Container>
    )
}