import React from 'react'
import "../_dist/ProjectFigure.css"

interface ProjectFigureProps extends React.HTMLAttributes<HTMLImageElement> {
    id?: string;
    imgurl:string,
    imgtitle:string
    
  }

const ProjectFigure = ({...props}: ProjectFigureProps) => {
  return (
    <figure {...props} className={`project-figure-container ${props.className?props.className:""}`}>
        <img src={props.imgurl} alt={props.imgtitle} />
    </figure>
  )
}

export default ProjectFigure