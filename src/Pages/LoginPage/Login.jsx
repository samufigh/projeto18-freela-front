import { Container } from "./Styled";
import {StyledInput} from "../../Components/StyledInput";
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
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiAuth from "../../services/ApiAuth";
import { UserContext } from "../../contexts/UserContext";

export default function Login(){
    const [loading, setLoading] = useState(false);
    const {user, setUser} = useContext(UserContext)
    console.log(user)

    const [form, setForm] = useState({
        email: "",
        password: "",
      })
    const navigate = useNavigate()

    function handleForm(e) {
        setForm({...form, [e.target.name]: e.target.value })
    }

    function signIn(e) {
        e.preventDefault();
        setLoading(true);
        
          apiAuth.login(form)
            .then(res => {
                setLoading(false)
                const token = res.data.token
                setUser(token)
                localStorage.setItem("token", token)
                console.log(res.data.token)
                navigate("/home")
            })
            .catch(err => {
                setLoading(false)
                console.log(err.response.data)
            })
        }
    return(
        <Container>
            <Header/>
            <StyledTitleLogin>
                <h1>STAR</h1>
                <h2>MODELS</h2>
            </StyledTitleLogin>
            <StyledFormLogin onSubmit={signIn}>
                <StyledInput
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleForm}
                />
                <p>.</p>
                <StyledInput
                    name="password"
                    placeholder="Password"
                    type="password"
                    required
                    value={form.password}
                    onChange={handleForm}
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