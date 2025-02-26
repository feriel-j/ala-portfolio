// import React, { useContext } from "react";
import BigTitles from "./BigTitles";
import "../_dist/FooterComponent.css";
import ButtonPrimary from "./ButtonPrimary";
import ArrowDownIcon from "./icons/ArrowDownIcon";
import SocialLabel from "./SocialLabel";
import InstagramIcon from "./icons/InstagramIcon";
// import TwitterIcon from "./icons/TwitterIcon";
import DribbleIcon from "./icons/DribbleIcon";
import EnhaceIcon from "./icons/EnhaceIcon";
import { useScrollToTop } from "../utils/HandleScrollToTop";
import { refContext } from "../domains/alaFP/layouts/MainLayout";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const FooterComponent = () => {
  //useScroll to top
  const scrollToTop = useScrollToTop();
  const navigate = useNavigate();

  const myTopRef = useContext(refContext);
  return (
    <footer className="footer-component-container">
      <section className="first-section">
        <BigTitles
          variant="footer"
          secondary="Whether you have a project in mind, want to chat about design, or just say hello, "
          terciary="I’m all ears! Drop me a message, and let’s get started."
          extratitle="Got an Idea?">
          Don’t Be Shy, Say Hi!
        </BigTitles>
        <ButtonPrimary
          className="hit-me-button"
          onClick={() => navigate("/contact")}>
          HIT ME UP <ArrowDownIcon />
        </ButtonPrimary>
      </section>
      <section className="last-section">
        <div className="social-media">
          <h1>Aladdin</h1>
          <div className="social-content">
            <a href="https://www.instagram.com/meraki_artstn/?hl=fr" target="_blank" rel="noreferrer" >
              <SocialLabel icon={<InstagramIcon />}>Instagram</SocialLabel>
            </a>
            {/* <a href="" target="_blank" rel="noreferrer">
              <SocialLabel icon={<TwitterIcon />}>Twitter</SocialLabel>
            </a> */}
            <a href="" target="_blank" rel="noreferrer">
              <SocialLabel icon={<DribbleIcon />}>Dribbble</SocialLabel>
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <SocialLabel icon={<EnhaceIcon />}>Behance</SocialLabel>
            </a>
          </div>
        </div>
        <div className="copyright">
          <p>©aladdin all rights reserved 2025.</p>
          <SocialLabel
            className="to-top"
            icon={<ArrowDownIcon />}
            onClick={() => scrollToTop(myTopRef)}>
            To Top
          </SocialLabel>
        </div>
      </section>
    </footer>
  );
};

export default FooterComponent;
