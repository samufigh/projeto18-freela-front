import { Container } from "./Styled";
import StyledInput from "../../Components/StyledInput";
import StyledForm from "../../Components/StyledForm";
import StyledTitle from "../../Components/StyledTitle";
import StyledButton from "../../Components/StyledButton";
import StyledLink from "../../Components/StyledLink";

export default function Login(){
    return(
        <Container>
            <StyledTitle>
                <h1>STAR</h1>
                <h2>MODELS</h2>
            </StyledTitle>
            <StyledForm>
                <StyledInput
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                />
                <p>.</p>
                <StyledInput
                    name="password"
                    placeholder="Senha"
                    type="password"
                    required
                />
                <StyledButton type="submit">
                        Entrar
                </StyledButton>
            </StyledForm>
            <StyledLink to="/register">
                Não tenho uma conta
            </StyledLink>
        </Container>
    )
}