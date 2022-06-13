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

// You can add a new key with getter function whenever you add new car type.
// And whenever you need to remove, the matching key and getter function will be removed.
// This entire object can be moved to 'carTypes.js' file rather than having its own file.
