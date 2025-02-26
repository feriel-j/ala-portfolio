import React from "react";
import "../_dist/ProjectCard.css";

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageurl: string;
  title: string;
}

const ProjectCard = ({ ...props }: ProjectCardProps) => {
  return (
    <div
      {...props}
      className={`project-card-container ${
        props.className ? props.className : ""
      }`} onClick={props.onClick}>
        <img src={props.imageurl} alt={props.title} />
      
      <footer>
        <h1>{props.title}</h1>
        <h3>Webdesign</h3>
      </footer>
    </div>
  );
};

export default ProjectCard;
