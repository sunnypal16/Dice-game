import styled from "styled-components"
import { Button } from "../styled/Button"

import React from 'react'

export const StartGame = ({toggle}) => {
  return (
  <>
    <Container>
        <div>
            <img src="/images/dices.png" alt="" />
        </div>

    <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>start</Button>
    </div>
    </Container>
    </>
  )

}

const Container = styled.div`
    max-width : 1180px;
    display:flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;


    .content {
    h1{
        font-size: 96px;
        white-space: nowrap;
    }
    Button{
        font-size: 20px;
        font-weight: 800;
    }
}
`


