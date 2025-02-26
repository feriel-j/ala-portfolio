import React from "react";
import "../_dist/StepsCard.css"

interface StepsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  duration: string;
  title: string;
  extra?: string;
  description: string;
  children: React.ReactNode;
}

const StepsCard = ({ children, ...props }: StepsCardProps) => {
  return (
    <div
      {...props}
      className={`steps-card-container ${
        props.className ? props.className : ""
      }`}>
      <button>{props.duration}</button>
      <header><h2>{props.extra}</h2>
      <h1>{props.title}</h1></header>
      
      <p>{props.description}</p>
      {children}
    </div>
  );
};

export default StepsCard;
