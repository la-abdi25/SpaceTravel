import { NavLink } from "react-router-dom";
import "../styling/SpaceCrafts.css";
import AddSpaceCraft from "../routes/AddSpaceCraft";
import { useContext, useState, useEffect } from "react";
import { SpaceContext } from "../context/SpaceCraftProvider";
import { nanoid } from "nanoid";
import Loading from "../components/Loading";

//SpaceCrafts Page: Displays all spacecraft and their details
//Provides navigation options for viewing specific spacecraft details,
//constructing new spacecraft, and decommissioning existing ones
const SpaceCrafts = () => {
  //Loading is initially visible
  const [isLoading, setIsLoading] = useState(true);

  //Loading Component fetching data from API
  useEffect(() => {
    let timer = "";
    if (isLoading) {
      timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
    //cleanup
    return () => {
      clearTimeout(timer);
    };
  }, [isLoading]);

  const spaceContext = useContext(SpaceContext);

  return (
    <section className="SpaceCrafts">
      <div>
        <NavLink to="construction" className="SpaceCrafts-Build-Button ">
          🏗️ Build a Spacecraft
        </NavLink>
        <div>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="SpaceCrafts-Items">
              {spaceContext.spaceCrafts.map((spacecraft) => (
                <AddSpaceCraft
                  id={spacecraft.id}
                  key={nanoid()}
                  image={spacecraft.pictureUrl}
                  name={spacecraft.name}
                  capacity={spacecraft.capacity}
                  description={spacecraft.description}
                  spacecraft={spacecraft}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
//export SpaceCrafts for further use
export default SpaceCrafts;
