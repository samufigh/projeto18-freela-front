import Header from "../../Components/Header/Header";
import { StyledTitleProfile } from "../../Components/StyledTitle";
import { Container } from "./Styled";
import { StyledFormAddPet, StyledFormLogin, StyledFormMyProfile } from "../../Components/StyledForm";
import { StyledInputForm } from "../../Components/StyledInput";
import StyledButton from "../../Components/StyledButton";
import StyledTextArea from "../../Components/StyledTextArea";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import apiAuth from "../../services/ApiAuth";

export default function MyProfile() {
    const token = localStorage.token
    const navigate = useNavigate()
    const [infoUser, setInfoUser] = useState({})
    
    useEffect(() => {
        if (!token) {
            localStorage.removeItem("token");
            navigate("/");
            return;
        }
        const config = {
            headers: {
                Authorization: "Bearer " + token
            }
        };
        apiAuth.getInfoUser(config)
            .then((res) => {
                setInfoUser(res.data);
            })
            .catch((error) => {
                alert(error.message);
            });
        console.log(token);
    }, []);

    const [form, setForm] = useState({
        name: "",
        email: "",
        telephone: "",
        picture: "",
        description: ""
    });

    useEffect(() => {
        setForm({
            ...form,
            name: infoUser.name,
            email: infoUser.email,
            telephone: infoUser.telephone,
            picture: infoUser.picture,
            description: infoUser.description
        });
    }, [infoUser]);

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function attInfo(e) {
        e.preventDefault();

        console.log(form);
        const config = {
            headers: {
                Authorization: "Bearer " + token
            }
        };
        apiAuth.attInfoUser(form, config)
            .then((res) => {
                alert(res.data);
            })
            .catch((error) => {
                console.log(error)
                if(error.response.status===422) alert ("Insira informações validas")
            });
    }
    return (
        <Container>
            <Header />
            <StyledTitleProfile>
                <h2>ADD</h2>
                <h1>STAR MODELS</h1>
            </StyledTitleProfile>
            <StyledFormMyProfile onSubmit={attInfo}>
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
                <h3>Email</h3>
                <StyledInputForm
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleForm}
                />
                <p>.</p>
                <ul>Telephone</ul>
                <StyledInputForm
                    name="telephone"
                    placeholder="telephone"
                    type="telephone"
                    required
                    value={form.telephone}
                    onChange={handleForm}
                />
                <p>.</p>
                <span>Picture</span>
                <StyledInputForm
                    name="picture"
                    placeholder="Picture"
                    type="picture"
                    required
                    value={form.picture}
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
            </StyledFormMyProfile>
        </Container>
    )
}