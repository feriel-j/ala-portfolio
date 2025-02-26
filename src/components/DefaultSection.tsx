import React, { forwardRef } from 'react'
import Title from './Title';
import "../_dist/DefaultSection.css"

interface defaultSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    // id?: string;
    title:string
  }

const DefaultSection = forwardRef<HTMLElement, defaultSectionProps>( (props,ref) => {
  return (
    <section {...props} ref={ref} className='default-section'>
    <Title>{props.title}</Title>
    
    {props.children}
    
  </section>
  )
})
DefaultSection.displayName = "DefaultSection";
export default DefaultSection