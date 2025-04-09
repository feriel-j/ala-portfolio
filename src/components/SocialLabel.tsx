import React, { HTMLProps } from 'react'
import StepCercle from './StepCercle'
import "../_dist/SocialLabel.css"

interface SocialLabelProps extends HTMLProps<HTMLDivElement> {
    icon:React.ReactNode,
   
  }

const SocialLabel = ({ className, icon, children, ...rest }: SocialLabelProps) => {
  return (
    <div {...rest} className={`social-label-container ${className?className:""}`}>
        <StepCercle className='cercle-social'>{icon}</StepCercle>
        <label >{children}</label>
    </div>
  )
}

export default SocialLabel