import React from 'react'
import styled from 'styled-components'

export const Rule = () => {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <div className='text'></div>
        <p>select any number</p>
        <p>Click on dice image</p>
        <p>after click on dice if selected number is equal to dice number you will get same point as dice {""}</p>
        <p>if you get wrong guess then 2 point will be deducted </p>
    </RulesContainer>

  )
}

const RulesContainer = styled.div `
    max-width: 800px;
    padding: 20px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 10px;

    background-color: #fbf1f1;
    padding: 20;
    h2{
        font-size: 24px;
    }
    .text{
        margin-top: 24px;
    }

`;