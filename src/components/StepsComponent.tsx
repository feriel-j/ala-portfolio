import React from "react";
import "../_dist/StepsComponent.css";
import VerticalDivider from "./VerticalDivider";
import StepCercle from "./StepCercle";
import ArrowDownIcon from "./icons/ArrowDownIcon";


interface StepsComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
}
const StepsComponent = ({...props}:StepsComponentProps) => {
  return (
    <div {...props} className="steps-container">
    <div className="top-part">
      <StepCercle>
        <ArrowDownIcon/>
      </StepCercle>
      <VerticalDivider/>
    </div>
    {props.children}
  </div>
  );
};

export default StepsComponent;
