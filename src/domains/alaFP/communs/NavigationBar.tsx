import ButtonPrimary from "../../../components/ButtonPrimary";
import "../../../_dist/NavigationBar.css";
import { useContext, useRef } from "react";
import { useScrollToTop } from "../../../utils/HandleScrollToTop";
import { useNavigate } from "react-router-dom";
import {
  refAboutContext,
  refServicesContext,
  refTestimonialsContext,
  refWorkContext,
} from "../layouts/MainLayout";
import useIsCurrentPath from "../../../hooks/IsCurrentPath";
import DropDownMenu from "./DropDownMenu";
import React from "react";

type Item = {
  name: string;
  ref: React.RefObject<HTMLElement> | null;
  isDropdown: boolean;
};

const NavigationBar = () => {
  const navigate = useNavigate();
  // const location=useLocation();
  const scrollToTop = useScrollToTop();
  //references ---------
  const myAboutRef = useContext(refAboutContext);
  const myServicesRef = useContext(refServicesContext);
  const myWorkRef = useContext(refWorkContext);
  const myTestimonialsRef = useContext(refTestimonialsContext);
  const listRef = useRef<(HTMLLIElement | null)[]>([]);

  // the click function
  const handleClick = (ref: React.RefObject<HTMLElement> | null) => {
    navigate("/");
    setTimeout(() => scrollToTop(ref), 200);
  };

  //the keyboard function for accessibility

  const handleKeyboard = (
    e: React.KeyboardEvent<HTMLElement>,
    ref: React.RefObject<HTMLElement> | null,
    index: number,
    listRefs: (HTMLElement | null)[]
  ) => {
    switch (e.key) {
      case "Enter":
        console.log("You pressed Enter!");
        navigate("/");
        setTimeout(() => {
          if (ref?.current) {
            scrollToTop(ref);
          }
        }, 200);
        break;
  
      case "ArrowRight":
        e.preventDefault();
        if (index + 1 < listRefs.length) {
          listRefs[index + 1]?.focus();
        }
        break;
  
      case "ArrowLeft":
        e.preventDefault();
        if (index - 1 >= 0) {
          listRefs[index - 1]?.focus();
        }
        break;
  
      default:
        break;
    }
  };

  //current path
  const isUi = useIsCurrentPath("/ui");
  const isUx = useIsCurrentPath("/ux");

  //Navbar Item list---------
  const Items = [
    { name: "About", ref: myAboutRef, isDropdown: false },
    { name: "Services", ref: myServicesRef, isDropdown: false },
    { name: "Projects", ref: myWorkRef, isDropdown: true },
    { name: "TESTIMONIALS", ref: myTestimonialsRef, isDropdown: false },
  ];

  return (
    <nav tabIndex={0} id="navigation-bar" className="navigation-bar">
      <h1 tabIndex={0} role="button" onKeyDown={(e) => {
      if (e.key === "Enter")navigate("/") ;
    }} onClick={() => navigate("/")}>Aladdin</h1>
      <ul>
      {Items.map((item:Item, index) => (
        <React.Fragment key={index}>
          {!item.isDropdown ? (
            <li
              tabIndex={0}
              ref={(el) => (listRef.current[index] = el)}
              onKeyDown={(e) => handleKeyboard(e, item.ref, index, listRef.current)}
              onClick={() => handleClick(item.ref)}
              // className={`${isUi || isUx ? 'active-link' : ''}`}
            >
              {item.name}
            </li>
          ) : (
            <DropDownMenu key={index} handleClickNav={handleClick}
              ref={(el) => (listRef.current[index] = el)}
              onClick={() => handleClick(item.ref)}
              className={`${isUi || isUx ? 'active-link' : ''}`}
            >
              {item.name}
            </DropDownMenu>
            
          )}
        </React.Fragment>
      ))}
    </ul>
    
  
      <ButtonPrimary onClick={() => navigate("/contact")}>
        Let's Talk
      </ButtonPrimary>
    </nav>
  );
};

export default NavigationBar;
