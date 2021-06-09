import axios from 'axios'
import Chart from './Chart'
import SearchField from './SearchField'
import { useState, useEffect } from 'react'


function App() {

  const APP_ID = '6d1f2104';
  const APP_KEY = '4c7c8e6fa9cac166f386697190912099';
  const [ingr, setIngr] = useState("")


  return (
    <div>

      <form
        onSubmit = {(e) => {
          e.preventDefault()
          axios.get(`https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${encodeURIComponent(ingr)}`)
               .then(res => {
                console.log(res.data)
          })
        }}
      >

        <label>Search for food</label>

        <SearchField 
          ingr = {ingr}
          onChange = {e => setIngr(e.target.value)}
        />

        <button type="submit"
        >
          Submit
        </button>
      </form>
      
      <Chart />

    </div>
  )

}

export default App;
