import React, { useContext, useRef } from "react";
import "../../../_dist/UiComponent.css";
import ToolsComponent from "../../../components/ToolsComponent";
import ProjectFigure from "../../../components/ProjectFigure";
import ProjectHeroCard from "../../../components/ProjectHeroCard";
import ExecuteScrollComponent from "../../../utils/ExecuteScrollComponent";
import { refContext } from "../layouts/MainLayout";
import DigitalFoundationContainer from "../../../components/DigitalFoundationContainer";
import SimpleCard from "../../../components/SimpleCard";
import DigitalFoundationComponent from "../../../components/DigitalFoundationComponent";

const UiComponent = () => {
  const TopRef = useRef<HTMLElement>(null);
  const myTopRef = useContext(refContext);

  return (
    <section ref={TopRef} className="ui-component-container">
      <ProjectHeroCard imgurl={"./images/bmes.svg"} imgtitle={"bmes"} />
      <DigitalFoundationContainer>
        <DigitalFoundationComponent projectname={"Bmes"}>
          <SimpleCard cardtitle="Challenge">
            <p>
              The client was struggling to focus on establishing an online
              presence to showcase their services, and to attract new clients.
            </p>
          </SimpleCard>
          <SimpleCard cardtitle="OBJECTIVE">
            <p>
              The aim was to craft a sleek, visually engaging website that
              captured the essence of the client’s brand. It needed to offer a
              smooth user experience, work flawlessly on all devices, and be
              optimized for search engines to boost online presence.
            </p>
          </SimpleCard>{" "}
        </DigitalFoundationComponent>

        <div className="digital-process-container">
          <div className="left-section">
            <SimpleCard cardtitle="Research Process">
              <p>Methods:</p>
              <ul>
                <li>
                  Conducted a competitor analysis of similar-sized construction
                  companies to identify best practices.
                </li>
                <li>
                  Interviewed 4 potential clients to understand what they look
                  for on a construction company’s website.
                </li>
              </ul>
              <p>Key Insights:</p>
              <ul>
                <li>
                  Users expect clear service descriptions and project
                  portfolios.
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
            <img src="./images/bmes-grid.svg" alt="bmes" />
          </figure>
        </div>
      </DigitalFoundationContainer>
      <ProjectFigure imgurl={"./images/laptop-bmes.svg"} imgtitle={"bmes"} />
      <ToolsComponent />
      <ExecuteScrollComponent scrollRef={myTopRef} />
    </section>
  );
};

export default UiComponent;
