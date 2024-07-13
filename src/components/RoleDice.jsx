import React, { useState } from 'react'
import styled from 'styled-components'

export const RoleDice = ({currentDice, roleDice}) => {

  return (
    <DiceContainer>
        <div className='dice' onClick={ roleDice}>
            <img src={`/images/dice/dice_${currentDice}.png`}alt="dice 1" />   
        </div>

        <p>Click on Dice to roll</p> 
        
        
        
    </DiceContainer>
  )
}


const DiceContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p{
        font-size: 24px;
    }
    .dice{
        cursor: pointer;
    }

`;