import React from 'react'

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
