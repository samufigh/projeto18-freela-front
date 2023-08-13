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
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import apiAuth from "../../services/ApiAuth";

export default function SignUp(){
    const [loading, setLoading] = useState("");
    const [form, setForm] = useState({
        name: "",
        cpf: "",
        telephone: "",
        email: "",
        password: "",
        confirmPassword: ""
      })
    const navigate = useNavigate()

    function handleForm(e) {
        setForm({...form, [e.target.name]: e.target.value })
    }

    function signUp(e) {
        e.preventDefault();
        setLoading(true);
    
        if (form[e.target.password] !== form[e.target.confirmPassword]) {
          alert("As senhas devem ser iguais");
          setLoad(false);
          return;
        }
        
          apiAuth.signUp(form)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err.response.data)
            })
            //navigate("/")
      }
    return(
        <Container>
            <Header/>
            <StyledTitleSignUp>
                <h1>STAR</h1>
                <h2>MODELS</h2>
            </StyledTitleSignUp>
            <StyledFormSignUp onSubmit={signUp}>
                <StyledInput
                    name="name"
                    placeholder="Name"
                    type="name"
                    required
                    value={form.name}
                    onChange={handleForm}
                />
                <p>.</p>
                <StyledInput
                    name="cpf"
                    placeholder="CPF"
                    type="cpf"
                    required
                    value={form.cpf}
                    onChange={handleForm}
                />
                <p>.</p>
                <StyledInput
                    name="telephone"
                    placeholder="Telephone"
                    type="telephone"
                    required
                    value={form.telephone}
                    onChange={handleForm}
                />
                <p>.</p>
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
                <p>.</p>
                <StyledInput
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    type="password"
                    required
                    value={form.confirmPassword}
                    onChange={handleForm}
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