//import styling and needed components
import "../styling/Constructions.css";
import SpaceCraftForm from "../components/SpaceCraftForm";
import SpaceCraftFormBackButton from "../routes/SpaceCraftFormBackButton";

//Constructions Page for SpaceCraft
//Allows navigation back to the previous page
//Facilitates the creation of new spacecraft through
// SpaceCraftForm, shows errors for missing required fields (name, capacity, description)
const Constructions = () => {
  return (
    <div className="SpaceCrafts">
      <SpaceCraftFormBackButton />
      <SpaceCraftForm />
    </div>
  );
};
//export Constructions Page for further use
export default Constructions;
