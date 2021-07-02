import React from 'react'
import styled from 'styled-components'

const BubbleContainer = styled.div `
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.5);
    border-width: 1.2px;
    border-radius: 30px;
    text-align: center;
    width: 15%;
    min-width: 300px;
    height: 200px;
    position: absolute;
    margin-top: 100px;
    background-color: #fff;
    box-shadow: 0px 4px 32px -2px rgba(0,0,0,0.3);
`
const Paragraph = styled.p `
    font-size: 1.3em;
    margin-top: 50px;
`
const handleClick = e => {
    window.location.reload()
}

export default function ErrorBubble() {
    return (
        <BubbleContainer
            onClick = {handleClick}
        >
            <Paragraph>Be sure to specify quantity and unit! e.g. one whole apple</Paragraph>
        </BubbleContainer>
    )
}
