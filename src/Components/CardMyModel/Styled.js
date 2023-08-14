import { styled } from "styled-components";

export const Card = styled.div`
    width: 400px;
    height: 730px;
    background: linear-gradient(#000c23, #000c23) 50% 50%/calc(100% - 2px) calc(100% - 2px) no-repeat,
            linear-gradient(90deg, #ffb6e1 0%, rgba(132,191,255,1) 65%, #ffffff 100%);
    border-radius: 0px;
    padding: 29px;
    box-sizing: border-box;
    margin-right: 150px;

    div{
        color: white;
        width: 342px;
        height: 645px;
        img{
        object-fit: cover;
        width: 342px;
        height: 342px;
        
        }
        h1{
            margin: 30px 40px 0px 40px;
            font-size: 40px;
        }
        h2{
            display: flex;
            margin: 20px 40px 0px 40px;
            height: 150px;
            font-size: 15px;
        }
        button{
            width: 230px;
            height: 50px;
            margin: 20px 40px 10px 55px;
            cursor: pointer;
            border: 1px solid white;
            background-color: ${(props) => (props.available===false ? "#690000" : "#032F00")};
            color: white;
            font-weight: 700;
            font-size: 15px;
        }
    }
`