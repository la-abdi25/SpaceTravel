import { NavLink, Outlet } from "react-router-dom";
import "../styling/NavBar.css";

//Navigation Links
const NavBar = () => {
  return (
    <div>
      <main>
        <header>
          <nav className="NavBar">
            <NavLink to="./">🌍 Home</NavLink>
            <NavLink to="spacecrafts">🚀 Spacecrafts</NavLink>
            <NavLink to="planets">🪐 Planets</NavLink>
          </nav>
        </header>
      </main>
      {/* //renders nested routes for NavBar */}
      <Outlet />
    </div>
  );
};
//export NavBar for further use
export default NavBar;
