import React from 'react'
import "../_dist/ProjectHeroCard.css"

interface ProjectHeroCardProps extends React.HTMLAttributes<HTMLDivElement> {
    imgurl:string,
    imgtitle:string
    
  }
const ProjectHeroCard = ({...props}: ProjectHeroCardProps) => {
  return (
    <div {...props} className={`project-hero-card-container ${props.className?props.className:""}`} >
        <h1> {props.imgtitle}  </h1>
        <figure>
            <img src={props.imgurl} alt={props.imgtitle} />
        </figure>
    </div>
  )
}

export default ProjectHeroCard