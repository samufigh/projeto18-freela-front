import { Card } from "./Styled";
import picture from "../../assets/syndra.jpg";
import { Link } from "react-router-dom";

export default function CardModel({info}){
    console.log(info.picture)
    return(
        <Card>
            <div>
                <img src={info.picture}/>
                <span>
                <h1>{info.name}</h1>
                <h2>{info.description}</h2>
                <Link to="/pet">
                <button>VIEW MORE</button>
                </Link>
                </span>
            </div>
        </Card>
    )
}