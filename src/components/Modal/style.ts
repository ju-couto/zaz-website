import styled from "styled-components";

interface ModalProps {
    position?: string;
    left?: string;
}

export const ModalContainer = styled.div<ModalProps>`
    background-color: #DA8E41;
    border-radius: 10px;
    position: ${props => props.position ?? "relative"};
    margin-left: 20px;
    width: 450px;
    left: ${props => props.left ?? "0"};
    height: 300px;
    padding: 20px;
    display: flex;
    justify-content: center;
    box-shadow: 0px 4px 4px #000000;
    font-family: 'Sawai Gothic', sans-serif;
    div{
        display: flex;
        flex-direction: column;
        padding: 10px;
    }
    h1 {
        align-self: flex-end;
        justify-content: flex-start;
        font-size: 30px;
        font-weight: 300;
        font-size: 20px;
    }
    p{
        font-family: 'Sawai Mincho', serif;
    }
    
`
export const Local = styled.p`
    font-size: 14px;
    
    color: #fff;
    font-weight: 300;
`

export const Description = styled.p`
    font-size: 15px;
    text-align: justify;

`