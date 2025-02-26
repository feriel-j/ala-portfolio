import ButtonPrimary from "../../../components/ButtonPrimary";
import "../../../_dist/NavigationBar.css";
import { useContext } from "react";
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

const NavigationBar = () => {
  const navigate = useNavigate();
  // const location=useLocation();
  const scrollToTop = useScrollToTop();
  const myAboutRef = useContext(refAboutContext);
  const myServicesRef = useContext(refServicesContext);
  const myWorkRef = useContext(refWorkContext);
  const myTestimonialsRef = useContext(refTestimonialsContext);

  const handleClick = (ref: React.RefObject<HTMLElement> | null) => {
    // scrollToTop(ref);
    navigate("/");
    // navigate('/', {state:{target}})
    setTimeout(() => scrollToTop(ref), 200);
  };
  
  const isUi = useIsCurrentPath("/ui");
  const isUx = useIsCurrentPath("/ux");

  return (
    <nav tabIndex={0} id="navigation-bar" className="navigation-bar">
      <h1 onClick={() => navigate("/")}>Aladdin</h1>

      <ul>
        <li tabIndex={0}
          onClick={() => {
            handleClick(myAboutRef);
          }}>
          About
        </li>
        <li tabIndex={0} onClick={() => handleClick(myServicesRef)}>Services</li>
        <DropDownMenu handleClickNav={handleClick} onClick={() => handleClick(myWorkRef)}
          className={`${isUi || isUx ? "active-link" : ""}`}>Projects</DropDownMenu>
        {/* <li
          onClick={() => handleClick(myWorkRef)}
          className={`${isUi || isUx ? "active-link" : ""}`}>
          Projects
        </li> */}
        <li tabIndex={0} onClick={() => handleClick(myTestimonialsRef)}>TESTIMONIALS</li>
      </ul>
      <ButtonPrimary onClick={() => navigate("/contact")}>
        Let's Talk
      </ButtonPrimary>
    </nav>
  );
};

export default NavigationBar;
