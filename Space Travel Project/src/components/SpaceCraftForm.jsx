import { useState } from "react";
import "../styling/SpaceCraftForm.css";
import { useContext, useEffect } from "react";
import { SpaceContext } from "../context/SpaceCraftProvider";
import { nanoid } from "nanoid";
import Loading from "./Loading";

// SpaceCraft Form Component: used to render a spaceraft creation form
const SpaceCraftForm = () => {
  //retrieve all current spacecrafts through UseContext API/useReducer
  const spaceContext = useContext(SpaceContext);

  //Loading is initially not visible
  const [isLoading, setIsLoading] = useState(false);

  //set state for errors found in form fields
  const [errors, setErrors] = useState({});

  //initial state for form field values
  const INITIAL_STATE = {
    id: "",
    name: "",
    capacity: "",
    description: "",
    pictureUrl: "",
    currentLocation: "",
  };

  //generate a random number from 0-7 and randomly place a spacecraft on a planet
  const randNum = Math.floor(Math.random() * 8);

  //set state for form field values to hold all properties
  const [formData, setFormData] = useState(INITIAL_STATE);

  //function to validate all form fields
  function isValid() {
    let formErrors = {};
    //check if name field value is present
    if (!formData.name) {
      formErrors.name_message = "Name is required";
    }
    //check if capacity field value is present
    if (!formData.capacity) {
      formErrors.capacity_message = "Capacity is required";
    }
    //check if description field value is present
    if (!formData.description) {
      formErrors.description_message = "Description is required";
    }
    //set errors to point to formErrors object
    setErrors(formErrors);
    //if the length of the formErrors is equal to 0, no errors present in the form
    return Object.keys(formErrors).length === 0;
  }

  //handle change through input field and update field values into formData
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }
  //handle submit of form, add it to the global spacecrafts array
  // and clear input fields for new incoming data
  function handleSubmit(e) {
    e.preventDefault();
    if (isValid()) {
      const payload = {
        id: nanoid(),
        name: formData.name,
        capacity: formData.capacity,
        description: formData.description,
        pictureUrl: formData.pictureUrl,
        currentLocation: randNum,
      };
      spaceContext.dispatch({ type: "ADD", payload: payload });
      setFormData(INITIAL_STATE);
      setErrors({});
      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].value = "";
      e.target[3].value = "";
      setIsLoading(true);
    }
  }
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

  //Form rendered here
  return (
    <div>
      <form className="SpaceCraftForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.value}
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Capacity"
          value={formData.value}
          name="capacity"
          onChange={handleChange}
        />
        <textarea
          placeholder="Description"
          value={formData.value}
          name="description"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Picture URL"
          value={formData.value}
          name="pictureUrl"
          onChange={handleChange}
        />
        <button type="submit">Build 🏗️</button>
      </form>
      <div>{isLoading ? <Loading /> : ""}</div>

      {/* //render error messages here */}
      <div style={{ color: "red" }}>
        <p>{errors.name_message}</p>
        <p>{errors.capacity_message}</p>
        <p>{errors.description_message}</p>
      </div>
    </div>
  );
};

// export SpaceCraftForm for further use
export default SpaceCraftForm;
