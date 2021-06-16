import axios from 'axios'
import Chart from './Chart'
import ChartTitle from './ChartTitle'
import DailyValue from './DailyValue'
import SearchField from './SearchField'
import { useState, useEffect } from 'react'


function App() {

  const APP_ID = '6d1f2104';
  const APP_KEY = '4c7c8e6fa9cac166f386697190912099';
  const [ingr, setIngr] = useState("")
  const [submit, setSubmit] = useState("1")
  const [calories, setCalories] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [showChartTitle, setShowChartTitle] = useState(false)


  function handleSubmit() {
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
      const foodName = array[i].splice(2).join(' ')
      foodArray.push(foodName)
      const wholeArray = array[i].concat(foodArray[i])
      searchArray.push(wholeArray)
    }

    async function nutrition() {
      const callPromises = searchArray.map((ingredient) => {
        const searchArrayToString = [encodeURIComponent(ingredient)]
        return axios.get(`https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${searchArrayToString}`)
      })

      return (await Promise.all(callPromises)).map(res => res.data.calories)
    }
    
    nutrition().then(res => {
      const calorieArray = res
      for(var i=0; i < searchArray.length; i++) {
        searchArray[i].push(calorieArray[i])
      }
      setSearchResult(searchArray)
    })
  }



  

  return (
    <div>

      <form
        onSubmit = {e => {
          e.preventDefault()
          setShowChartTitle(true)
        }}
      >

        <label>Search for food</label>

        <SearchField 
          ingr = {ingr}
          onChange = {e => setIngr(e.target.value)}         
        />

        <button type="submit"
          onClick = {handleSubmit}
        >
          Submit
        </button>

      </form>
      
      <div>
        {showChartTitle ? <ChartTitle /> : null}
        {searchResult.map(foodSearched => (
          <Chart 
            qty = {foodSearched[0]}
            unit = {foodSearched[1]}
            food = {foodSearched[2]}
            calories = {foodSearched[3]}
          />
        ))}
      </div>

      <div>
        <DailyValue />
      </div>
    </div>
  )

}

export default App;
