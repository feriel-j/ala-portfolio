import React from 'react'
import ArrowDownIcon from './icons/ArrowDownIcon';
import "../_dist/ContactButton.css"

interface ContactButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
 id?:string ;
 icon:React.ReactNode;
 linkurl:string

}

const ContactButton = ({...props}: ContactButtonProps) => {
  return (
    <button {...props} className={`button-contact-container ${props.className?props.className:""}`} >
        <a href={props.linkurl} target="_blank" rel="noreferrer">
       <div className="button-content">
        {props.icon}
        {props.children}
       </div>
       <ArrowDownIcon className='arrow-icon'/>
       </a>
    </button>
  )
}

export default ContactButton