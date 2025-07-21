import "../styling/DestroyButton.css";
import { useContext, useState } from "react";
import { SpaceContext } from "../context/SpaceCraftProvider";
import Loading from "./Loading";

//DestroyButton Component: destroys spacecraft upon clicking on it
const DestroyButton = ({ spacecraft }) => {
  //Loading is initially not visible until Destroy button is clicked
  let [isLoading, setIsLoading] = useState(false);
  //access remove method to delete spacecraft
  const spaceContext = useContext(SpaceContext);

  return (
    <div className="DestroyButton-Main">
      {isLoading ? (
        <Loading />
      ) : (
        <button
          className="DestroyButton"
          onClick={() => {
            setIsLoading(true);
            setTimeout(() => {
              setIsLoading(false);
              spaceContext.dispatch({ type: "REMOVE", payload: spacecraft.id });
            }, 2000);
          }}
        >
          ☄️ Destroy
        </button>
      )}
    </div>
  );
};
//export DestroyButton for further use
export default DestroyButton;
