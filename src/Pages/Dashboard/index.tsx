import React from "react";

// component
import Dashboard from "../../Components/Core/Dashboard";

import { sidebarContext } from "../../App";

//Styles
import "../../Assets/Css/style.css";

//images
import menu_logo from "../../Assets/Images/rai-menu-logo.svg";

const Index = () => {
  const { showSidebar, setShowSideBar } = React.useContext(sidebarContext);
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <nav className="navbar navbar-expand navbar-light topbar static-top shadow d-flex justify-content-between w-100">
          <a
            className="nav-link d-md-none sidebarToggle pl-0"
            href={undefined}
            id="sidebarToggle-top"
            onClick={() => {
              setShowSideBar(!showSidebar);
            }}
          >
            <i className="fas fa-bars"></i>
          </a>
          <a className="sidebar-brand d-flex" href={undefined}>
            <img src={menu_logo} alt="logo" className="logo" />
          </a>
        </nav>

        <Dashboard />
      </div>
    </div>
  );
};

export default Index;
