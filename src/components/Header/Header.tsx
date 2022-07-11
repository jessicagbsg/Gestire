import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { ContainerNav } from "../Header/styles";
import { useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <ContainerNav>
      <img src={logo} alt="Gestire logo" />
      <nav>
        <NavLink
          className={location.pathname === "/" ? "active" : ""}
          to="/"
          aria-label="Gestire - Dashboard"
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          className={location.pathname === "/projects" ? "active" : ""}
          to="/projects"
          aria-label="Gestire - Projects List"
        >
          Projects List
        </NavLink>
      </nav>
    </ContainerNav>
  );
}
