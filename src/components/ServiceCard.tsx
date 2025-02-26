import React from "react";
import "../_dist/ServiceCard.css"

interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  icon: React.ReactNode;
  header: string;
}

const ServiceCard = ({ ...props }: ServiceCardProps) => {
  return (
    <div
      {...props}
      className={`service-card-container ${
        props.className ? props.className : ""
      }`}>
      <header className="header-container">
        {props.icon}
        <h1>{props.header}</h1>
      </header>
      <p>{props.children}</p>
    </div>
  );
};

export default ServiceCard;
