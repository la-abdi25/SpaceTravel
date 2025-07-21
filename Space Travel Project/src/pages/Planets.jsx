import { useLoaderData } from "react-router-dom";
import SpaceTravelApi from "../services/SpaceTravelApi";
import "../styling/Planets.css";
import { useContext } from "react";
import { SpaceContext } from "../context/SpaceCraftProvider";
import { v4 as uuidv4 } from "uuid";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";

//Planets Page
// - Lists all planets and stationed spacecraft.
// - Enables planet selection for spacecraft dispatching, ensuring the destination differs from the current location.

const Planets = () => {
  //state management
  //manages spacecrafts added or deleted
  const spaceContext = useContext(SpaceContext);

  //Loading is initially visible
  const [isLoading, setIsLoading] = useState(true);

  //Loading Component fetching data from API
  useEffect(() => {
    let timer = "";
    if (isLoading) {
      timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
    //cleanup
    return () => {
      clearTimeout(timer);
    };
  }, [isLoading]);

  //fetch loader data from planets api
  const allPlanets = useLoaderData();
  //set state for currently pressed on spacecraft specifically id
  let [spaceCraftLocation, setSpaceCraftLocation] = useState("");
  //set state for currently pressed on planet specifically id
  let [currentPlanet, setCurrentPlanet] = useState("");

  //set states for planet and spacecraft currently pressed on "true" if pressed on, else "false"
  let [onPressedPlanet, setOnPressedPlanet] = useState("false");
  let [onPressedSpaceCraft, setOnPressedSpaceCraft] = useState("false");

  //function to send spacecraft(spaceCraftLocation) to planet(currentPlanet)
  function sendOffSpaceCraft(spaceCraftLocation, currentPlanet, spacecraft) {
    //loop through all spaceCrafts
    for (let i = 0; i < spaceContext.spaceCrafts.length; i++) {
      //loading component functionality, currently loading data
      setIsLoading(true);

      //if currently selected spacecraft(spaceCraftLocation)
      // matches the id of the spacecraft present in spaceCrafts array
      //update the spacecrafts location to now point to currentPlanet
      if (spacecraft.id === spaceCraftLocation) {
        spacecraft.currentLocation = currentPlanet;
      }
      //refresh planet and spacecraft pressed on states
      setOnPressedPlanet("false");
      setOnPressedSpaceCraft("false");
    }
  }

  return (
    <div className="Planets">
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <div>
              {onPressedPlanet === "true" &&
              onPressedSpaceCraft === "true" &&
              currentPlanet !== spaceCraftLocation &&
              isLoading ? (
                <Loading />
              ) : (
                ""
              )}
            </div>
            {allPlanets.map((planet) => (
              <div className="Planets-Info" key={nanoid()}>
                <div className="Planets-Data">
                  <div className="Planets-Imgs-Data">
                    <img
                      src={planet.pictureUrl}
                      alt="planet image"
                      className="Planets-Img"
                      //set currentPlanet state to point to planet id
                      //set planet pressed on state to true
                      onClick={() => {
                        setCurrentPlanet(planet.id);
                        setOnPressedPlanet("true");
                      }}
                    />
                    <div>
                      <p>Planet: {planet.name}</p>
                      <p>Current Population: {planet.currentPopulation}</p>
                    </div>
                  </div>
                  <div className="Planets-SpaceCrafts">
                    {/* loop through all spacecrafts and planets and render planet image, 
              spacecrafts, and planet name, and planet current population , 
              for each spacecraft render image, spacecraft name and capacity*/}
                    {spaceContext.spaceCrafts.map((spacecraft) => {
                      return spacecraft.currentLocation == planet.id ? (
                        <div
                          className="Planets-SpaceCraft-Img-Info"
                          key={nanoid()}
                        >
                          <img
                            key={uuidv4()}
                            src={spacecraft.pictureUrl}
                            className="Planets-SmallImg"
                            onClick={() => {
                              //set spaceCraftLocation state to point to spacecraft id
                              //set spacecraft pressed on state to true
                              setSpaceCraftLocation(spacecraft.id);
                              setOnPressedSpaceCraft("true");
                            }}
                          />
                          {/* //send spacecraft to planet, if both(spacecraft and planet) are pressed on and
                    // ensuring the spacecraft destination(planet) differs from the current spacecraft planet location. */}
                          <div>
                            {onPressedPlanet === "true" &&
                            onPressedSpaceCraft === "true" &&
                            currentPlanet !== spaceCraftLocation
                              ? sendOffSpaceCraft(
                                  spaceCraftLocation,
                                  currentPlanet,
                                  spacecraft
                                )
                              : ""}
                          </div>
                          <div className="Planets-SpaceCraft-Info">
                            <p>Name: {spacecraft.name}</p>
                            <p>Capacity: {spacecraft.capacity}</p>
                          </div>
                        </div>
                      ) : (
                        ""
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// initialize loader to retrieve all planets from SpaceTravelAPI
export const planetsLoader = async () => {
  const res = await SpaceTravelApi.getPlanets();
  return res.data;
};
//export Planets Page for further use
export default Planets;
