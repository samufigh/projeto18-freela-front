import Header from "../../Components/Header/Header";
import { StyledTitleProfile } from "../../Components/StyledTitle";
import { Container } from "./Styled";
import { StyledFormAddPet, StyledFormLogin } from "../../Components/StyledForm";
import { StyledInputForm } from "../../Components/StyledInput";
import StyledButton from "../../Components/StyledButton";
import StyledTextArea from "../../Components/StyledTextArea";

export default function AddPets(){
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