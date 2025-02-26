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
        <DigitalFoundationComponent className="ux-df-component"
          projectname={"LuxBlack"}
          extratitle="Web &Mobile">
          <SimpleCard cardtitle="Challenge">
            <p>
              The company wanted a mobile app to make bookings faster and more
              efficient while catering to both tech-savvy users and those less
              comfortable with technology.
            </p>
          </SimpleCard>
          <SimpleCard cardtitle="Goal">
            <p>
              The goal was to design a user-friendly web & mobile app for
              LuxBlack, a transportation company, to streamline the process of
              booking rides. The app needed to prioritize simplicity,
              efficiency, and accessibility for a wide range of users.
            </p>
          </SimpleCard>
          <SimpleCard cardtitle="Result">
            <p>
              Our team developed a custom website design that was not only
              visually stunning but also user-friendly and optimized for search
              engines. The client's website now showcases their products and
              services in a professional and engaging manner, and has seen a
              significant increase in organic traffic and customer engagement.
              The client is thrilled with the final result and has received
              positive feedback from their customers.
            </p>
          </SimpleCard>
        </DigitalFoundationComponent>

        <div className="digital-process-container">
          <div className="left-section">
            <SimpleCard cardtitle="Research Process">
              <p>Methods:</p>
              <ul>
                <li>
                Conducted a competitor analysis of similar-sized construction companies to identify best practices.
                </li>
                <li>
                Interviewed 4 potential clients to understand what they look for on a construction company’s website.
                </li>
              </ul>
              <p>Key Insights:</p>
              <ul>
                <li>
                Users expect clear service descriptions and project portfolios.
                </li>
                <li>A simple and professional design builds trust.</li>
                <li>
                  Easy access to contact information is crucial for inquiries.
                </li>
              </ul>
            </SimpleCard>
            <SimpleCard cardtitle="Ideation and Planning">
              <p>Goals:</p>
              <ul>
                <li>
                  Create a modern, professional design that reflects the
                  company’s values.
                </li>
                <li>
                  Highlight key services, portfolio, and contact information
                  prominently.
                </li>
              </ul>
              <p>Wireframe Highlights:</p>
              <ul>
                <li>
                  Homepage: Hero section with a strong tagline, featured
                  services, and a CTA.
                </li>
                <li>About Page: Company mission, and values.</li>
                <li>
                  Portfolio Page: Showcase of completed projects with
                  high-quality images.
                </li>
                <li>
                  Contact Page: Simple form and clickable contact details
                  (phone/email).
                </li>
              </ul>
            </SimpleCard>
          </div>
          <figure>
            {" "}
            <img src="./images/luxblack-grid.svg" alt="bmes" />
          </figure>
        </div>
      </DigitalFoundationContainer>{" "}
      <ProjectFigure imgurl={"./images/laptop-2.svg"} imgtitle={"LUXBLACK"} />
      <ToolsComponent />
      <ExecuteScrollComponent scrollRef={myTopRef} />
    </section>
  );
};

export default UxComponent;
