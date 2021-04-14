import styled from "styled-components";

export const FormularioSearch = styled.form`
width:100%;
height:100%;
    input{
        width:90%;
        height:50%;
        border-radius:20px;
        color:black;
        text-align:center;
        font-size:20px;
        border: 1px solid white;
        &::placeholder{
            color:black;
            text-align:center;
        }
    }
`;