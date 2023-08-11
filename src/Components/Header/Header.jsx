import Container from "./Styled"
import logo from "../../assets/icone.jpg"
import { Link } from "react-router-dom"

export default function Header() {

  return (
    <Container>
      <button>SIGN IN</button>
      <Link to="/hoje">
        <img src={logo} alt="Logo" />
      </Link>
      <button>SIGN UP</button>
    </Container>
  )
}