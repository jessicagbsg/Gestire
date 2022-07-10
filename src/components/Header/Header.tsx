import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { ContainerNav } from "../Header/styles";

export function Header() {
  return (
    <ContainerNav>
      <img src={logo} alt="Gestire logo" />
      <nav>
        <NavLink to="/" aria-label="Gestire - Dashboard" end>
          Dashboard
        </NavLink>
        <NavLink to="/projects" aria-label="Gestire - Projects List">
          Projects List
        </NavLink>
      </nav>
    </ContainerNav>
  );
}
