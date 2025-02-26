import React from 'react'
import "../../_dist/Input.css"

interface InputProps extends React.AllHTMLAttributes<HTMLInputElement> {
    id?: string;
  }
const Input = ({...props}: InputProps) => {
  return (

      <input
        {...props}
        className={
          props.className
            ? `contact-input-container ${props.className}`
            : "contact-input-container"
        }
        type={props.type}
        placeholder={props.placeholder}
      />
    )
}

export default Input