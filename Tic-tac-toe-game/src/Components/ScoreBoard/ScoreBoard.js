import React from 'react'
import style from './ScoreB.module.css'

const ScoreBoard = ({XScore,OScore}) => {
  return (
    <div className={style.scoreboard}>
        <span className={style.x_score}>X -{XScore}</span>
        <span className={style.o_score}>o -{OScore}</span>
    </div>
  )
}

export default ScoreBoard