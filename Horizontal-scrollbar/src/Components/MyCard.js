import React from 'react'
import UserData from '../UserData'
import style from './MyCard.module.css'
const MyCard = () => {
 
  return (
    <div className={style.container}>
      {UserData.map((item)=>{
        return(
          <div className={style.card}>
            <img src={item.img} alt="img" className={style.img}/>
            <h2>{item.name}</h2>
            <h4>{item.job}-<span>{item.role}</span></h4>
            <p>{item.exp} Exp.</p>
          </div>
        )
      })}
    </div>
  )
}

export default MyCard