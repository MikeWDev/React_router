import { NavLink, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";

const NavSm = ({ visible }) => {
  return (
    <div
      className={`sm-links  ${visible && visible === true ? "sm-visible" : ""}`}
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="help">Help</NavLink>
      <NavLink to="careers">Careers</NavLink>
    </div>
  );
};

export default NavSm;
