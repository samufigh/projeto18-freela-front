import Header from "../../Components/Header/Header";
import { StyledTitleProfile } from "../../Components/StyledTitle";
import { Container } from "./Styled";
import { StyledFormAddPet, StyledFormLogin } from "../../Components/StyledForm";
import { StyledInputForm } from "../../Components/StyledInput";
import StyledButton from "../../Components/StyledButton";
import StyledTextArea from "../../Components/StyledTextArea";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import apiAuth from "../../services/ApiAuth";

export default function AddPets(){
    const token = localStorage.token
    const navigate = useNavigate()
    useEffect(() => {
    if (!token) {
        navigate("/");
        return;
      }
    console.log(token)
    const authentication = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    };
    const res = apiAuth.addPet(authentication);
    res.then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        alert(error.message);
      });

    }, []);
    return(
        <Container>
            <Header/>
            <StyledTitleProfile>    
                <h2>ADD</h2>
                <h1>STAR MODELS</h1>
            </StyledTitleProfile>
            <StyledFormAddPet>
                <h1>Name</h1>
                <StyledInputForm
                    name="name"
                    placeholder="Name"
                    type="name"
                    required
                />
                <p>.</p>
                <h3>Picture</h3>
                <StyledInputForm
                    name="picture"
                    placeholder="Picture"
                    type="picture"
                    required
                />
                <p>.</p>
                <span>Picture with your pet</span>
                <StyledInputForm
                    name="pictureUserPet"
                    placeholder="Picture"
                    type="picture"
                    required
                />
                <p>.</p>
                <h2>Description</h2>
                <StyledTextArea
                    name="description"
                    placeholder="Description"
                    type="description"
                    required
                />
                <StyledButton type="submit">
                        ADD
                </StyledButton>
            </StyledFormAddPet>
        </Container>
    )
}