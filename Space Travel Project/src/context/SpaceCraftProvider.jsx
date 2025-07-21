import { createContext } from "react";
import { useReducer } from "react";
import SpaceTravelApi from "../services/SpaceTravelApi";

//create a shared spacecraft context
export const SpaceContext = createContext();

//fetch data from api to get all spacecrafts
const res = await SpaceTravelApi.getSpacecrafts();

//load already present spacecrafts
const initialState = [...res.data];

//use reducer function to manipulate data from spacecrafts, such as adding and removing spacecrafts
export function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((sCraft) => sCraft.id !== action.payload);
    default:
      return state;
  }
}

//instantiate a context provider to share across all components
const SpaceCraftProvider = ({ children }) => {
  const [spaceCrafts, dispatch] = useReducer(reducer, initialState);
  return (
    <SpaceContext.Provider value={{ spaceCrafts, dispatch }}>
      {children}
    </SpaceContext.Provider>
  );
};
//export SpaceCraftProvider for further use
export default SpaceCraftProvider;
