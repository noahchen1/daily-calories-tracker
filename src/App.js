import axios from 'axios'
import Chart from './Chart'
import SearchField from './SearchField'
import { useState, useEffect } from 'react'


function App() {

  const APP_ID = '6d1f2104';
  const APP_KEY = '4c7c8e6fa9cac166f386697190912099';
  const [ingr, setIngr] = useState("")
  const [submit, setSubmit] = useState("")
  const [calories, setCalories] = useState([])
  const [searchResult, setSearchResult] = useState([])


  useEffect(() => {
    const foodArrays = []
    const foodArray = []
    const searchArray = []
    const ingrArray = ingr.split(/(\s+)/).filter(e => String(e).trim())

    const array = ingrArray.reduce(
      (arrays, value) => (
        isFinite(value)
          ? arrays.push([value])
          : arrays[arrays.length - 1].push(value),
          arrays
      ),
      []
    )

    for (var i = 0; i < array.length; i++) {
      const test = array[i].splice(2)
      foodArrays.push(test)
    }

    for (var i=0; i < array.length; i++) {
      const foodCombined = foodArrays[i].join('-')
      foodArray.push(foodCombined)
    }

    for (var i=0; i < foodArray.length; i++) {
      const a = array[i].concat(foodArray[i])
      searchArray.push(a)
    }

    setSearchResult(searchArray)

    for (var i=0; i < searchResult.length; i++) {
      searchResult[i].push(calories[i])
    }
    console.log(searchResult)

  }, [submit])



  return (
    <div>

      <form
        onSubmit = {e => {
          e.preventDefault()
          const caloriesArray = []
          for( var i=0; i<searchResult.length; i++) {
            const searchResultToString = searchResult[i].join(" ")
            axios.get(`https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${encodeURIComponent(searchResultToString)}`)
            .then(res => {
             caloriesArray.push(res.data.calories)
            })
          }
          setCalories(caloriesArray)
        }}
      >

        <label>Search for food</label>

        <SearchField 
          ingr = {ingr}
          onChange = {e => setIngr(e.target.value)}         
        />

        <button type="submit"
          onClick = {e => setSubmit(Math.random())}
        >
          Submit
        </button>
      </form>
      
      <div>
        {searchResult.map(foodSearched => (
          <Chart 
            qty = {foodSearched[0]}
            unit = {foodSearched[1]}
            food = {foodSearched[2]}
            calories = {foodSearched[3]}
          />
        ))}

      </div>

          
    </div>
  )

}

export default App;
