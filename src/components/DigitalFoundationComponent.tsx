import React from "react";
import "../_dist/DigitalFoundationComponent.css";

interface DigitalFoundationComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  projectname: string;
  extratitle?: string;
}

const DigitalFoundationComponent = ({
  ...props
}: DigitalFoundationComponentProps) => {
  return (
    <section
      {...props}
      className={`digital-fondation-container ${
        props.className ? props.className : ""
      }`}>
      <div className="titles-section">
        <h4>About</h4>
        <h2>
          Building a Digital Foundation – Website Design for {props.projectname}
          . <br /> {`${props.extratitle && props.extratitle}.`}
        </h2>
        {props.projectname === "LuxBlack" && (
          <figure>
            {" "}
            <img src="./images/luxblack-mobile.svg" alt="luxblack mobile" />
          </figure>
        )}
      </div>
      <div className="cards-container">{props.children}</div>
    </section>
  );
};

export default DigitalFoundationComponent;
