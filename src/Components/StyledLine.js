import { styled } from "styled-components"

export const StyledLine = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    span{
        position: relative;
        bottom: 290px;
        margin: 10px 0;
        height: 1px;
        width: 100%;
        background: -webkit-gradient(linear, 0 0, 100% 0, from(white), to(white), color-stop(50%, #11051c)); 
    }
    img{
        position: relative;
        bottom: 330px;
        width: 100px;
    }
`