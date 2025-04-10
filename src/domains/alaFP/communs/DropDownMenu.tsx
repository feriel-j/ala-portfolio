import React, { forwardRef, HTMLProps, useContext, useEffect, useState } from "react";
import "../../../_dist/DropDownMenu.css";
import { refWorkContext } from "../layouts/MainLayout";
import { useNavigate } from "react-router-dom";
import EsdCompArrowIcon from "../../../components/icons/EsdCompArrowIcon";

interface DropDownMenuProps extends HTMLProps<HTMLLIElement> {
  id?: string;
  handleClickNav: (ref: React.RefObject<HTMLElement> | null) => void;
}

const DropDownMenu = forwardRef<HTMLLIElement, DropDownMenuProps>(
  ({ handleClickNav, ...props }, ref) => {
    const [Opened, setOpened] = useState(false);
    const myWorkRef = useContext(refWorkContext);
    const navigate = useNavigate();

    const handleClick = () => {
      setOpened((prev) => !prev);
    };

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          ref &&
          "current" in ref &&
          ref.current &&
          !ref.current.contains(event.target as Node)
        ) {
          setOpened(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [ref]);

    return (
      <li
        tabIndex={0}
        ref={ref}
        {...props}
        className={`drowdown-menu-container ${props.className ?? ""}`}
        onClick={handleClick}
        onBlur={() => setOpened(false)}
        onMouseOver={() => setOpened(true)}
      >
        <span>
          {props.children}{" "}
          <EsdCompArrowIcon className={Opened ? "opened-arrow" : ""} />
        </span>

        <ul
          tabIndex={0}
          className={
            Opened
              ? "subitems-container opened-subitems"
              : "subitems-container closed-subitems-container"
          }
          onClick={(e) => e.stopPropagation()}
          onMouseOver={(e) => e.stopPropagation()}
          onMouseLeave={() => setOpened(false)}
          onKeyDown={(e) => e.stopPropagation()}
        >
          <li
            tabIndex={0}
            onClick={() => handleClickNav(myWorkRef)}
            onTouchStart={() => handleClickNav(myWorkRef)}
            onKeyDown={() => handleClickNav(myWorkRef)}
          >
            Projects List
          </li>
          <li
            tabIndex={0}
            onClick={() => navigate("/ui")}
            onTouchStart={() => navigate("/ui")}
            onKeyDown={() => navigate("/ui")}
          >
            Bmes
          </li>
          <li
            tabIndex={0}
            onClick={() => navigate("/ux")}
            onTouchStart={() => navigate("/ux")}
            onKeyDown={() => navigate("/ux")}
          >
            luxblack
          </li>
        </ul>
      </li>
    );
  }
);

DropDownMenu.displayName = "DropDownMenu";
export default DropDownMenu;
