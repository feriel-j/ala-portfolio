import React, { HTMLProps } from 'react'
import StepCercle from './StepCercle'
import "../_dist/SocialLabel.css"

interface SocialLabelProps extends HTMLProps<HTMLDivElement> {
    icon:React.ReactNode,
   
  }

const SocialLabel = ({...props}: SocialLabelProps) => {
  return (
    <div {...props} className={`social-label-container ${props.className?props.className:""}`}>
        <StepCercle className='cercle-social'>{props.icon}</StepCercle>
        <label >{props.children}</label>
    </div>
  )
}

export default SocialLabel