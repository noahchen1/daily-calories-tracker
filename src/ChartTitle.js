import styled from 'styled-components'


const ChartTitleGrid = styled.div `
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(4, 70px);
    grid-template-rows: repeat(1, 20px);
    animation: 1s ease forwards fade-in-left;

    @keyframes fade-in-left {
        0% {opacity: 0; transform: translateX(-20px); }
        100% {opacity: 1; transform: translateX(0px); }
    }
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
