import { Container } from "./Styled";
import {StyledInput} from "../../Components/StyledInput";
import { StyledFormSignUp } from "../../Components/StyledForm";
import StyledButton from "../../Components/StyledButton";
import { StyledLinkSignUp } from "../../Components/StyledLink";
import { StyledIconsSignUp } from "../../Components/StyledIcons";
import {HiLockClosed} from 'react-icons/hi';
import {FaUser} from 'react-icons/fa';
import { StyledTitleSignUp } from "../../Components/StyledTitle";
import {TbAd2} from 'react-icons/tb';
import {MdEmail} from 'react-icons/md';
import {BsFillTelephoneFill} from 'react-icons/bs';
import Header from "../../Components/Header/Header";
import { StyledPresentation } from "../../Components/StyledPresentation";
import icon from "../../assets/sgDividerIcon.png";

export default function SignUp(){
    return(
        <Container>
            <Header/>
            <StyledTitleSignUp>
                <h1>STAR</h1>
                <h2>MODELS</h2>
            </StyledTitleSignUp>
            <StyledFormSignUp>
                <StyledInput
                    name="name"
                    placeholder="Name"
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
                    placeholder="Telephone"
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
                    placeholder="Password"
                    type="password"
                    required
                />
                <p>.</p>
                <StyledInput
                    name="confirm-password"
                    placeholder="Confirm Password"
                    type="password"
                    required
                />
                <StyledButton type="submit">
                    Sign Up
                </StyledButton>
            </StyledFormSignUp>
            <StyledIconsSignUp>
                <span><FaUser/></span>
                <span><TbAd2/></span>
                <span><BsFillTelephoneFill/></span>
                <span><MdEmail/></span>
                <span><HiLockClosed/></span>
                <span><HiLockClosed/></span>
            </StyledIconsSignUp>
            <StyledLinkSignUp to="/">
                Have an account? Sign In
            </StyledLinkSignUp>
            <StyledPresentation>
                <img src={icon} alt="TrackIt" />
            </StyledPresentation>
        </Container>
    )
}