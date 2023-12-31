import { styled } from "styled-components";

export const StyledInfoPicture = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        margin-top: 15px;
        border: 1px solid #FEB7FF;
        width: 900px;
        height: 550px;
        object-fit: cover;
    }
    div{
    padding: 30px;
    position: relative;
    bottom: 90px;
    height: 180px;
    width: 700px;
    background-color: #6E1F4E;
    border: 1px solid #FEB7FF;
    span{
        color: white;
        font-size: 40px;
        font-weight: 700;
    }
    ul{
        margin-top: 25px;
        display: flex;
        justify-content: space-between;
        .container{
            padding: 30px;
            position: relative;
            bottom: 10px;
            height: initial;
            width: initial;
            background-color:initial;
            border: initial;
            color: white;
            padding: initial;
            h2{
                margin-bottom: 10px;
                color: #FEB7FF;
            }
            h3{
                font-size: 20px;
            }
        }
    }
    }
    .linha1{
        height: 30px;
        width: 1px;
        position: relative;
        background-color: white;
        bottom: 170px;
        right: 140px;
    }
    .linha2{
        height: 30px;
        width: 1px;
        position: relative;
        background-color: white;
        bottom: 200px;
        left: 140px;
    }
`