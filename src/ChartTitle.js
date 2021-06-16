import styled from 'styled-components'
import { useState } from 'react'

const ChartTitleGrid = styled.div `
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(4, 70px);
    grid-template-rows: repeat(1, 20px);
`

export default function ChartTitle() {


    return (
        <ChartTitleGrid>
            <span>Qty</span>
            <span>Unit</span>
            <span>Food</span>
            <span>Calories</span>
        </ChartTitleGrid>
    )
}
