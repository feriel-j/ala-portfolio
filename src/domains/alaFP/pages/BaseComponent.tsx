import HeroCard from "../../../components/HeroCard";
import DefaultSection from "../../../components/DefaultSection";
import IntroComponent from "../../../components/IntroComponent";
import ServicesComponent from "../../../components/ServicesComponent";
import ProcessComponent from "../../../components/ProcessComponent";
import TestimonialsComponent from "../../../components/TestimonialsComponent";
import AboutComponent from "../../../components/AboutComponent";
import "../../../_dist/BaseComponent.css";
import { useContext, useRef } from "react";
import { refAboutContext, refContext, refServicesContext, refTestimonialsContext } from "../layouts/MainLayout";
import ExecuteScrollComponent from "../../../utils/ExecuteScrollComponent";

const BaseComponent = () => {
    const myServicesRef = useContext(refServicesContext);
    const myAboutRef=useContext(refAboutContext)
    // const myWorkRef=useContext(refWorkContext)
    const myTestimonialsRef = useContext(refTestimonialsContext)
    const myTopRef=useContext(refContext)
    const TopRef = useRef<HTMLElement>(null); 

  return (
    <section ref={TopRef} className="base-component-container">
      <HeroCard />
      <DefaultSection id="myAboutRef" ref={myAboutRef}   title="BRIEF INTRO">
        <IntroComponent />
      </DefaultSection>
      <DefaultSection  title="WHAT I DO">
        <ServicesComponent />
      </DefaultSection>
      <DefaultSection id="myServicesRef" ref={myServicesRef} title="WORK PROCESSES">
        <ProcessComponent />
      </DefaultSection>
      <DefaultSection id="myTestimonialsRef" ref={myTestimonialsRef} title="CONFESSIONS">
        <TestimonialsComponent />
      </DefaultSection>
      <DefaultSection title="ABOUT ME">
        <AboutComponent />
      </DefaultSection>
      <ExecuteScrollComponent scrollRef={myTopRef} />

    </section>
  );
};

export default BaseComponent;
