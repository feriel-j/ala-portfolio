import React, { HTMLProps } from "react";
import "../_dist/BigTitles.css"

interface BigTitlesProps extends HTMLProps<HTMLTitleElement> {
  id?: string;
  extratitle?: string;
  secondary: string;
  terciary?:string;
  variant?:"footer"|"process"
}

const BigTitles = ({ ...props }: BigTitlesProps) => {
  return (
    <title {...props} className={`big-titles-container ${props.className?props.className:""}`} >
      <h4>{props.extratitle}</h4>
      <h1>{props.children} <br/> {props.variant==="footer"? null: "Design Process"}</h1>
      <h3>{props.secondary} <br/> {props.terciary}</h3>
    </title>
  );
};

export default BigTitles;
