import { Container } from "./Styled";
import StyledInput from "../../Components/StyledInput";
import { StyledFormLogin } from "../../Components/StyledForm";
import { StyledTitleLogin } from "../../Components/StyledTitle";
import StyledButton from "../../Components/StyledButton";
import { StyledLinkLogin } from "../../Components/StyledLink";
import {MdEmail} from 'react-icons/md';
import {HiLockClosed} from 'react-icons/hi';
import { StyledIconsLogin } from "../../Components/StyledIcons";

export default function Login(){
    return(
        <Container>
            <StyledTitleLogin>
                <h1>STAR</h1>
                <h2>MODELS</h2>
            </StyledTitleLogin>
            <StyledFormLogin>
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
            </StyledFormLogin>
            <StyledIconsLogin>
                <span><MdEmail/></span>
                <span><HiLockClosed/></span>
            </StyledIconsLogin>
            <StyledLinkLogin to="/register">
                Não tenho uma conta
            </StyledLinkLogin>
        </Container>
    )
}