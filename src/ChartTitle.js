import styled from 'styled-components'


const ChartTitleGrid = styled.div `
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(1, 20px);
    justify-items: center;
    margin-bottom: 30px;
    animation: 1s ease forwards fade-in-left;

    @keyframes fade-in-left {
        0% {opacity: 0; transform: translateX(-20px); }
        100% {opacity: 1; transform: translateX(0px); }
    }
`

export default function ChartTitle() {


    return (
        <ChartTitleGrid>
            <span><b>Qty</b></span>
            <span><b>Unit</b></span>
            <span><b>Food</b></span>
            <span><b>Calories</b></span>
        </ChartTitleGrid>
    )
}
