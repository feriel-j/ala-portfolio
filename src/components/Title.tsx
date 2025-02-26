import React, { HTMLProps } from "react";
import "../_dist/Title.css";

interface HeadingProps extends HTMLProps<HTMLHeadingElement> {
  id?: string;
}

const Title = ({ ...props }: HeadingProps) => {
  return (
    <h1
      {...props}
      className={`title-container ${props.className ? props.className : ""}`}>
      {props.children}
    </h1>
  );
};

export default Title;
