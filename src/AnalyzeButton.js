import React from 'react'
import styled from 'styled-components'

const Button = styled.button `
    display: block;
    width: 110px;
    height: 40px;
    border: none;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 18px;
    border-radius: 6px;
    outline: none;
    cursor: pointer;
    transition: .3s linear;

    &:hover {
        transform: rotateX(15deg);
        background-color: rgba(0, 0, 0, 0.7);
        box-shadow: 0 15px 15px rgba(0,0,0, 0.5);
    }

`


export default function AnalyzeButton({onClick}) {
    return (
        <div style={{perspective: "320px"}}>
            <Button
                type = 'submit'
                onClick = {onClick}
            >
            Analyze
            </Button>
        </div>
      
    )
}
