import React from 'react'
import styled from 'styled-components'

const NutritionContainer = styled.div ` 
    border-style: solid;
    max-width: 500px;
    width: 40%;
`
const NutritionGrid = styled.div `
    display: grid;
    grid-template-columns: auto 50px;
`

const DailyValueTittle = styled.p `
    text-align: center;
`

export default function DailyValue({calories, totalFat, dailyTotalFat, saturatedFat, dailySaturatedFat, transFat, cholesterol, dailyCholesterol, sodium, dailySodium, carbohydrate, dailyCarb, dietaryFiber, dailyFiber, totalSugar, protein, dailyProtein, vitaminD, dailyVitaminD, calcium, dailyCalcium, iron, dailyIron, potassium, dailyPotassium}) {
    return (
        <NutritionContainer>
            
            <DailyValueTittle>
                Daily Value
            </DailyValueTittle>
                
               
            <NutritionGrid>

                <span><b>Calories</b></span>
                <span>{calories}</span>

                <div></div>
                <span>% Daily Value</span>

                <span><b>Total Fat</b> {totalFat}g</span>
                <span>{dailyTotalFat}%</span>
                    
                <span><b>Saturated Fat</b> {saturatedFat}g</span>
                <span>{dailySaturatedFat}%</span>
                   
                <span><b>Trans Fat</b> {transFat}g</span>
                <span>3%</span>
            
                <span><b>Cholesterol</b> {cholesterol}mg</span>
                <span>{dailyCholesterol} %</span>
             
                <span><b>Sodium</b> {sodium}mg</span>
                <span>{dailySodium}%</span>
                
                <span><b>Total Carbohydrate</b> {carbohydrate}g</span>
                <span>{dailyCarb}%</span>
               
                <span><b>Dietary Fiber</b> {dietaryFiber}g</span>
                <span>{dailyFiber}%</span>
                
                <span><b>Total Sugars</b> {totalSugar}g</span>                
                <div></div>
               
                <span><b>Protein</b> {protein}g</span>
                <span>{dailyProtein}%</span>
              
                <span><b>Vitamin D</b> {vitaminD}µg</span>
                <span>{dailyVitaminD}%</span>
              
                <span><b>Calcium</b> {calcium}mg</span>
                <span>{dailyCalcium}%</span>
               
                <span><b>Iron</b> {iron}mg</span>
                <span>{dailyIron}%</span>
             
                <span><b>Potassium</b> {potassium}mg</span>
                <span>{dailyPotassium}%</span>
            </NutritionGrid>

                <p>Percent Daily Values are based on a 200 calorie diet</p>
                
        </NutritionContainer>
    )
}
