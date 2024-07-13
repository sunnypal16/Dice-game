import { useState } from "react";
import { StartGame } from "./components/StartGame";
import { GamePlay } from "./components/GamePlay";

function App() {

  const [isGameStarted, setIsGameStarted]= useState(false)

  const togglegGamePlay = () =>{
    setIsGameStarted((prev) => !prev); 
  }
  
  return (
    <>
    { 
      isGameStarted ? <GamePlay/> : <StartGame toggle={togglegGamePlay}
      />

    }
    </>
  );
}

export default App;
