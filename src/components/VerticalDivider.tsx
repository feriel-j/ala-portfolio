import React, { HTMLProps } from 'react'
import "../_dist/VerticalDivider.css"

interface VerticalDividerProps extends HTMLProps<HTMLDivElement> {
    id?: string;
  }
  
const VerticalDivider = ({...props}:VerticalDividerProps) => {
  return (
    <div {...props} className={`vertical-divider ${props.className?props.className:""}`} >
      
    </div>
  )
}

export default VerticalDivider
