import { Card } from "./Styled";
import picture from "../../assets/syndra.jpg";
import { Link } from "react-router-dom";

export default function CardModel(){
    return(
        <Card>
            <div>
                <img src={picture}/>
                <span>
                <h1>Kiko</h1>
                <h2>aaaaaaaaaaaa</h2>
                <Link to="/pet">
                <button>VIEW MORE</button>
                </Link>
                </span>
            </div>
        </Card>
    )
}