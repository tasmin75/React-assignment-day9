import React, { useState } from 'react';
import Board from './Components/Board';
import './App.css';
import ScoreBoard from './Components/ScoreBoard/ScoreBoard';

function App() {
  const [board, setBoard] =useState(Array(9).fill())
  const [player,setPlayer]=useState(true)
  const [XScore,setXScore]=useState(0)
  const [OScore,setOScore]=useState(0)

  const [gameOver,setGameOver]=useState(false)

    const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ]

  const handleClick = (boxID) => {
    
    const updateBoard=board.map((value,id)=>{
      if(id===boxID){
       return( player==true ? 'X' : 'O')
      }
      return value
    });
    setBoard(updateBoard)
    setPlayer(!player)
   const winner=checkWinner(updateBoard)
   if(winner==='X'){
     setXScore(XScore+1)
     setGameOver(true)
   }
    if(winner==='O'){
      setOScore(OScore+1)
      setGameOver(true)
    }
  };

  const checkWinner = (updateBoard) => {
    
    for(let i=0;i<WINNING_COMBINATIONS.length;i++){
      const [x,y,z]=WINNING_COMBINATIONS[i]
      if(updateBoard[x] && 
        updateBoard[x]===updateBoard[y]&&
        updateBoard[y]===updateBoard[z]
        ){
        console.log('winner')
        return updateBoard[x];
      }
    }
  }

  const reset=()=>{
    setGameOver(false)
    setBoard(Array(9).fill())
  }
  const restartGame=()=>{
    setXScore(0)
    setOScore(0)
    setGameOver(false)
    setBoard(Array(9).fill())
  }

  return (
   <div className='App'>
      <ScoreBoard  XScore={XScore} OScore={OScore}/>
      <Board 
        board={board} 
        onClick={gameOver==true? reset:handleClick}/>

      <button className='btn' onClick={restartGame}>Restart Game</button>
   </div>
  );
}

export default App;
