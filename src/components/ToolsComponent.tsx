import React from 'react'
import "../_dist/ToolsComponent.css"
const ToolsComponent = () => {
  return (
    <section className='Tools-container'>
        <h1>tools used</h1>
        <div className="tools-content">
            <figure> <img src="./images/miro.svg" alt="miro" /></figure>
           <figure><img src="./images/figma.svg" alt="figma" /></figure>
           <figure> <img src="./images/adobe_illustrator.svg" alt="adobe" /></figure>
        
        </div>
    </section>
  )
}

export default ToolsComponent
