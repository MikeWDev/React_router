import { NavLink, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";

const NavSm = ({ visible, setVisible }) => {
  return (
    <div
      className={`sm-links  ${visible && visible === true ? "sm-visible" : ""}`}
    >
      <NavLink onClick={setVisible(false)} to="/">
        Home
      </NavLink>
      <NavLink onClick={setVisible(false)} to="about">
        About
      </NavLink>
      <NavLink onClick={setVisible(false)} to="help">
        Help
      </NavLink>
      <NavLink onClick={setVisible(false)} to="careers">
        Careers
      </NavLink>
    </div>
  );
};

export default NavSm;
