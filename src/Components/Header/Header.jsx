import Container from "./Styled"
import logo from "../../assets/icone.jpg"
import { Link } from "react-router-dom"

export default function Header() {

  return (
    <Container>
      <Link to="/">
        <button>SIGN IN</button>
      </Link>
      <Link to="/home">
        <img src={logo} alt="Logo" />
      </Link>
      <Link to="/signup">
        <button>SIGN UP</button>
      </Link>
    </Container>
  )
}