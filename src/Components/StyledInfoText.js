import { styled } from "styled-components";

export const StyledInfoText = styled.div`
    display: flex;
    div{
        width: 500px;
        margin-right: 40px;
        h2{
        
        color: #FEB7FF;
    }
        h3{
            margin-top: 30px;
            color: white;
            line-height: 30px;
        }
        h1{
            color: white;
            font-size: 50px;
            font-weight: 700;
        }
    }
    .userImg{
        width: 350px;
        height: 400px;
        object-fit: cover;
        margin-left: 40px;
        border: 1px solid #FEB7FF;
    }


    .pet{
        width: 500px;
        margin-left: 40px;
        h2{
        margin-top: 100px;
        color: #FEB7FF;
        margin-bottom: 30px;
    }
        h3{
            margin-top: 30px;
            color: white;
            line-height: 30px;
        }
        h1{
            color: white;
            font-size: 50px;
            font-weight: 700;
        }
    }
    .petImg{
        margin-top: 10px;
        width: 300px;
        height: 300px;
        object-fit: cover;
        margin-right: 40px;
        border: 1px solid #FEB7FF;
    }
`