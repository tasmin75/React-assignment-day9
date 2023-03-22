import React from 'react'
import style from './Box.module.css'

const Box = ({value,id,onClick}) => {
  return (
    <>
        <button 
        className={`${style.box} ${value==='X' ? style.x : style.o}`}
        key={id}
        onClick={onClick}
        >
          {value}
        </button>
        
    </>
    
    
  )
}

export default Box