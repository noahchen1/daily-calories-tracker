import React from 'react'
import Styled from 'styled-components'

export default function SearchField({ingr, onChange}) {
    return (
        <div>
            <textarea
                type = "text"
                value = {ingr}
                onChange = {onChange}
                placeholder = "search"
            >
            </textarea>
        </div>
    )
}
