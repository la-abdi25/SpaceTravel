import "../styling/SpaceCraft.css";
import { SpaceContext } from "../context/SpaceCraftProvider";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

//SpaceCraft Page: presents comprehensive information about a particular spacecraft
const SpaceCraft = () => {
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

  //different page ids for each spacecraft detail
  const { id } = useParams();
  const spaceContext = useContext(SpaceContext);
  console.log(spaceContext.spaceCrafts);

  const detailedObj = {};
  const res = [];
  for (let i = 0; i < spaceContext.spaceCrafts.length; i++) {
    //adding all spacecraft ids to res to later check for wrong ids being accessed
    res.push(spaceContext.spaceCrafts[i].id);
    if (spaceContext.spaceCrafts[i].id === id) {
      detailedObj.name = spaceContext.spaceCrafts[i].name;
      detailedObj.capacity = spaceContext.spaceCrafts[i].capacity;
      detailedObj.description = spaceContext.spaceCrafts[i].description;
      detailedObj.pictureUrl = spaceContext.spaceCrafts[i].pictureUrl;
    }
  }
  //loop through res array to check if id exists, if not show HomePage instead and throw an error
  for (let i = 0; i < res.length; i++) {
    if (res.indexOf(id) === -1) {
      throw Error("id does not exist");
    }
  }

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="SpaceCraft">
          <img src={detailedObj.pictureUrl} className="SpaceCraft-Img" />
          <div className="SpaceCraft-Info">
            <div className="SpaceCraft-Details">
              <p>Name: {detailedObj.name}</p>
              <p>Capacity: {detailedObj.capacity}</p>
            </div>
            <div className="SpaceCraft-Description">
              <h1>Description:</h1>
              <p>{detailedObj.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

//export SpaceCraft page for further use
export default SpaceCraft;
