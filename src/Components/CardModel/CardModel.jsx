import { Card } from "./Styled";
import { Link, useNavigate } from "react-router-dom";

export default function CardModel({info}){
    const navigate = useNavigate();

    function redirect(id){
        navigate(`/pet/${id}`)
    }
    return(
        <Card>
            <div>
                <img src={info.picture}/>
                <span>
                <h1>{info.name}</h1>
                <h2>{info.description}</h2>
                <button onClick={() => redirect(info.id)}>VIEW MORE</button>
                </span>
            </div>
        </Card>
    )
}