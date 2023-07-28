import React, { FC } from "react";

import { sidebarContext } from "../../../App";

import menu_logo from "../../../Assets/Images/rai-menu-logo.svg";
import book from "../../../Assets/Images/book.svg";
import file from "../../../Assets/Images/file.svg";
import list from "../../../Assets/Images/List.svg";
import globe from "../../../Assets/Images/globe.svg";
import puzzle from "../../../Assets/Images/Puzzle.svg";
import account from "../../../Assets/Images/account.svg";
import signout from "../../../Assets/Images/sign-out.svg";

const Index: FC = () => {
  const { showSidebar, setShowSideBar } = React.useContext(sidebarContext);
  return (
    <>
      <ul className={`navbar-nav sidebar shadow ${showSidebar ? "toggled" : ""}`}>
        <a className="nav-link sidebarToggle d-md-none" href={undefined} onClick={() => {setShowSideBar(false)}}>
          <i className="fas fa-times"></i>
        </a>
        <a className="sidebar-brand d-flex" href={undefined}>
          <img src={menu_logo} alt="logo" className="logo" />
        </a>

        <li className="nav-item active">
          <a className="nav-link" href={undefined}>
            <img src={book} alt="" />
            <span>Home</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={undefined}>
            <img src={file} alt="" />
            <span>Educate</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={undefined}>
            <img src={list} alt="" />
            <span>Innovate</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={undefined}>
            <img src={globe} alt="" />
            <span>Advocate</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={undefined}>
            <img src={puzzle} alt="" />
            <span>Integrations</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={undefined}>
            <img src={account} alt="" />
            <span>Account</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={undefined}>
            <img src={signout} alt="" />
            <span>Sign out</span>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Index;
