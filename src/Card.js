import React from 'react'
import Stars from './Starts'
export default function Card({info}) {
  return (
  
    <div className="listoffice">
      <a href ="#" className="box-office">
      <img src={info.image} />
      <h6>{info.title}</h6>
      <p>{info.desc}</p>
      <div className="run stars"> <Stars count={info.rat}/></div>
      </a>
      
    </div>
    
  )
}
