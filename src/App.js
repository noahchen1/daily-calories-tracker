import axios from 'axios'
import Chart from './Chart'
import SearchField from './SearchField'
import { useState, useEffect } from 'react'


function App() {

  const APP_ID = '6d1f2104';
  const APP_KEY = '4c7c8e6fa9cac166f386697190912099';
  const [ingr, setIngr] = useState("")
  const [submit, setSubmit] = useState("")
  const [qty, setQty] = useState([])
  const [unit, setUnit] = useState("")
  const [food, setFood] = useState("")
  const [calories, setCalories] = useState("")
  console.log(qty)

  useEffect(() => {
    const ingrArray = ingr.split(/(\s+)/).filter(e => String(e).trim())
  //.split(/^\d+$/)
  const array = ingrArray.reduce(
      (arrays, value) => (
        isFinite(value)
          ? arrays.push([value])
          : arrays[arrays.length - 1].push(value),
          arrays
      ),
      []
    ) 

        
    setUnit(ingrArray[1])
    setFood(ingrArray[2])
     
  }, [submit])

  return (
    <div>

      <form
        onSubmit = {e => {
          e.preventDefault()
          axios.get(`https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${encodeURIComponent(ingr)}`)
               .then(res => {
                console.log(res.data)
                setCalories(res.data.calories)
          })
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
      
      <Chart 
        qty = {qty}
        unit = {unit}
        food = {food}
        calories = {calories}
      />

    </div>
  )

}

export default App;
