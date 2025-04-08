import React, { useContext, useRef } from "react";
import "../../../_dist/UiComponent.css";

import ExecuteScrollComponent from "../../../utils/ExecuteScrollComponent";
import ProjectHeroCard from "../../../components/ProjectHeroCard";
import ProjectFigure from "../../../components/ProjectFigure";
import ToolsComponent from "../../../components/ToolsComponent";
import DigitalFoundationContainer from "../../../components/DigitalFoundationContainer";
import SimpleCard from "../../../components/SimpleCard";
import DigitalFoundationComponent from "../../../components/DigitalFoundationComponent";
import { refContext } from "../layouts/MainLayout";

const UxComponent = () => {
  const TopRef = useRef<HTMLElement>(null);
  const myTopRef = useContext(refContext);

  return (
    <section ref={TopRef} className="ui-component-container ">
      <ProjectHeroCard imgurl={"./images/luxBLACK.svg"} imgtitle={"luxblack"} />
      <DigitalFoundationContainer className="ux-page">
        <DigitalFoundationComponent
          className="ux-df-component"
          projectname={"LuxBlack"}
          extratitle="Web &Mobile">
          <SimpleCard cardtitle="Challenge">
            <p>
              The company wanted a website and a mobile app to make bookings
              faster and more efficient while catering to both tech-savvy users
              and those less comfortable with technology
            </p>
          </SimpleCard>
          <SimpleCard cardtitle="Goal">
            <p>
              The goal was to design a user-friendly web & mobile app for
              LuxBlack, a luxurious transportation company, to streamline the
              process of booking rides. The app needed to prioritize simplicity,
              efficiency, and accessibility for a wide range of users.
            </p>
          </SimpleCard>
          <SimpleCard cardtitle="Result">
            <p>
              Our team developed a custom website design that was not only
              visually stunning but also user-friendly. The client is thrilled
              with the final result and has received positive feedback from
              their potential customers.
            </p>
          </SimpleCard>
        </DigitalFoundationComponent>

        <div className="digital-process-container">
          <div className="left-section">
            <SimpleCard cardtitle="Research Process">
              <p>Approach:</p>
              <ul>
                <li>
                  Analyzed competitors' apps to identify strengths and
                  weaknesses.
                </li>
                <li>Created user personas based on finding</li>
                <li>frequent travelers, and working professionals.</li>
              </ul>
              <p>Key Insights:</p>
              <ul>
                <li>Users valued a quick, 3-step booking process.</li>
                <li>
                  Many wanted real-time ride tracking and clear pricing before
                  confirming.
                </li>
              </ul>
            </SimpleCard>
            <SimpleCard cardtitle="Ideation and Planning">
              <p>User Flow:</p>
              <p>Designed a straightforward 3-step booking process:</p>
              <ul>
                <li>Select a pick-up and drop-off location.</li>
                <li>View ride options and prices.</li>
                <li>Confirm booking and receive real-time updates.</li>
              </ul>
              <p>Wireframe Highlights:</p>
              <p>
                Created hi-fi wireframes focusing on simplicity and
                accessibility:
              </p>
              <ul>
                <li>Homepage with a “Embarquer” button.</li>
                <li>Real-time tracking page</li>
              </ul>
            </SimpleCard>
            <SimpleCard cardtitle="Design Execution">
              <p>Key Features:</p>
              <ul>
                <li>
                  Color Palette: Black and bright orangey-yellow tone shade for
                  gold.
                </li>
                <li>
                  Typography: Clean sans-serif font for readability, with larger
                  sizes for key actions.
                </li>
                <li>Icons: Universal symbols for navigation and actions.</li>
              </ul>
            </SimpleCard>
          </div>
          <figure>
            {" "}
            <img src="./images/luxblack-grid-1.svg" alt="bmes" />
          </figure>
        </div>
      </DigitalFoundationContainer>{" "}
      <ProjectFigure imgurl={"./images/laptop-2.svg"} imgtitle={"LUXBLACK"} />
      <DigitalFoundationComponent
        className="ux-df-component"
        projectname={"LuxBlack-new "}
        type="reflexion">
        <SimpleCard cardtitle="What Went Well">
          <ul>
            <li>Successfully designed a process that catered to diverse user needs.</li>
            <li>Effective collaboration with the client ensured the app aligned with their goals.</li>
          </ul>
        </SimpleCard>
        <SimpleCard cardtitle="Challenges">
          <ul>
            <li>Balancing simplicity with feature richness.</li>
            <li>Iterating designs to meet accessibility standards.</li>
          </ul>
        </SimpleCard>
        <SimpleCard cardtitle="What I’d Do Differently">
          <ul>
            <li>Conduct additional A/B testing for layout variations.</li>
            <li>Allocate more time for micro-interactions and animations.</li>
          </ul>
        </SimpleCard>
      </DigitalFoundationComponent>
      <img className="image-final" src="images/lux-final.svg" alt="luxblack" />
      <ToolsComponent />
      <ExecuteScrollComponent scrollRef={myTopRef} />
    </section>
  );
};

export default UxComponent;
