import React from 'react'

export default function SearchField({ingr, onChange}) {
    return (
        <div>
            <input 
                type = "text"
                value = {ingr}
                onChange = {onChange}
                placeholder = "search"
            />
        </div>
    )
}
