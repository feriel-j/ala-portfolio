import ServiceCard from "./ServiceCard";
import UxIcon from "./icons/UxIcon";
import UiIcon from "./icons/UiIcon";
import GraphicIcon from "./icons/GraphicIcon";
import PhotographyIcon from "./icons/PhotographyIcon";
import "../_dist/ServicesComponent.css";

const ServicesComponent = () => {

 


  return (
    <section className="services-container">
      <ServiceCard className="ux" icon={<UxIcon />} header="User Experience">
        Competitive/Comparative Analysis, User behavioral analysis, Information
        Architecture, Accessibility Assessment, Component Logic Design, User
        Research...
      </ServiceCard>
      <ServiceCard className="ui" icon={<UiIcon />} header="User Interface">
        Style tiles creation, Elements visualization, Interface Logic, Animated
        Designs Validation, Cognitive Comfort Assessment...
      </ServiceCard>
      <ServiceCard
        className="graphic"
        icon={<GraphicIcon />}
        header="Graphic Design">
        Logo Design, Concept Art Illustration, Arabic Calligraphy, etc...
      </ServiceCard>

      <ServiceCard
        className="photography"
        icon={<PhotographyIcon />}
        header="Photography">
        Photography and Image Manipulation, Photo Editing...
      </ServiceCard>
      <div className="first-design"><img src="images/firstd.svg" alt="design" /></div>
      <div className="second-design"></div>
      <div className="third-design"><img src="images/second.svg" alt="design" /></div>

      <div className="fourth-design"></div>

      <div className="fifth-design"><img src="images/second.svg" alt="design" /></div>
      <div className="sixth-design"><img src="images/firstd.svg" alt="design" /></div>
      <div className=" cd1"> <div className="circle-d"></div></div>
      <div className="cd2"><div className="circle-d"> </div></div>
      <div className="cd3"><div className="circle-d"></div></div>
      <div className="cd4"><div className="circle-d"></div></div>



    </section>
  );
};

export default ServicesComponent;
