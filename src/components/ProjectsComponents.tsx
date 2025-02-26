import React, { forwardRef } from "react";
import "../_dist/ProjectsComponents.css";
// import ArrowDownIcon from "./icons/ArrowDownIcon";
// import StepCercle from "./StepCercle";

interface ProjectComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  title:string
}
const ProjectsComponents =forwardRef<HTMLElement, ProjectComponentProps>((props,ref) => {
  return (
    <section {...props} className={`projects-container ${props.className?props.className:""}`} ref={ref} >
      <header>
        <h1>{props.title}</h1>
        {/* <button>
          <StepCercle><ArrowDownIcon /></StepCercle>
          
          See all
        </button> */}
      </header>
      <div className="projects-content">
       {props.children}
      </div>
    </section>
  );
});
ProjectsComponents.displayName = "ProjectsComponents";
export default ProjectsComponents;
