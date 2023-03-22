import React from 'react'
import MyCard from './Components/MyCard'
import style from './UserCard.module.css'

const UserCard = () => {
  return (
   
        <div className={style.CardBoxes}>
            <MyCard/>
        </div>
  )
}

export default UserCard