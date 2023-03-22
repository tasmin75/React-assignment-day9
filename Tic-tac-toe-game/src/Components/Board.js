import React from 'react'
import style from './Board.module.css'
import Box from './Box/Box'

const Board = ({board,onClick,id}) => {
  return (
    <div className={style.board}>

        {board.map((item,id)=>(
            <Box id={id}   value={item} onClick={()=>onClick(id)}/>
        ))

        }
        
    </div>
  )
}

export default Board