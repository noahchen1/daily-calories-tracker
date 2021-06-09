import axios from 'axios'
import recipe from './recipe.json'
import { useState } from 'react'

function App() {

  const APP_ID = '6d1f2104';
  const APP_KEY = '4c7c8e6fa9cac166f386697190912099';
  const [ingr, setIngr] = useState()
  const encodedIngr = encodeURIComponent(ingr)

 
  return (
    <div>
      <form
        onSubmit = {(e) => {
          e.preventDefault()
          axios.get(`https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${encodedIngr}`)
               .then(res => {
                console.log(res.data)
          })
        }}
      >

        <label>Search for food</label>
        <input 
          type="text" 
          name="ingr"
          onChange = {e => {
            setIngr(e.target.value)
            console.log(ingr)
          }}
        >  
        </input>

        <button type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )

}

export default App;
