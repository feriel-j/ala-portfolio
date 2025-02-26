import React from "react";
import "../_dist/TestimonialCard.css";

interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  title: string;
  image: string;
  writer: string;
  position: string;
  icon?:React.ReactNode;
}

const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <div {...props} className="testimonial-card-container">
      {props.icon}
      <h1>{props.title}</h1>
      <p>{props.children}</p>
      <footer>
        <figure><img src={props.image} alt="writer" /></figure>
        <div className="writer-description">
          <h3>{props.writer}</h3>
          <h4>{props.position}</h4>
        </div>
      </footer>
    </div>
  );
};

export default TestimonialCard;
