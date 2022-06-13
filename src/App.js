import React from "react";
import { carObjectByType } from "./helper/carObjectByType";

// This function accepts the car type and returns a car object.
// No need to do any changes to this function when adding a new type or deleting an existing type.
const getCar = (carType) => {
  if (carType && carObjectByType[carType]) {
    const carObject = carObjectByType[carType]();
    return carObject;
  }
  return null;
};

console.log(getCar("electric"));
console.log(getCar("twoWheels"));
console.log(getCar("sport"));
console.log("");
console.log(getCar("hybrid"));

function App() {
  return (
    <>
      <h1>
        Write an application that gets car type and returns a car from it.
      </h1>
      <p>Please open the console in the developer tools for the output.</p>
    </>
  );
}

export default App;
