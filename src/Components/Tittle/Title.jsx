import React from 'react'
import './Title.css'
const Title = ({SubTitle,Titles}) => {
  return (
    <div className='title'>
      <p>{SubTitle}</p>
      <h2>{Titles}</h2>
    </div>
  )
}

export default Title
