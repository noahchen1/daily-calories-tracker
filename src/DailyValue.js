import React from 'react'
import styled from 'styled-components'

const NutritionContainer = styled.div `
    width: 40%;  
`
const NutritionGrid = styled.div `
    display: grid;
    grid-template-columns: auto 50px;
`

export default function DailyValue({totalFat, saturatedFat, transFat, cholesterol, sodium, carbohydrate, dietaryFiber, totalSugar, protein, vitaminD, calcium, iron, potassium}) {
    return (
        <NutritionContainer>
            <p>Daily Value</p>
            
                
                <span>Calories</span>
                <span>1000</span>
               
           
                <p>% Daily Value</p>
               
            <NutritionGrid>   
                <span>Total Fat {totalFat}</span>
                <span>10%</span>
                    
                <span>Saturated Fat {saturatedFat}</span>
                <span>28%</span>
                   
                <span>Trans Fat {transFat}</span>
                <span>3%</span>
            
                <span>Cholesterol {cholesterol}</span>
                <span>0 %</span>
             
                <span>Sodium {sodium}</span>
                <span>3%</span>
                
                <span>Total Carbohydrate {carbohydrate}</span>
                <span>10%</span>
               
                <span>Dietary Fiber {dietaryFiber}</span>
                <span>20%</span>
                
                <span>Total Sugars {totalSugar}</span>                
                <span>Includes Added Sugars</span>
               
                <span>Protein {protein}</span>
                <span>30%</span>
              
                <span>Vitamin D {vitaminD}</span>
                <span>30%</span>
              
                <span>Calcium {calcium}</span>
                <span>30%</span>
               
                <span>Iron {iron}</span>
                <span>30%</span>
             
                <span>Potassium {potassium}</span>
                <span>30%</span>
            </NutritionGrid>

                <p>Percent Daily Values are based on a 200 calorie diet</p>
                

        </NutritionContainer>
    )
}
