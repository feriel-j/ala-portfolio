import React from 'react'
import "../_dist/SimpleCard.css"

interface SimpleCardProps extends React.HTMLAttributes<HTMLDivElement> {
   
    cardtitle:string
  }

const SimpleCard = ({...props}: SimpleCardProps) => {
  return (
    <div {...props} className={`simple-card-container ${props.className?props.className:""}`} >
        <h1>{props.cardtitle}</h1>
        {props.children}</div>
  )
}

export default SimpleCard