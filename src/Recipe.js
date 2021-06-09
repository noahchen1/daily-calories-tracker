import React from 'react'

export default function Recipe() {
    return (
        <div>
            <form onSubmit = {e => {
                e.preventDefault()
                const input = new FormData(e.target)
                const value = Object.fromEntries(input.entries())
                const encodedValue = JSON.stringify(value)

                
                const getNutrition = axios.post(`https://api.edamam.com/api/nutrition-details?app_id=${APP_ID}&app_key=${APP_KEY}`, encodedValue, {
                header: {
                    "content-type": "application/json"
                }
                }).then(res => {
                console.log(res.data)
                })
                
            }}>

                <label>Recipe Name</label>
                <input type="text" name="title"></input>

                <label>ingredient</label>
                <input type="text" name="ingr"></input>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
