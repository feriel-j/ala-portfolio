import React, { HTMLProps, useContext, useEffect, useRef, useState } from "react";
import "../../../_dist/DropDownMenu.css";
import { refWorkContext } from "../layouts/MainLayout";
import { useNavigate } from "react-router-dom";
import EsdCompArrowIcon from "../../../components/icons/EsdCompArrowIcon";

interface DropDownMenuProps extends HTMLProps<HTMLLIElement> {
  id?: string;
  handleClickNav:(ref: React.RefObject<HTMLElement> | null) => void
}

const DropDownMenu = ({handleClickNav,...props}: DropDownMenuProps) => {
  const [Opened, setOpened] = useState(false);
  const myWorkRef = useContext(refWorkContext);
  const navigate=useNavigate();

  const handleClick = () => {
    setOpened((prevstate) => !prevstate);
  };

  const dropdownRef = useRef<HTMLLIElement>(null); // Ref for the dropdown container

  // Handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpened(false); // Close the dropdown
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <li tabIndex={0} ref={dropdownRef}
      {...props}
      className={`drowdown-menu-container ${
        props.className ? props.className : ""
      }`}
      onClick={handleClick}  onBlur={()=>setOpened(false)} onMouseOver={()=>setOpened(true)} >
      <span>
        {props.children} <EsdCompArrowIcon className={Opened ?"opened-arrow":""}/>
      </span>
     
        <ul tabIndex={0}  className={Opened?"subitems-container opened-subitems" :"subitems-container closed-subitems-container"} onClick={(e)=>e.stopPropagation()} onMouseOver={(e)=>e.stopPropagation()} onMouseLeave={()=>setOpened(false)} onKeyDown={(e)=>e.stopPropagation()} >
          <li tabIndex={0} onClick={()=>handleClickNav(myWorkRef)} onTouchStart={()=>handleClickNav(myWorkRef)} onKeyDown={()=>handleClickNav(myWorkRef)}>Projects List</li>
          <li tabIndex={0} onClick={()=>navigate("/ui")} onTouchStart={()=>navigate("/ui")} onKeyDown={()=>navigate("/ui")}>Bmes</li>
          <li tabIndex={0} onClick={()=>navigate("/ux")} onTouchStart={()=>navigate("/ux")}  onKeyDown={()=>navigate("/ux")}>luxblack</li>
        </ul>
      
    </li>
  );
};

export default DropDownMenu;
