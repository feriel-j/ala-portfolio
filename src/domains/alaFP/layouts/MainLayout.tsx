import { createContext, useRef } from "react";
import FooterComponent from "../../../components/FooterComponent";
import NavigationBar from "../communs/NavigationBar";
import "../../../_dist/MainLayout.css";
import { Outlet } from "react-router-dom";

// Create the refContext using createContext for the to scroll to top
export const refContext = createContext<React.RefObject<HTMLElement> | null>(
  null
);

export const refAboutContext = createContext<React.RefObject<HTMLElement> | null>(
  null
);

export const refServicesContext = createContext<React.RefObject<HTMLElement> | null>(
  null
);

export const refTestimonialsContext = createContext<React.RefObject<HTMLElement> | null>(
  null
);
export const refWorkContext = createContext<React.RefObject<HTMLElement> | null>(
  null
);
const MainLayout = () => {

  
  const myTopRef = useRef<HTMLElement>(null); 
  const myAboutRef = useRef<HTMLElement>(null);
  const myServicesRef = useRef<HTMLElement>(null);
  const myWorkRef = useRef<HTMLElement>(null);
  const myTestimonialRef = useRef<HTMLElement>(null);
  
  return (
    <refContext.Provider value={myTopRef}>
      <refAboutContext.Provider value={myAboutRef}>
      <refServicesContext.Provider value={myServicesRef}>
      <refWorkContext.Provider value={myWorkRef}>
      <refTestimonialsContext.Provider value={myTestimonialRef}>

    
    <main id="myTopRef" ref={myTopRef} className="main-layout">
      <NavigationBar />
      <Outlet/>
     
      <FooterComponent/>

    </main>
    </refTestimonialsContext.Provider>
    </refWorkContext.Provider>
    </refServicesContext.Provider>
    </refAboutContext.Provider>
    </refContext.Provider>
  );
};

export default MainLayout;
