import { NavLink } from "react-router-dom";
import "../styling/SpaceCraftFormBackButton.css";

//SpaceCraftFormBackButton Component: Displays a Back button for accessing all spacecrafts
const SpaceCraftFormBackButton = () => {
  return (
    <NavLink to="/spacecrafts" className="SpaceCraftFormBackButton">
      Back 👈
    </NavLink>
  );
};

//export SpaceCraftFormBackButton for further use
export default SpaceCraftFormBackButton;
