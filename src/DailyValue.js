import React from 'react'
import styled from 'styled-components'

const NutritionContainer = styled.div ` 
    max-width: 500px;
    width: 40%;
    margin-top: 50px;
`
const NutritionGrid = styled.div `
    display: grid;
    grid-template-columns: auto 50px;
    grid-template-rows: [row1-start] 40px [row1-end] 50px [row2-end] repeat(13, 25px);
    align-items: center;
    
`

const DailyValueTittle = styled.p `
    text-align: center;
`

export default function DailyValue({calories, totalFat, dailyTotalFat, saturatedFat, dailySaturatedFat, transFat, cholesterol, dailyCholesterol, sodium, dailySodium, carbohydrate, dailyCarb, dietaryFiber, dailyFiber, totalSugar, protein, dailyProtein, vitaminD, dailyVitaminD, calcium, dailyCalcium, iron, dailyIron, potassium, dailyPotassium}) {
    return (
        <NutritionContainer>
            
            <DailyValueTittle style={{fontSize: "3em", fontWeight: "600"}}>
                Daily Value
            </DailyValueTittle>
                
               
            <NutritionGrid>

                <span style={{fontSize: "2em"}}><b>Calories</b></span>
                <span>{calories}</span>

                <div></div>
                <span style={{fontSize: "0.8em"}}><b>% Daily Value</b></span>

                <span><b>Total Fat</b> &nbsp; {totalFat}g</span>
                <span>{dailyTotalFat}%</span>
                    
                <span><b>Saturated Fat</b> &nbsp; {saturatedFat}g</span>
                <span>{dailySaturatedFat}%</span>
                   
                <span><b>Trans Fat</b> &nbsp; {transFat}g</span>
                <span>3%</span>
            
                <span><b>Cholesterol</b> &nbsp; {cholesterol}mg</span>
                <span>{dailyCholesterol} %</span>
             
                <span><b>Sodium</b> &nbsp; {sodium}mg</span>
                <span>{dailySodium}%</span>
                
                <span><b>Total Carbohydrate</b> &nbsp; {carbohydrate}g</span>
                <span>{dailyCarb}%</span>
               
                <span><b>Dietary Fiber</b> &nbsp; {dietaryFiber}g</span>
                <span>{dailyFiber}%</span>
                
                <span><b>Total Sugars</b> &nbsp; {totalSugar}g</span>                
                <div></div>
               
                <span><b>Protein</b> &nbsp; {protein}g</span>
                <span>{dailyProtein}%</span>
              
                <span><b>Vitamin D</b> &nbsp; {vitaminD}µg</span>
                <span>{dailyVitaminD}%</span>
              
                <span><b>Calcium</b> &nbsp; {calcium}mg</span>
                <span>{dailyCalcium}%</span>
               
                <span><b>Iron</b> &nbsp; {iron}mg</span>
                <span>{dailyIron}%</span>
             
                <span><b>Potassium</b> &nbsp; {potassium}mg</span>
                <span>{dailyPotassium}%</span>
            </NutritionGrid>

                <center><p style={{fontSize: "0.8em", marginTop: "50px"}}>Percent Daily Values are based on a 200 calorie diet</p></center>
                
        </NutritionContainer>
    )
}
