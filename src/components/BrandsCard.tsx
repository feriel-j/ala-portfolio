import React from 'react'
import "../_dist/BrandsCard.css"

interface BrandsCardProps extends React.HTMLAttributes<HTMLDivElement> {
    imageurl: string;
    title:string;
  }
  

const BrandsCard = ({...props}: BrandsCardProps) => {
  return (
    <img {...props} className={`brand-card-container ${props.className?props.className:""}`} src={props.imageurl} alt="title" />
  )
}

export default BrandsCard