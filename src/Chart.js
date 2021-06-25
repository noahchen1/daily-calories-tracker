import React from 'react'
import styled from 'styled-components'

const GridBox = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(4, 70px);
    grid-template-rows: repeat(1, 20px);
    margin-top: 10px;
    animation: 1s ease forwards fade-in-left;

    @keyframes fade-in-left {
        0% {opacity: 0; transform: translateX(-20px); }
        100% {opacity: 1; transform: translateX(0px); }
    }
`


export default function Chart({qty, unit, food, calories}) {

    return (
        <GridBox>
            <span>{qty}</span>
            <span>{unit}</span>
            <span>{food}</span>
            <span>{calories}</span>
        </GridBox>
    )
}
