import React, { useContext } from 'react'
import "../_dist/ProcessComponent.css"
import BigTitles from './BigTitles'
import StepsComponent from './StepsComponent'
import StepsCard from './StepsCard'
import VerticalDivider from './VerticalDivider'
import StepCercle from './StepCercle'
import ProjectsComponents from './ProjectsComponents'
import Divider from './Divider'
import ProjectCard from './ProjectCard'
// import BrandsCard from './BrandsCard'
import { useNavigate } from 'react-router-dom'
import { refWorkContext } from '../domains/alaFP/layouts/MainLayout'
const ProcessComponent = () => {
  const navigate=useNavigate()
  const myWorkRef=useContext(refWorkContext)

  return (
    <div className='process-container'>
      <BigTitles extratitle="THe PRocess" secondary="Crafting experiences that connect and delight.">My UI/UX</BigTitles>
      <StepsComponent>
      <main className="main-content">
        <StepsCard
          className="card-1"
          duration={"1–2 weeks"}
          title={"Understand the Problem"}
          description={
            "A deep dive into your goals, users, and competition to set a strong foundation."
          }>
          <ul>
            <li>Learn about your audience and their needs.</li>
            <li>Research market trends and competitors.</li>
            <li>Define project objectives.</li>
          </ul>
        </StepsCard>
        <StepsCard
          className="card-2"
          duration={"2–4 weeks"}
          title={"Design & Prototype"}
          description={
            "Bringing concepts to life with detailed visuals and interactive prototypes."
          }>
          <ul>
            <li>Develop detailed UI designs.</li>
            <li>Create interactive prototypes for realistic previews.</li>
            <li>Focus on usability and visual consistency.</li>
          </ul>
        </StepsCard>
        <StepsCard
          className="card-3"
          duration={"Ongoing"}
          title={"Launch & Improve"}
          description={
            "Preparing for the launch and refining the design based on real-world usage."
          }>
          <ul>
            <li>Deliver final assets for development.</li>
            <li>Collaborate during implementation.</li>
            <li>Monitor and improve based on metrics.</li>
          </ul>
        </StepsCard>
        <VerticalDivider className="divider-1"/>
        <StepCercle className="cercle-1">01</StepCercle>
        <VerticalDivider className="divider-2"/>
        <StepCercle className="cercle-2">02</StepCercle>
        <VerticalDivider className="divider-3"/>
        <StepCercle className="cercle-3">03</StepCercle>
        <VerticalDivider className="divider-4"/>
        <StepCercle className="cercle-4">04</StepCercle>
        <VerticalDivider className="divider-5"/>
        <StepCercle className="cercle-5">05</StepCercle>
        <VerticalDivider className="divider-6"/>
        <StepCercle className="cercle-6">06</StepCercle>
        <VerticalDivider className="divider-7"/>
        <StepsCard
          className="card-4"
          extra="Do we Match?"
          duration={"2 Hours"}
          title={"Discovery Call"}
          description={
            "Before we start, we determine if and how I can help you. What are your requirements for your new website or app? Why do you need a new website or app? What goals do you have, and what problems can we solve with a new website or app?"
          }>
          <ul>
            <li>We get to know each other better.</li>
            <li>Determine how I can best assist you.</li>
            <li>Understand the goals you have for your website or app.</li>
          </ul>
        </StepsCard>
        <StepsCard
          className="card-5"
          duration={"1–2 weeks"}
          title={"Plan the Experience"}
          description={
            "Structuring the user flow and functionality for an intuitive experience."
          }>
          <ul>
            <li>Sketch ideas and create wireframes.</li>
            <li>Map user journeys to ensure seamless navigation.</li>
            <li>Collaborate to align on priorities.</li>
          </ul>
        </StepsCard>
        <StepsCard
          className="card-6"
          duration={"1–2 weeks"}
          title={"Test & Refine"}
          description={
            "Gathering feedback and optimizing the design for the best user experience."
          }>
          <ul>
            <li>Conduct usability tests with real users.</li>
            <li>Identify areas for improvement.</li>
            <li>Iterate based on feedback.</li>
          </ul>
        </StepsCard>
    </main>
      </StepsComponent>
      <ProjectsComponents ref={myWorkRef}  title="UI/UX projects">
      <ProjectCard onClick={()=>navigate("/ui")} imageurl={"./images/bmes.svg"} title="bmes"/>
      <ProjectCard onClick={()=>navigate("/ux")} imageurl={"./images/luxBLACK.svg"} title="LuxBLACK" /></ProjectsComponents>
      <Divider/>
      {/* <BigTitles  secondary="Turning ideas into visuals that speak volumes.">My Graphic</BigTitles> */}

      {/* <StepsComponent>
      <main className="main-content">
        <StepsCard
          className="card-1"
          duration={"1–3 days"}
          title={"Understand Your Needs"}
          description={
            "Listening to your vision and defining project goals."
          }>
          <ul>
            <li>Discuss your goals and target audience.</li>
            <li>Research your industry and competitors.</li>
            <li>Define the project scope and deliverables.</li>
          </ul>
        </StepsCard>
        <StepsCard
          className="card-2"
          duration={"1–2 weeks"}
          title={"Create the Design"}
          description={
            "Crafting the design that tells your story visually."
          }>
          <ul>
            <li>Develop visual concepts into polished designs.</li>
            <li>Ensure alignment with brand guidelines.</li>
            <li>Focus on balance, composition, and storytelling.</li>
          </ul>
        </StepsCard>
        <StepsCard
          className="card-3"
          duration={"1–2 days"}
          title={"Deliver the Final Design"}
          description={
            "Handing over all files and ensuring a smooth implementation."
          }>
          <ul>
            <li>Deliver files in all required formats.</li>
            <li>Provide guidelines for use.</li>
            <li>Offer support during implementation.</li>
          </ul>
        </StepsCard>
        <VerticalDivider className="divider-1"/>
        <StepCercle className="cercle-1">01</StepCercle>
        <VerticalDivider className="divider-2"/>
        <StepCercle className="cercle-2">02</StepCercle>
        <VerticalDivider className="divider-3"/>
        <StepCercle className="cercle-3">03</StepCercle>
        <VerticalDivider className="divider-4"/>
        <StepCercle className="cercle-4">04</StepCercle>
        <VerticalDivider className="divider-5"/>
        <StepCercle className="cercle-5">05</StepCercle>
        <VerticalDivider className="divider-6"/>
        <StepCercle className="cercle-6">06</StepCercle>
        <VerticalDivider className="divider-7"/>
        <StepsCard
          className="card-4"
          extra="Do we Match?"
          duration={"2 Hours"}
          title={"Discovery Call"}
          description={
            "Before we start, we determine if and how I can help you. What are your requirements for your new website or app? Why do you need a new website or app? What goals do you have, and what problems can we solve with a new website or app?"
          }>
          <ul>
            <li>We get to know each other better.</li>
            <li>Determine how I can best assist you.</li>
            <li>Understand the goals you have for your website or app.</li>
          </ul>
        </StepsCard>
        <StepsCard
          className="card-5"
          duration={"3–5 days"}
          title={"Brainstorm Ideas"}
          description={
            "Exploring creative directions to match your brand’s essence."
          }>
          <ul>
            <li>Develop mood boards for inspiration.</li>
            <li>Experiment with styles, colors, and typography.</li>
            <li>Choose a creative direction.</li>
          </ul>
        </StepsCard>
        <StepsCard
          className="card-6"
          duration={"3–5 days"}
          title={"Review & Perfect"}
          description={
            "Refining the design collaboratively to ensure it’s just right."
          }>
          <ul>
            <li>Share drafts for feedback.</li>
            <li>Make revisions based on your input.</li>
            <li>Finalize the design for perfection.</li>
          </ul>
        </StepsCard>
    </main>
      </StepsComponent> */}
      {/* <ProjectsComponents className='graphic-projects' title="GRAPHIC DESIGN PROJECTS">
        <BrandsCard title="meraki" imageurl="./images/meraki.svg" />
        <BrandsCard title="craftura" imageurl="./images/craftura.svg" />
        <BrandsCard title="arabic" imageurl="./images/arabic.svg" />
      </ProjectsComponents>
      <Divider/> */}
    </div>
  )
}

export default ProcessComponent
