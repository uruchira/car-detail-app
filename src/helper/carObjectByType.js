import {
  getElectricCar,
  getTwoWheelsCar,
  getSportCar,
  getHybridCar,
} from "./carTypes";

// This object maps the different car type with its relvent function
// that pass the car object with all properties.

export const carObjectByType = {
  electric: getElectricCar,
  twoWheels: getTwoWheelsCar,
  sport: getSportCar,
  hybrid: getHybridCar, // Mapping the newly added car type
};

// This entire object can be moved to 'carTypes.js' file rather than having its own file.
