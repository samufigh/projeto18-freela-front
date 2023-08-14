import { Card } from "./Styled";
import picture from "../../assets/syndra.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiAuth from "../../services/ApiAuth";

export default function CardMyModel({info}) {
    const [available, setAvailable] = useState(info.available);

    const token = localStorage.token
    const navigate = useNavigate()
    useEffect(() => {
        if (!token) {
        navigate("/");
        return;
        }
        console.log(token)
    }, [])

    function isAvailable(id) {
        console.log(id);
        setAvailable(!available);
        const config = {available: info.available}
        const authentication = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
        apiAuth.isAvailabled(config, authentication, id)
        .then((res) => {
            console.log(res.data)
          })
            .catch((error) => {
              alert(error.message);
            });
    }

    return (
        <Card available={available}>
            <div>
                <img src={info.picture}/>
                <span>
                    <h1>{info.name}</h1>
                    <h2>{info.description}</h2>
                    <button onClick={() => isAvailable(info.id)}>
                        {available ? "AVAILABLE" : "NOT AVAILABLE"}
                    </button>
                </span>
            </div>
        </Card>
    );
}
