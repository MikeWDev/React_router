import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/BreadCrumbs";
import { CaretCircleDoubleDown } from "@phosphor-icons/react";
import NavSm from "../components/navSm";
import { useState } from "react";
const RootLayout = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="root-layout">
      <header>
        <NavSm visible={visible} setVisible={setVisible} />
        <nav>
          <div className="heading">
            <h1>Jobrouter</h1>
          </div>

          <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="help">Help</NavLink>
            <NavLink to="careers">Careers</NavLink>
          </div>
          <div
            onClick={() => {
              setVisible(!visible);
            }}
            className={`menu-arrow ${
              visible && visible === true ? "sm-visible" : ""
            }`}
          >
            <CaretCircleDoubleDown />
          </div>
        </nav>
      </header>
      <Breadcrumbs />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
