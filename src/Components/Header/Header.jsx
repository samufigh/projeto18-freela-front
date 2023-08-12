import Container from "./Styled";
import logo from "../../assets/icone.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <Container logged={isLogged}>
      <Link to="/">
        <button>SIGN IN</button>
      </Link>
      <Link to="/myPets">
        <div>MY PETS</div>
      </Link>
      <Link to="/addPet">
        <div>ADD PETS</div>
      </Link>
      <Link to="/home">
        <img src={logo} alt="Logo" />
      </Link>
      <Link to="/myProfile">
        <div>MY PROFILE</div>
      </Link>
      <Link to="/">
        <div>LOGOUT</div>
      </Link>
      <Link to="/signup">
        <button>SIGN UP</button>
      </Link>
    </Container>
  )
}