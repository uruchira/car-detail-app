import React from "react";
import { carObjectByType } from "./helper/carObjectByType";

// This function accepts the car type and returns a car object.
// Normally this function doesn't sit here, it will be imported from helper/util folder.
export const getCar = (carType) => {
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
console.log("");
console.log(getCar("manual"));
console.log(getCar(""));
console.log(getCar());

function App() {
  return (
    <>
      <h1>
        Write an application that gets car type and returns a car from it.
      </h1>
      <ul>
        <li>Car type can be electric, 2 wheels or sport.</li>
        <li>Each car type might have different parts.</li>
        <li>You are free to make any assumption, e.g. car parts.</li>
      </ul>
      <p>Please open the console in the developer tools to see the output.</p>
    </>
  );
}

export default App;
