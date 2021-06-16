import React from 'react'
import styled from 'styled-components'

export default function DailyValue() {
    return (
        <div>
            <p>Daily Value</p>
            <div>
                <span>Calories</span>
                <span>1000</span>
                <div></div>
                <p>% Daily Value</p>
                <div>
                    <div>
                        <span>Total Fat</span>
                        <span>18.3g</span>
                        <span>10%</span>
                    </div>
                    <div>
                        <span>Saturated Fat</span>
                        <span>2g</span>
                        <span>10%</span>
                    </div>
                    <div>
                        <span>Trans Fat</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
