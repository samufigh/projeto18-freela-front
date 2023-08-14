import Header from "../../Components/Header/Header";
import { StyledTitleProfile } from "../../Components/StyledTitle";
import { Container } from "./Styled";
import { StyledFormAddPet, StyledFormLogin } from "../../Components/StyledForm";
import { StyledInputForm } from "../../Components/StyledInput";
import StyledButton from "../../Components/StyledButton";
import StyledTextArea from "../../Components/StyledTextArea";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import apiAuth from "../../services/ApiAuth";

export default function AddPets(){
    const token = localStorage.token
    const navigate = useNavigate()

    const [form, setForm] = useState({
        name: "",
        picture: "",
        pictureUserPet: "",
        description: ""
      })

    function handleForm(e) {
        setForm({...form, [e.target.name]: e.target.value })
    }
    useEffect(() => {
    if (!token) {
        navigate("/");
        return;
    }
    console.log(token)
    }, []);

    function add(e){
        e.preventDefault();

        const config = {
            headers: {
                Authorization: "Bearer " + token
            }
        }
         console.log(form);
         console.log(config);
            apiAuth.addPet(form, config)
        .then((res) => {
            console.log(res.data)
        })
        .catch((error) => {
            alert(error.message);
            alert("insira uma url valida")
        });
    }
    return(
        <Container>
            <Header/>
            <StyledTitleProfile>    
                <h2>ADD</h2>
                <h1>STAR MODELS</h1>
            </StyledTitleProfile>
            <StyledFormAddPet onSubmit={add}>
                <h1>Name</h1>
                <StyledInputForm
                    name="name"
                    placeholder="Name"
                    type="name"
                    required
                    value={form.name}
                    onChange={handleForm}
                />
                <p>.</p>
                <h3>Picture</h3>
                <StyledInputForm
                    name="picture"
                    placeholder="Picture"
                    type="picture"
                    required
                    value={form.picture}
                    onChange={handleForm}
                />
                <p>.</p>
                <span>Picture with your pet</span>
                <StyledInputForm
                    name="pictureUserPet"
                    placeholder="Picture"
                    type="picture"
                    required
                    value={form.pictureUserPet}
                    onChange={handleForm}
                />
                <p>.</p>
                <h2>Description</h2>
                <StyledTextArea
                    name="description"
                    placeholder="Description"
                    type="description"
                    required
                    value={form.description}
                    onChange={handleForm}
                />
                <StyledButton type="submit">
                        ADD
                </StyledButton>
            </StyledFormAddPet>
        </Container>
    )
}