import DestroyButton from "../components/DestroyButton";
import { NavLink } from "react-router-dom";
import "../styling/AddSpaceCraft.css";

//AddSpaceCraft Component: shows details for all spacecrafts
const AddSpaceCraft = ({ id, name, capacity, image, spacecraft }) => {
  return (
    <div className="AddSpaceCraft">
      <div className="AddSpaceCraft-Details">
        <NavLink to={`spacecraft/${id}`}>
          <img src={image} alt="no image" className="AddSpaceCraft-Img" />
        </NavLink>
        <div>
          <p>Name: {name}</p>
          <p>Capacity: {capacity}</p>
        </div>
      </div>
      <DestroyButton spacecraft={spacecraft} />
    </div>
  );
};
//export AddSpaceCraft for further use
export default AddSpaceCraft;
