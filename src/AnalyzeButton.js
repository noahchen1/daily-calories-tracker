import React from 'react'
import styled from 'styled-components'

const Button = styled.button `

`


export default function AnalyzeButton({onClick}) {
    return (
       <Button
        type = 'submit'
        onClick = {onClick}
       >
           Analyze
       </Button>
    )
}
