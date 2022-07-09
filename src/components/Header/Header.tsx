import { NavLink } from "react-router-dom";
import logo from "../Assets/logo.svg";
import { ContainerNav } from "./styles";

export function Header() {
  return (
    <ContainerNav>
      <img src={logo} alt="Gestire logo" />
      <nav>
        <NavLink to="/" aria-label="Gestire - Dashboard" end>
          Dashboard
        </NavLink>
        <NavLink to="/projectsList" aria-label="Gestire - Projects List">
          Projects List
        </NavLink>
        <NavLink to="/activitiesList" aria-label="Gestire - Activities List">
          Activities List
        </NavLink>
      </nav>
    </ContainerNav>
  );
}
