import { Container } from "./Styled";
import StyledInput from "../../Components/StyledInput";
import StyledForm from "../../Components/StyledForm";
import StyledTitle from "../../Components/StyledTitle";
import StyledButton from "../../Components/StyledButton";
import StyledLink from "../../Components/StyledLink";

export default function SignUp(){
    return(
        <Container>
            <StyledTitle>
                <h1>STAR</h1>
                <h2>MODELS</h2>
            </StyledTitle>
            <StyledForm>
                <StyledInput
                    name="name"
                    placeholder="Nome"
                    type="name"
                    required
                />
                <p>.</p>
                <StyledInput
                    name="cpf"
                    placeholder="CPF"
                    type="cpf"
                    required
                />
                <p>.</p>
                <StyledInput
                    name="telephone"
                    placeholder="Telefone"
                    type="telephone"
                    required
                />
                <p>.</p>
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
                <p>.</p>
                <StyledInput
                    name="confirm-password"
                    placeholder="Confirmar Senha"
                    type="password"
                    required
                />
                <StyledButton type="submit">
                    Cadastrar
                </StyledButton>
            </StyledForm>
            <StyledLink to="/">
                Já tenho uma conta
            </StyledLink>
        </Container>
    )
}