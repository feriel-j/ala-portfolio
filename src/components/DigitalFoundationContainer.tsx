import React from "react";

import "../_dist/DigitalFoundationContainer.css";

interface DigitalFoundationContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  id?:string
}

const DigitalFoundationContainer = ({
  ...props
}: DigitalFoundationContainerProps) => {
  return (
    <section
      {...props}
      className={`digital-foundation-container ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </section>
  );
};

export default DigitalFoundationContainer;
