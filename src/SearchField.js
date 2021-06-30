import React from 'react'
import styled from 'styled-components'



const TextArea = styled.textarea `
    height: 20px;
    width: 250px;
    border-radius: 20px;
    animation: 1s ease forwards fade-in;
    outline: none;
    border-color: rgba(0, 0, 0, 0.3);
    font-size: 1em;
    font-family: 'Roboto';
    letter-spacing: 0.5px;
    padding: 5px 0 5px 10px;
    line-height: 25px;
    overflow: hidden;

    @keyframes fade-in {
        0% {opacity: 0; transform: translateY(-10px); }
        100% {opacity: 1; transform: translateY(10px); }
    }

    @keyframes expand {
        0% {}
        100% {width: 400px; height: 300px; border-radius: 10px;}
    }
`




const handleClick = (e) => {
    e.target.style.animation = '0.8s ease-in-out forwards expand'
}


export default function SearchField({ingr, onChange}) {

    return (
        <div style = {{display: "flex", justifyContent: "center"}}>
            <TextArea
                type = "text"
                value = {ingr}
                onChange = {onChange}
                onClick = {handleClick}
                placeholder = "1 whole apple 
2 oz pizza
3 oz chicken thighs">
            </TextArea>
        </div>
    )
}
