import axios from 'axios'
import Chart from './Chart'
import ChartTitle from './ChartTitle'
import DailyValue from './DailyValue'
import SearchField from './SearchField'
import AnalyzeButton from './AnalyzeButton'
import { useState, useEffect } from 'react'


function App() {

  const APP_ID = '6d1f2104';
  const APP_KEY = '4c7c8e6fa9cac166f386697190912099';
  const [ingr, setIngr] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const [showChartTitle, setShowChartTitle] = useState(false)
  const [showNutrition, setShowNutrition] = useState(false)

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
  const dailyCalories = []

  // Initializing useState hooks for totaled nutrients // 

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
  const [calories, setCalories] = useState("")

  // Initializing useState hooks for totaled nutrients in %//

  const [dailyTotalFat, setDailyTotalFat] = useState("")
  const [dailyTotalSaturatedFat, setDailyTotalSaturatedFat] = useState("")
  const [dailyTotalChloesterol, setDailyTotalChloesterol] = useState("")
  const [dailyTotalSodium, setDailyTotalSodium] = useState("")
  const [dailyTotalCarb, setDailyTotalCarb] = useState("")
  const [dailyTotalFiber, setDailyTotalFiber] = useState("")
  const [dailyTotalProtein, setDailyTotalProtein] = useState("")
  const [dailyTotalVitaminD, setDailyTotalVitaminD] = useState("")
  const [dailyTotalCalcium, setDailyTotalCalcium] = useState("")
  const [dailyTotalIron, setDailyTotalIron] = useState("")
  const [dailyTotalPotassium, setDailyTotalPotassium] = useState("")


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

      console.log(dataArray)

      for(var i=0; i < searchArray.length; i++) {
        
        searchArray[i].push(dataArray[i].calories)

        dailyCalories.push(dataArray[i].calories)
        fat.push(dataArray[i].totalNutrients.FAT.quantity)
        saturatedFat.push(dataArray[i].totalNutrients.FASAT.quantity)
        monounsaturated.push(dataArray[i].totalNutrients.FAMS.quantity)
        polyunsaturated.push(dataArray[i].totalNutrients.FAPU.quantity)
        chloesterol.push(dataArray[i].totalNutrients.CHOLE.quantity)
        sodium.push(dataArray[i].totalNutrients.NA.quantity)
        carb.push(dataArray[i].totalNutrients.CHOCDF.quantity)
        fiber.push(dataArray[i].totalNutrients.FIBTG?.quantity ?? 0)
        //sugar.push(dataArray[i].totalNutrients.SUGAR.quantity)
        sugar.push(dataArray[i].totalNutrients.SUGAR?.quantity ?? 0)
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
        dailyFiber.push(dataArray[i].totalDaily.FIBTG?.quantity ?? 0)
        dailyProtein.push(dataArray[i].totalDaily.PROCNT.quantity)
        dailyCalcium.push(dataArray[i].totalDaily.CA.quantity)
        dailyIron.push(dataArray[i].totalDaily.FE.quantity)
        dailyVitaminD.push(dataArray[i].totalDaily.VITD.quantity)
        dailyPotassium.push(dataArray[i].totalDaily.K.quantity)

      }
      setSearchResult(searchArray)

      //Summing all elements in nutrient arrays//

      setTotalFat(fat.reduce((a, b) => a + b, 0).toFixed(1))
      setTotalSaturatedFat(saturatedFat.reduce((a, b) => a + b, 0).toFixed(1))
      setTotalPolyunsaturated(polyunsaturated.reduce((a, b) => a + b, 0).toFixed(1))
      setTotalMonounsaturated(monounsaturated.reduce((a, b) => a + b, 0).toFixed(1))
      setTotalTransFat(totalMonounsaturated + totalPolyunsaturated)
      setTotalChloesterol(chloesterol.reduce((a, b) => a + b, 0).toFixed(1))
      setTotalSodium(sodium.reduce((a, b) => a + b, 0).toFixed(1))
      setTotalCarb(carb.reduce((a, b) => a + b, 0).toFixed(1))
      setTotalFiber(fiber.reduce((a, b) => a + b, 0).toFixed(1))
      setTotalSugar(sugar.reduce((a, b) => a + b, 0).toFixed(1))
      setTotalProtein(protein.reduce((a, b) => a + b, 0).toFixed(1))
      setTotalVitaminD(vitaminD.reduce((a, b) => a + b, 0).toFixed(1))
      setTotalCalcium(calcium.reduce((a, b) => a + b, 0).toFixed(1))
      setTotalIron(iron.reduce((a, b) => a + b, 0).toFixed(1))
      setTotalPotassium(potassium.reduce((a, b) => a + b, 0).toFixed(1))
      setCalories(dailyCalories.reduce((a, b) => a + b, 0))

      //Summing all elements in nutrient arrays in %//
      setDailyTotalFat(dailyFat.reduce((a, b) => a + b, 0).toFixed(0))
      setDailyTotalSaturatedFat(dailySaturatedFat.reduce((a, b) => a + b, 0).toFixed(0))
      setDailyTotalChloesterol(dailyChloesterol.reduce((a, b) => a + b, 0).toFixed(0))
      setDailyTotalSodium(dailySodium.reduce((a, b) => a + b, 0).toFixed(0))
      setDailyTotalCarb(dailyCarb.reduce((a, b) => a + b, 0).toFixed(0))
      setDailyTotalFiber(dailyFiber.reduce((a, b) => a + b, 0).toFixed(0))
      setDailyTotalProtein(dailyProtein.reduce((a, b) => a + b, 0).toFixed(0))
      setDailyTotalVitaminD(dailyVitaminD.reduce((a, b) => a + b, 0).toFixed(0))
      setDailyTotalCalcium(dailyCalcium.reduce((a, b) => a + b, 0).toFixed(0))
      setDailyTotalIron(dailyIron.reduce((a, b) => a + b, 0).toFixed(0))
      setDailyTotalPotassium(dailyPotassium.reduce((a, b) => a + b, 0).toFixed(0))

    })

  }

  
  return (
    <div>
     
      <form
        onSubmit = {e => {
          e.preventDefault()
          setShowChartTitle(true)
          setShowNutrition(true)
        }}
      >

        <label>Search for food</label>

        
        <SearchField 
            ingr = {ingr}
            onChange = {e => setIngr(e.target.value)}                
        /> 
       
       <div 
        style={{
          display: "flex", 
          justifyContent: "center",
          margin: "20px auto"
        }}
        >
          <AnalyzeButton 
              onClick = {handleSubmit}
            />
       </div>

        

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

        {showNutrition ? 
          <div 
            style={{
              display: 'flex', 
              justifyContent: 'center'
              }}>

            <DailyValue
              calories = {calories} 
              totalFat = {totalFat}
              saturatedFat = {totalSaturatedFat}
              transFat = {totalTransFat}
              cholesterol = {totalChloesterol}
              sodium = {totalSodium}
              carbohydrate = {totalCarb}
              dietaryFiber = {totalFiber ? 0 : totalFiber}
              totalSugar = {totalSugar}
              protein = {totalProtein}
              vitaminD = {totalVitaminD}
              calcium = {totalCalcium}
              iron = {totalIron}
              potassium = {totalPotassium}

              dailyTotalFat = {dailyTotalFat}
              dailySaturatedFat = {dailyTotalSaturatedFat}
              dailyCholesterol = {dailyTotalChloesterol}
              dailySodium = {dailyTotalSodium}
              dailyCarb = {dailyTotalCarb}
              dailyFiber = {dailyTotalFiber}
              dailyProtein = {dailyTotalProtein}
              dailyVitaminD = {dailyTotalVitaminD}
              dailyCalcium = {dailyTotalCalcium}
              dailyIron = {dailyTotalIron}
              dailyPotassium = {dailyTotalPotassium}
            />
          </div>

          : null}
    </div>
  )

}

export default App;
