import React, { HTMLProps } from 'react'
import "../_dist/StepCercle.css"

interface StepCercleProps extends HTMLProps<HTMLDivElement> {
    id?: string;
  }
  

const StepCercle = ({...props}: StepCercleProps) => {
  return (
    <div {...props} className={`step-cercle-container ${props.className?props.className: ""}`} >
        {props.children}
    </div>
  )
}

export default StepCercle