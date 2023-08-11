import { Container } from "./Styled";
import StyledInput from "../../Components/StyledInput";
import { StyledFormLogin } from "../../Components/StyledForm";
import { StyledTitleLogin } from "../../Components/StyledTitle";
import StyledButton from "../../Components/StyledButton";
import { StyledLinkLogin } from "../../Components/StyledLink";
import {MdEmail} from 'react-icons/md';
import {HiLockClosed} from 'react-icons/hi';
import { StyledIconsLogin } from "../../Components/StyledIcons";
import Header from "../../Components/Header/Header";
import { StyledPresentation } from "../../Components/StyledPresentation";
import icon from "../../assets/sgDividerIcon.png"

export default function Login(){
    return(
        <Container>
            <Header/>
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
                    placeholder="Password"
                    type="password"
                    required
                />
                <StyledButton type="submit">
                        Sign In
                </StyledButton>
            </StyledFormLogin>
            <StyledIconsLogin>
                <span><MdEmail/></span>
                <span><HiLockClosed/></span>
            </StyledIconsLogin>
            <StyledLinkLogin to="/signup">
                Don't have an account? Click here
            </StyledLinkLogin>
            <StyledPresentation>
                <img src={icon} alt="TrackIt" />
                <h1>Feast your eyes on Magical Models: Welcome to Star Models Agency!</h1>
                <h2>Explore a universe of cuteness and charm, where magical pets shine like the real stars of the runway.</h2>
            </StyledPresentation>
        </Container>
    )
}