import styled from "styled-components";

export const Button = styled.button`
    padding: 10px 18px;
    background-color: #000000;
    color: white;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 13px;
    border: 1px solid black;
    transition: background 0.4s ease-in;
    cursor: pointer;

    &:hover{
        background-color: #98ac42;
        border: 1px solid black;
        color: black;
        transition: background 0.3s ease-in;
    }

 `;
 export const OutlineButton = styled(Button)`
    background-color: white;
    border: 1px solid black;
    color: black;

 
 &:hover{
        background-color: black;
        border: 1px solid transparent;
        color: white;
    }
 `;
