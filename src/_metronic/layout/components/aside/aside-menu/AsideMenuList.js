/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import {useLocation} from "react-router";
import {NavLink}  from "react-router-dom";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl, checkIsActive} from "../../../../_helpers";

export function AsideMenuList({ layoutProps }) {
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
            <NavLink className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")}/>
            </span>
              <span className="menu-text">Dashboard</span>
            </NavLink>
          </li>
          {/*end::1 Level*/}



          {/* Analysis */}
          {/* begin::section */}
          <li className="menu-section ">
            <h4 className="menu-text">Analysis</h4>
            <i className="menu-icon flaticon-more-v2"></i>
          </li>
          {/* end:: section */}

          {/* Sugessyions */}
          {/*begin::1 Level*/}
          <li
              className={`menu-item menu-item ${getMenuItemActive(
                  "/google-material", true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
          >
            <NavLink className="menu-link" to="/Suggestions">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Cap-2.svg")}/>
            </span>
              <span className="menu-text">Suggestions</span>
              
            </NavLink>
          </li>
          {/*end::1 Level*/}

          {/* Reporting */}
          {/*begin::1 Level*/}
          <li
              className={`menu-item menu-item ${getMenuItemActive(
                  "/react-bootstrap", true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
          >
            <NavLink className="menu-link" to="/Reporting">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Box2.svg")}/>
            </span>
              <span className="menu-text">Reporting</span>
              
            </NavLink>
          </li>
          {/*end::1 Level*/}

          {/* Varden Management */}
          {/* begin::section */}
          <li className="menu-section ">
            <h4 className="menu-text">Warden Management</h4>
            <i className="menu-icon flaticon-more-v2"></i>
          </li>
          {/* end:: section */}

          {/* Varden Reponsibilities */}
          {/*begin::1 Level*/}
          <li
              className={`menu-item  ${getMenuItemActive(
                  "/e-commerce", true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
          >
            <NavLink className="menu-link " to="/WardenResponsibility">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Bag2.svg")}/>
            </span>
              <span className="menu-text">Warden Reponsibilities</span>
            </NavLink>
  
          </li>
          {/*end::1 Level*/}

          {/* Varden Profiles */}
          {/*begin::1 Level*/}
          <li
              className={`menu-item  ${getMenuItemActive(
                  "/e-commerce", true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
          >
            <NavLink className="menu-link" to="/WardenProfiles">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Bag2.svg")}/>
            </span>
              <span className="menu-text">Warden Profiles</span>
            </NavLink>
  
          </li>

        </ul>

        {/* end::Menu Nav */}
      </>
  );
}
