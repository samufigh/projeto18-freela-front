import { Card } from "./Styled";
import picture from "../../assets/syndra.jpg";
import { useState } from "react";

export default function CardMyModel(){
    const [available, setAvailable] = useState("AVAILABLE");
    return(
        <Card available={available}>
            <div>
                <img src={picture}/>
                <span>
                <h1>Kicddfo</h1>
                <h2>aaaaaaaabbbbaaaa</h2>
                <button>{available}</button>
                </span>
            </div>
        </Card>
    )
}