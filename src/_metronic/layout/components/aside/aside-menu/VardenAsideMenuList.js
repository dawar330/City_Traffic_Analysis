/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import {useLocation} from "react-router";
import {NavLink}  from "react-router-dom";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl, checkIsActive} from "../../../../_helpers";

export function VardenAsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
        ? ` ${!hasSubmenu && "menu-item-active"} menu-item-open `
        : "";
  };

  return (
      <>
        {/* begin::Menu Nav */}
        <ul className={`menu-nav ${layoutProps.ulClasses}`}>
          {/*begin::1 Level*/}
          <li
              className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
              aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/user-profile">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")}/>
            </span>
              <span className="menu-text"> Varden Dashboard</span>
            </NavLink>
          </li>
          {/*end::1 Level*/}





          {/* Sugessyions */}
          {/*begin::1 Level*/}
        

        

          {/* Varden Management */}
          {/* begin::section */}
          <li className="menu-section ">
            <h4 className="menu-text">Important Phone Numbers</h4>
            <i className="menu-icon flaticon-more-v2"></i>
          </li>
          {/* end:: section */}
            {/* Reporting */}
          {/*begin::1 Level*/}
          <li
              className={`menu-item menu-item ${getMenuItemActive(
                  "/react-bootstrap", true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
          >
            <NavLink className="menu-link" to="/EmergencyNumbers">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Box2.svg")}/>
            </span>
              <span className="menu-text">Important Phone Numbers</span>
              
            </NavLink>
          </li>
          {/*end::1 Level*/}

  
        

        </ul>

        {/* end::Menu Nav */}
      </>
  );
}
