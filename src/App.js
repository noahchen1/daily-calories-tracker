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
  const [searchResult, setSearchResult] = useState([])
  const [showChartTitle, setShowChartTitle] = useState(false)

  // Initializing arrays for nutrients //
  const fat = []
  const saturatedFat = []
  const polyunsaturated = []
  const monounsaturated = []
  const chloesterol = []
  const sodium = []
  const carb = []
  const fiber = []
  const sugar = []
  const protein = []
  const vitaminD = []
  const calcium = []
  const iron = []
  const potassium = []

  // Initializing arrays for daily nutrients in % //
  const dailyFat = []
  const dailySaturatedFat = []
  const dailyChloesterol = []
  const dailyCalcium = []
  const dailySodium = []
  const dailyCarb = []
  const dailyFiber = []
  const dailyProtein = []
  const dailyVitaminD = []
  const dailyIron = []
  const dailyPotassium = []

  // Initializing constants for totaled nutrients // 

  const [totalFat, setTotalFat] = useState("")
  const [totalSaturatedFat, setTotalSaturatedFat] = useState("")
  const [totalPolyunsaturated, setTotalPolyunsaturated] = useState("")
  const [totalMonounsaturated, setTotalMonounsaturated] = useState("")
  const [totalTransFat, setTotalTransFat] = useState("")
  const [totalChloesterol, setTotalChloesterol] = useState("")
  const [totalSodium, setTotalSodium] = useState("")
  const [totalCarb, setTotalCarb] = useState("")
  const [totalFiber, setTotalFiber] = useState("")
  const [totalSugar, setTotalSugar] = useState("")
  const [totalProtein, setTotalProtein] = useState("")
  const [totalVitaminD, setTotalVitaminD] = useState("")
  const [totalCalcium, setTotalCalcium] = useState("")
  const [totalIron, setTotalIron] = useState("")
  const [totalPotassium, setTotalPotassium] = useState("")



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

      return (await Promise.all(callPromises)).map(res => res.data)
    }
    

    nutrition().then(data => {

      const dataArray = data

      //console.log(dataArray)

      for(var i=0; i < searchArray.length; i++) {
        
        searchArray[i].push(dataArray[i].calories)

        fat.push(dataArray[i].totalNutrients.FAT.quantity)
        saturatedFat.push(dataArray[i].totalNutrients.FASAT.quantity)
        monounsaturated.push(dataArray[i].totalNutrients.FAMS.quantity)
        polyunsaturated.push(dataArray[i].totalNutrients.FAPU.quantity)
        chloesterol.push(dataArray[i].totalNutrients.CHOLE.quantity)
        sodium.push(dataArray[i].totalNutrients.NA.quantity)
        carb.push(dataArray[i].totalNutrients.CHOCDF.quantity)
        fiber.push(dataArray[i].totalNutrients.FIBTG.quantity)
        sugar.push(dataArray[i].totalNutrients.SUGAR.quantity)
        protein.push(dataArray[i].totalNutrients.PROCNT.quantity)
        calcium.push(dataArray[i].totalNutrients.CA.quantity)
        iron.push(dataArray[i].totalNutrients.FE.quantity)
        vitaminD.push(dataArray[i].totalNutrients.VITD.quantity)
        potassium.push(dataArray[i].totalNutrients.K.quantity)

        dailyFat.push(dataArray[i].totalDaily.FAT.quantity)
        dailySaturatedFat.push(dataArray[i].totalDaily.FASAT.quantity)
        dailyChloesterol.push(dataArray[i].totalDaily.CHOLE.quantity)
        dailySodium.push(dataArray[i].totalDaily.NA.quantity)
        dailyCarb.push(dataArray[i].totalDaily.CHOCDF.quantity)
        dailyFiber.push(dataArray[i].totalDaily.FIBTG.quantity)
        dailyProtein.push(dataArray[i].totalDaily.PROCNT.quantity)
        dailyCalcium.push(dataArray[i].totalDaily.CA.quantity)
        dailyIron.push(dataArray[i].totalDaily.FE.quantity)
        dailyVitaminD.push(dataArray[i].totalDaily.VITD.quantity)
        dailyPotassium.push(dataArray[i].totalDaily.K.quantity)

      }
      setSearchResult(searchArray)
      setTotalFat(fat.reduce((a, b) => a + b, 0))
      setTotalSaturatedFat(saturatedFat.reduce((a, b) => a + b, 0))
      setTotalPolyunsaturated(polyunsaturated.reduce((a, b) => a + b, 0))
      setTotalMonounsaturated(monounsaturated.reduce((a, b) => a + b, 0))
      setTotalTransFat(totalMonounsaturated + totalPolyunsaturated)
      setTotalChloesterol(chloesterol.reduce((a, b) => a + b, 0))
      setTotalSodium(sodium.reduce((a, b) => a + b, 0))
      setTotalCarb(carb.reduce((a, b) => a + b, 0))
      setTotalFiber(fiber.reduce((a, b) => a + b, 0))
      setTotalSugar(sugar.reduce((a, b) => a + b, 0))
      setTotalProtein(protein.reduce((a, b) => a + b, 0))
      setTotalVitaminD(vitaminD.reduce((a, b) => a + b, 0))
      setTotalCalcium(calcium.reduce((a, b) => a + b, 0))
      setTotalIron(iron.reduce((a, b) => a + b, 0))
      setTotalPotassium(potassium.reduce((a, b) => a + b, 0))
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
