import { carObjectByType } from "./helper/carObjectByType";

// This function returns a car object according to car type.
// No need to do any changes in this function when adding a new type or deleting an existing type.
const getCar = (carType) => {
  const carObject = carObjectByType[carType]();
  return carObject;
};

// E.g. This is how to get the car object by passing car type.
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
